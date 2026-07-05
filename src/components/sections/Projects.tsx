"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { siteConfig, type Project } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
  headingId?: string;
};

function ProjectCard({
  project,
  index,
  featured = false,
  headingId,
}: ProjectCardProps) {
  return (
    <GlassCard
      as="article"
      className={cn(
        "group relative flex h-full flex-col",
        featured &&
          "border-accent/25 bg-gradient-to-br from-accent/10 via-glass to-glass shadow-lg shadow-[var(--nav-shadow)] lg:p-10",
      )}
    >
      {project.badge ? (
        <span className="mb-4 inline-flex w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase">
          {featured ? "Featured · " : ""}
          {project.badge}
        </span>
      ) : (
        <span className="mb-4 font-mono text-xs text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <h3
        id={headingId}
        className={cn(
          "font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent",
          featured ? "text-2xl sm:text-3xl" : "text-xl",
        )}
      >
        {project.title}
      </h3>
      <p
        className={cn(
          "mt-3 flex-1 leading-relaxed text-muted",
          featured ? "max-w-3xl text-base" : "text-sm",
        )}
      >
        {project.description}
      </p>
      {featured && (
        <p className="mt-4 text-sm text-body">
          Evolved strategies reached up to 94.7% win rate against a random
          baseline on 8×8 draughts under a fixed multi-seed evaluation protocol.
        </p>
      )}
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-surface px-2 py-1 font-mono text-xs text-tag"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={project.href}
          className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-foreground"
          aria-label={`View ${project.title} on GitHub`}
          target={project.href.startsWith("http") ? "_blank" : undefined}
          rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          View on GitHub
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
        {project.reportHref && (
          <a
            href={project.reportHref}
            className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read final report
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </GlassCard>
  );
}

export function Projects() {
  const featuredProjects = siteConfig.projects.filter((project) => project.featured);
  const otherProjects = siteConfig.projects.filter((project) => !project.featured);

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
          description="Selected work from my undergraduate studies and personal projects - spanning AI, web development, systems, and 3D design."
        />

        <div className="space-y-8">
          {featuredProjects.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={0}
                  featured
                  headingId="work-heading"
                />
              ))}
            </motion.div>
          )}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {otherProjects.map((project, index) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
