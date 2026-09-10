import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Flux" },
  { to: "/surse", label: "Surse" },
  { to: "/despre", label: "Despre" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="border-b border-line bg-header text-header-fg">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-accent" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="1" y="10" width="3" height="5" rx="0.4" />
              <rect x="6.5" y="6" width="3" height="9" rx="0.4" />
              <rect x="12" y="2" width="3" height="13" rx="0.4" />
            </svg>
          </span>
          <span className="font-mono text-sm tracking-tight">
            click
            <span className="text-accent">ai</span>
            <span className="text-faint">.ro</span>
          </span>
        </Link>
        <p className="hidden font-mono text-xs text-faint sm:block">
          actualizat zilnic
        </p>
      </div>
      <nav
        className="border-t border-white/10 bg-paper"
        aria-label="Principal"
      >
        <div className="mx-auto flex max-w-3xl gap-6 px-4 sm:px-6">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/" || pathname.startsWith("/stiri/")
                : pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "border-b-2 py-3 font-mono text-xs tracking-widest uppercase no-underline",
                  active
                    ? "border-ink text-ink"
                    : "border-transparent text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
