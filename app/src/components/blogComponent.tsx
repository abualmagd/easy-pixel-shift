"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { myArticles } from "../articles";

export function BlogComponent() {
  const [randomArticles, setRandomArticles] = useState<typeof myArticles>([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const shuffled = [...myArticles].sort(() => 0.5 - Math.random());
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRandomArticles(shuffled.slice(0, 4));
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="mt-16 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
      <h3>Read More Guides</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Explore our latest guides and tutorials to enhance your file conversion
        skills.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2">
        {randomArticles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group flex flex-col space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
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
  );
}
