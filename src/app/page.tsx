import { Competencies } from "@/components/Competencies";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { SiteShell } from "@/components/SiteShell";
import { Work } from "@/components/Work";
import { getRepoStats } from "@/lib/github";

export default async function Home() {
  const stats = await getRepoStats();

  return (
    <SiteShell>
      <Hero stats={stats} />
      <Work stats={stats} />
      <Experience />
      <Competencies />
      <Contact />
    </SiteShell>
  );
}
