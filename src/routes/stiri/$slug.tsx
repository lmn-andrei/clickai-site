import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import {
  formatArticleDate,
  getArticle,
  relatedArticles,
} from "@/lib/articles";

export const Route = createFileRoute("/stiri/$slug")({
  component: ArticlePage,
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  notFoundComponent: ArticleMissing,
});

function ArticleMissing() {
  return (
    <SiteShell>
      <p className="pt-12 font-mono text-sm text-muted">Știrea nu există.</p>
      <Link to="/" className="mt-4 inline-block text-accent hover:underline">
        Înapoi în Flux
      </Link>
    </SiteShell>
  );
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const stamp = formatArticleDate(article.publishedAt);
  const related = relatedArticles(article);

  return (
    <SiteShell>
      <article className="pt-8">
        <Link
          to="/"
          className="font-mono text-xs text-muted no-underline hover:text-ink"
        >
          ← Flux
        </Link>
        <p className="mt-6 font-mono text-xs tracking-widest text-muted uppercase">
          [{article.category}]
        </p>
        <h1 className="mt-2 max-w-xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 font-mono text-xs text-muted">
          {stamp.long} · publicat automat
        </p>

        <div className="mt-8 max-w-xl space-y-5 border-t border-line pt-8 text-[1.05rem] leading-relaxed text-ink-soft">
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-10 max-w-xl border-t border-line pt-6">
          <h2 className="font-mono text-xs tracking-widest text-muted uppercase">
            Surse
          </h2>
          <ul className="mt-3 space-y-2">
            {article.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  {source.label}
                  <span className="ml-2 break-all font-mono text-xs text-faint">
                    {source.url}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>

      {related.length > 0 ? (
        <section className="mt-14 max-w-xl border-t border-line pt-8">
          <h2 className="font-mono text-xs tracking-widest text-muted uppercase">
            Din aceeași categorie
          </h2>
          <ul className="mt-4 space-y-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/stiri/$slug"
                  params={{ slug: item.slug }}
                  className="font-display text-lg leading-snug text-ink no-underline hover:text-accent"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </SiteShell>
  );
}
