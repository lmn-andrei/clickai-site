import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { SOURCES } from "@/lib/articles";

export const Route = createFileRoute("/surse")({ component: SursePage });

function SursePage() {
  return (
    <SiteShell>
      <header className="pt-10">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">
          [Monitorizare]
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">
          Sursele din care citim
        </h1>
        <p className="mt-3 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
          Colectarea pornește din surse publice. Articolul ajunge în flux după
          filtrul tematic și după pasul Claude.
        </p>
      </header>

      <ul className="mt-10 divide-y divide-line border-t border-line">
        {SOURCES.map((source) => (
          <li key={source.url} className="py-6">
            <p className="font-display text-xl text-ink">{source.name}</p>
            <p className="mt-1 text-sm text-muted">{source.blurb}</p>
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-mono text-sm text-accent break-all hover:underline"
            >
              {source.url}
            </a>
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}
