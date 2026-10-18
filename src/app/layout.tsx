import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const themeInit = `try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}`;

export const metadata: Metadata = {
  title: "Muhammad Shaheer · Full-Stack & Cloud/DevOps Engineer",
  description:
    "Muhammad Shaheer — full-stack software engineer building production web apps and the cloud & DevOps infrastructure that keeps them running.",
  metadataBase: new URL("https://shaheeranser.github.io/"),
  openGraph: {
    title: "Muhammad Shaheer · Full-Stack & Cloud/DevOps Engineer",
    description: "Production web apps, and the infrastructure that keeps them running.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plexSans.variable} ${plexMono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
