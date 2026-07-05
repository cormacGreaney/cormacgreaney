"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const SKILLS_PREVIEW_COUNT = 12;

export function About() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const hasMoreSkills = siteConfig.skills.length > SKILLS_PREVIEW_COUNT;
  const visibleSkills = showAllSkills
    ? siteConfig.skills
    : siteConfig.skills.slice(0, SKILLS_PREVIEW_COUNT);

  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title={siteConfig.about.heading}
          description={siteConfig.about.description}
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="lg:col-span-3"
          >
            <GlassCard>
              <motion.div variants={fadeInUp} className="space-y-4">
                {siteConfig.about.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="leading-relaxed text-body first:text-lg first:leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="lg:col-span-2"
          >
            <GlassCard>
              <motion.h3
                variants={fadeInUp}
                id="about-heading"
                className="mb-4 text-sm font-medium tracking-widest text-accent uppercase"
              >
                Expertise
              </motion.h3>
              <motion.ul
                variants={staggerContainer}
                className="flex flex-wrap gap-2"
              >
                <AnimatePresence initial={false}>
                  {visibleSkills.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={fadeInUp}
                      initial={showAllSkills ? { opacity: 0, scale: 0.95 } : false}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="inline-block rounded-full border border-glass-border bg-surface px-3 py-1.5 text-sm text-body">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
              {hasMoreSkills && (
                <motion.button
                  type="button"
                  variants={fadeInUp}
                  onClick={() => setShowAllSkills((prev) => !prev)}
                  aria-expanded={showAllSkills}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
                >
                  {showAllSkills ? "Show less" : "Show more"}
                  <span
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${showAllSkills ? "-rotate-90" : "rotate-90"}`}
                  >
                    →
                  </span>
                </motion.button>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
