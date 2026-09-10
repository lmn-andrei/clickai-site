import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArticleCard } from "@/components/article-card";
import { Filters } from "@/components/filters";
import { SiteShell } from "@/components/site-shell";
import {
  articles,
  articlesByCategory,
  groupByDay,
  matchIntent,
  type Category,
} from "@/lib/articles";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [intent, setIntent] = useState("");
  const [category, setCategory] = useState<Category | "Toate">("Toate");

  const visible = useMemo(() => {
    return matchIntent(articlesByCategory(category), intent);
  }, [category, intent]);

  const groups = groupByDay(visible);
  const empty = visible.length === 0;

  return (
    <SiteShell>
      <header className="pt-10">
        <h1 className="font-display text-4xl font-medium tracking-tight text-ink">
          Știri AI
        </h1>
        <p className="mt-3 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
          Știri despre inteligență artificială, în română. Colectate și
          publicate automat.
        </p>
      </header>

      <Filters
        intent={intent}
        category={category}
        onIntentChange={setIntent}
        onCategoryChange={setCategory}
        resultCount={visible.length}
        totalCount={articles.length}
      />

      {empty ? (
        <p className="mt-12 max-w-md text-[0.95rem] leading-relaxed text-muted">
          Nu avem încă o știre care să se potrivească. Urmărește Fluxul sau
          alege o categorie.
        </p>
      ) : (
        <div className="mt-4">
          {groups.map((group) => (
            <section key={group.key} className="mt-10">
              <h2 className="border-b border-line pb-2 font-mono text-xs tracking-widest text-muted uppercase">
                {group.heading}
              </h2>
              <div>
                {group.items.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </SiteShell>
  );
}
