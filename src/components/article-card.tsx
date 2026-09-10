import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/articles";
import { formatArticleDate } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  const stamp = formatArticleDate(article.publishedAt);

  return (
    <article className="grid grid-cols-[4.5rem_1fr] gap-x-4 border-b border-line py-7 sm:grid-cols-[5.5rem_1fr]">
      <time
        dateTime={article.publishedAt}
        className="pt-1 font-mono text-xs leading-5 text-muted tabular-nums"
      >
        {stamp.short}
        <br />
        {stamp.time}
      </time>
      <Link
        to="/stiri/$slug"
        params={{ slug: article.slug }}
        className="group block border-l-2 border-rail pl-4 no-underline sm:pl-5"
      >
        <p className="font-mono text-xs tracking-widest text-muted uppercase">
          [{article.category}]
        </p>
        <h2 className="mt-1 font-display text-xl leading-snug text-ink group-hover:text-accent sm:text-2xl">
          {article.title}
        </h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
          {article.lead}
        </p>
      </Link>
    </article>
  );
}
