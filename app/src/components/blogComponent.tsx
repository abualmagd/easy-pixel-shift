import Link from "next/link";
import { myArticles } from "../articles";
import {
  getArticleExcerpt,
  getArticleReadingTime,
} from "../blogUtils";

type BlogComponentProps = {
  currentSlug: string;
};

const stopWords = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "into",
  "when",
  "what",
  "why",
  "how",
  "your",
  "this",
  "that",
  "these",
  "those",
  "are",
  "can",
  "not",
  "use",
  "using",
  "guide",
  "guides",
  "file",
  "files",
  "image",
  "images",
  "format",
  "formats",
  "conversion",
  "converting",
  "convert",
  "converter",
  "online",
  "best",
  "right",
  "practical",
  "explained",
  "explained",
  "basics",
  "essential",
  "ultimate",
  "mastering",
]);

function getTopicTerms(value: string) {
  return new Set(
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .split(/\s+/)
      .filter((term) => term.length > 1 && !stopWords.has(term)),
  );
}

export function BlogComponent({ currentSlug }: BlogComponentProps) {
  const currentArticle = myArticles.find(
    (article) => article.slug === currentSlug,
  );

  if (!currentArticle) return null;

  const currentTerms = getTopicTerms(
    `${currentArticle.slug} ${currentArticle.title}`,
  );

  const relatedArticles = myArticles
    .filter((article) => article.slug !== currentSlug)
    .map((article) => {
      const articleTerms = getTopicTerms(
        `${article.slug} ${article.title}`,
      );
      const sharedTerms = [...articleTerms].filter((term) =>
        currentTerms.has(term),
      );

      return { article, relevance: sharedTerms.length };
    })
    .filter((item) => item.relevance > 0)
    .sort(
      (a, b) =>
        b.relevance - a.relevance ||
        a.article.title.localeCompare(b.article.title),
    )
    .slice(0, 3)
    .map((item) => item.article);

  if (relatedArticles.length === 0) return null;

  return (
    <aside
      aria-labelledby="more-guides-heading"
      className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
    >
      <div className="mb-6">
        <h2
          id="more-guides-heading"
          className="text-2xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          Related guides
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          More articles selected by topic, so you can explore the same format
          or workflow in greater detail.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-blue-300 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:border-blue-700"
          >
            <div className="mb-2 text-xs text-zinc-500 dark:text-zinc-400">
              {getArticleReadingTime(article.content)} min read
            </div>
            <h3 className="font-semibold leading-snug text-zinc-900 group-hover:text-blue-700 dark:text-zinc-100 dark:group-hover:text-blue-400">
              {article.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {getArticleExcerpt(article.content, 120)}
            </p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
