"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Building with purpose"
          description="About coming soon."
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
                <p className="text-lg leading-relaxed text-zinc-300">
                  Coming soon.
                </p>
                <p className="leading-relaxed text-muted">
                  Coming soon.
                </p>
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
                {siteConfig.skills.map((skill) => (
                  <motion.li key={skill} variants={fadeInUp}>
                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
