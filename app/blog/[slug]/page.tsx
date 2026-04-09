/* eslint-disable @next/next/no-img-element */
import { myArticles } from "@/app/src/articles";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogComponent } from "@/app/src/components/blogComponent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return myArticles.map((path) => ({
    slug: path.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = myArticles.find((a) => a.slug === slug);

  return {
    title: article?.title || "Article Not Found",
    description:
      article?.content.replace(/<[^>]*>/g, "").substring(0, 160) || "",
    openGraph: {
      title: article?.title || "Article Not Found",
      description:
        article?.content.replace(/<[^>]*>/g, "").substring(0, 160) || "",
      images: article?.image,
    },
    twitter: {
      title: article?.title || "Article Not Found",
      description:
        article?.content.replace(/<[^>]*>/g, "").substring(0, 160) || "",
      images: article?.image,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = myArticles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    /* Wrapper ensures the background covers the full screen in dark mode */
    <main className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
      <article className="mx-auto max-w-3xl px-6 py-12 lg:py-20">
        {/* Breadcrumb / Back Navigation */}
        <Link
          href="/blog"
          className="mb-8 inline-block text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          ← Back to insights
        </Link>

        {/* Header Section */}
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <time dateTime="2026-01-01">Published April 2026</time>
            <span>•</span>
            <span>
              {Math.ceil(article.content.split(" ").length / 200)} min read
            </span>
          </div>

          <img
            src={article.image}
            alt={article.title}
            className="mt-8 w-full rounded-lg object-cover"
          />
        </header>

        <hr className="my-8 border-zinc-200 dark:border-zinc-800" />

        {/* Content Section */}
        <div className="max-w-none text-zinc-900 dark:text-zinc-100 my-article-content">
          <div
            className="[&>p]:mb-4 [&>h1]:text-3xl [&>h1]:font-bold [&>ul]:list-disc [&>ul]:ml-6" // Manual styling
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        <BlogComponent />
        {/* Footer info */}
        <footer className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Technical Guide • EasyPixelShift Blog
          </p>
        </footer>
      </article>
    </main>
  );
}
