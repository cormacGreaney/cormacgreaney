"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to interesting projects, collaborations, and conversations. The best way to reach me is by email."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="mx-auto max-w-xl"
        >
          <GlassCard className="text-center">
            <h3 id="contact-heading" className="sr-only">
              Contact information
            </h3>
            <p className="text-lg text-body">
              Have a project in mind or just want to say hello?
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button href={`mailto:${siteConfig.email}`} variant="primary">
                {siteConfig.email}
              </Button>
              <Button
                href={siteConfig.social.github}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                href={siteConfig.social.linkedin}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
