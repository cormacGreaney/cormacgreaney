"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Projects() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          description="A few things I've built — more coming soon as I continue to update this portfolio."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.projects.map((project, index) => (
            <motion.div key={project.title} variants={fadeInUp}>
              <GlassCard
                as="article"
                className="group flex h-full flex-col"
              >
                <span className="mb-4 font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  id={index === 0 ? "work-heading" : undefined}
                  className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent"
                >
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-zinc-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-foreground"
                  aria-label={`View ${project.title}`}
                >
                  View project
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
