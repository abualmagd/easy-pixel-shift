import { myArticles } from "@/app/src/articles";
import Link from "next/link";

export default function Page() {
  return (
    // Used dark:bg-zinc-950 for a professional deep dark look and transition for smooth mode switching
    <main className="min-h-screen bg-white px-6 py-12 transition-colors duration-300 dark:bg-zinc-950 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Hero Header Section */}
        <header className="mb-16 border-b border-zinc-200 pb-10 dark:border-zinc-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Technical Insights
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Deep dives into file optimization, media formats, and digital
            performance. Practical guides for the modern web.
          </p>
        </header>

        {/* Article Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {myArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              // Updated card: subtle borders and dark:bg-zinc-900 to lift the card off the black background
              className="group flex flex-col space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
                Guide
              </span>

              <h2 className="text-2xl font-bold leading-tight text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-50 dark:group-hover:text-blue-400">
                {article.title}
              </h2>

              <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {article.content.replace(/<[^>]*>/g, "").substring(0, 150)}...
              </p>

              <div className="flex flex-1 items-end pt-4">
                <span className="inline-flex items-center text-sm font-semibold text-zinc-900 transition-all group-hover:gap-2 dark:text-zinc-50">
                  Read Article
                  <span className="ml-1 opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
