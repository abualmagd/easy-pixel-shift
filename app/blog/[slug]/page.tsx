import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { myArticles } from "@/app/src/articles";
import { siteLink } from "@/app/src/const";
import { BlogComponent } from "@/app/src/components/blogComponent";
import {
  getArticleExcerpt,
  getArticleReadingTime,
} from "@/app/src/blogUtils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return myArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = myArticles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Article Not Found | EasyPixelShift" };
  }

  const description = getArticleExcerpt(article.content, 155);
  const canonical = `${siteLink}/blog/${article.slug}`;

  return {
    title: `${article.title} | EasyPixelShift Guides`,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: article.title,
      description,
      url: canonical,
      images: [{ url: article.image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [article.image],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = myArticles.find((item) => item.slug === slug);

  if (!article) notFound();

  const readingTime = getArticleReadingTime(article.content);

  return (
    <main className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
      <article className="mx-auto max-w-3xl px-6 py-10 lg:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <Link
            href="/blog"
            className="font-medium text-blue-700 hover:underline dark:text-blue-400"
          >
            Guides
          </Link>
          <span className="mx-2 text-zinc-400" aria-hidden="true">/</span>
          <span className="text-zinc-500 dark:text-zinc-400">Article</span>
        </nav>

        <header className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            EasyPixelShift Guide
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {getArticleExcerpt(article.content, 220)}
          </p>
          <div className="mt-5 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{readingTime} min read</span>
            <span aria-hidden="true">•</span>
            <span>File formats & digital workflows</span>
          </div>
          <Image
            src={article.image}
            alt=""
            width={1200}
            height={675}
            fetchPriority="high"
            decoding="async"
            className="mt-8 aspect-[16/9] w-full rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </header>

        <hr className="my-9 border-zinc-200 dark:border-zinc-800" />

        <div className="my-article-content max-w-none text-base leading-8 text-zinc-800 dark:text-zinc-200 [&_a]:font-medium [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-4 dark:[&_a]:text-blue-400 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-5 [&_blockquote]:italic [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_li]:my-2 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:mb-5 [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-zinc-200 [&_td]:p-3 dark:[&_td]:border-zinc-700 [&_th]:border [&_th]:border-zinc-200 [&_th]:bg-zinc-100 [&_th]:p-3 dark:[&_th]:border-zinc-700 dark:[&_th]:bg-zinc-800 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        <BlogComponent currentSlug={article.slug} />

        <footer className="mt-14 border-t border-zinc-200 pt-7 dark:border-zinc-800">
          <Link
            href="/blog"
            className="text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400"
          >
            ← Browse all guides
          </Link>
        </footer>
      </article>
    </main>
  );
}
