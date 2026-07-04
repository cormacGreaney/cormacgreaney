"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  onClick,
  className,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  const isContact = href === "#contact";

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "transition-colors",
        isContact
          ? "rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-zinc-200"
          : "text-sm text-muted hover:text-foreground",
        className,
      )}
    >
      {label}
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 transition-all duration-300",
          scrolled ? "pt-3" : "pt-5",
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300",
            scrolled
              ? "border-white/10 bg-background/80 shadow-lg shadow-black/20 backdrop-blur-xl"
              : "border-white/5 bg-background/60 backdrop-blur-md",
          )}
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="group flex items-center transition-opacity hover:opacity-80"
            aria-label={`${siteConfig.name} — home`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-xs font-semibold tracking-widest text-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
              {siteConfig.initials}
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-full bg-current transition-transform duration-300",
                  mobileOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full bg-current transition-opacity duration-300",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full bg-current transition-transform duration-300",
                  mobileOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </div>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    onClick={() => setMobileOpen(false)}
                    className={
                      item.href === "#contact"
                        ? "px-6 py-3 text-lg"
                        : "text-2xl font-medium text-foreground"
                    }
                  />
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
