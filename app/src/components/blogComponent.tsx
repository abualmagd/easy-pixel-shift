import Link from "next/link";
import { myArticles } from "../articles";
import {
  getArticleExcerpt,
  getArticleReadingTime,
} from "../blogUtils";

type BlogComponentProps = {
  currentSlug: string;
};

export function BlogComponent({ currentSlug }: BlogComponentProps) {
  const currentIndex = myArticles.findIndex(
    (article) => article.slug === currentSlug,
  );
  const relatedArticles = Array.from({ length: Math.min(3, myArticles.length - 1) }, (_, offset) => {
    const index = (currentIndex + offset + 1) % myArticles.length;
    return myArticles[index];
  }).filter(Boolean);

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
          More guides to explore
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Continue learning with these additional file and image guides.
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
