import { Competencies } from "@/components/Competencies";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { SiteShell } from "@/components/SiteShell";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Work />
      <Experience />
      <Competencies />
      <Contact />
    </SiteShell>
  );
}
