import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <PageTransition>
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </PageTransition>
  );
}
