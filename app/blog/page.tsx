import type { Metadata } from "next";
import Link from "next/link";
import { myArticles } from "@/app/src/articles";
import {
  getArticleExcerpt,
  getArticleReadingTime,
} from "@/app/src/blogUtils";

export const metadata: Metadata = {
  title: "File Conversion & Image Optimization Guides | EasyPixelShift",
  description:
    "Practical guides to image formats, file conversion, compression, resizing, privacy, and preparing digital assets for the web and print.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "File Conversion & Image Optimization Guides | EasyPixelShift",
    description:
      "Practical explanations and workflows for choosing, converting, and optimizing digital files.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 transition-colors duration-300 dark:bg-zinc-950 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 border-b border-zinc-200 pb-10 dark:border-zinc-800">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            EasyPixelShift Learning Center
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            File & Image Guides
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Clear, practical explanations of file formats, image quality,
            compression, resizing, and digital asset workflows. Each guide
            focuses on helping you choose the right format and understand the
            trade-offs before you convert.
          </p>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
            {myArticles.length} guides
          </p>
        </header>

        <section aria-label="All guides">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {myArticles.map((article) => (
              <article
                key={article.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="flex h-full flex-col"
                  aria-label={`Read: ${article.title}`}
                >
                  <img
                    src={article.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/9] w-full bg-zinc-100 object-cover dark:bg-zinc-800"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      <span>Practical guide</span>
                      <span>{getArticleReadingTime(article.content)} min read</span>
                    </div>
                    <h2 className="text-xl font-bold leading-snug text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-50 dark:group-hover:text-blue-400">
                      {article.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {getArticleExcerpt(article.content, 190)}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                      Read guide <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
