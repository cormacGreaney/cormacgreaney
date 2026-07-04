"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center pt-24 pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.2 },
            },
          }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-6 text-sm font-medium tracking-widest text-accent uppercase"
          >
            {siteConfig.role}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={fadeInUp}
            className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="#work" variant="primary">
              View my work
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
