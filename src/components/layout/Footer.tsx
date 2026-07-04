import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {siteConfig.name}.
        </p>

        <ul className="flex items-center gap-6">
          <li>
            <a
              href={siteConfig.social.github}
              className="text-sm text-muted transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={siteConfig.social.linkedin}
              className="text-sm text-muted transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
