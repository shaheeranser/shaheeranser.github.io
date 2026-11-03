import { get } from "node:https";
import type { RepoStats } from "@/lib/content";

const REPOS = {
  watcher: "shaheeranser/watcher",
  "hijri-api": "shaheeranser/hijri-api",
  genoffice: "genspark-ai/genoffice",
  reamify: "shaheeranser/reamify",
} as const;

export type RepoKey = keyof typeof REPOS;

const FALLBACK: Record<RepoKey, RepoStats> = {
  watcher: { stars: 7, forks: 2 },
  "hijri-api": { stars: 13, forks: 2 },
  genoffice: { stars: 11635, forks: 1601 },
  reamify: { stars: 2, forks: 0 },
};

type GitHubRepo = {
  stargazers_count?: number;
  forks_count?: number;
};

function fetchJson<T>(url: string, token?: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const request = get(
      url,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "shaheeranser-portfolio-build",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      },
      (response) => {
        const status = response.statusCode ?? 0;
        if (status < 200 || status >= 300) {
          response.resume();
          reject(new Error(`GitHub API returned ${status}`));
          return;
        }

        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk: string) => {
          body += chunk;
        });
        response.on("end", () => {
          try {
            resolve(JSON.parse(body) as T);
          } catch (error) {
            reject(error);
          }
        });
      },
    );

    request.on("error", reject);
    request.setTimeout(10_000, () => {
      request.destroy(new Error("GitHub API request timed out"));
    });
  });
}

async function fetchRepo(key: RepoKey, repo: string): Promise<RepoStats> {
  try {
    const data = await fetchJson<GitHubRepo>(
      `https://api.github.com/repos/${repo}`,
      process.env.GITHUB_TOKEN,
    );

    if (typeof data.stargazers_count !== "number" || typeof data.forks_count !== "number") {
      throw new Error("GitHub API response is missing counts");
    }

    return { stars: data.stargazers_count, forks: data.forks_count };
  } catch (error) {
    console.warn(`[github] falling back to cached stats for ${repo}:`, error);
    return FALLBACK[key];
  }
}

export async function getRepoStats(): Promise<Record<RepoKey, RepoStats>> {
  const entries = await Promise.all(
    (Object.entries(REPOS) as Array<[RepoKey, string]>).map(async ([key, repo]) => {
      const stats = await fetchRepo(key, repo);
      return [key, stats] as const;
    }),
  );

  return Object.fromEntries(entries) as Record<RepoKey, RepoStats>;
}
