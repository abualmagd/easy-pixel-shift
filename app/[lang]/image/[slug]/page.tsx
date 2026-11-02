import { notFound } from "next/navigation";
import Feature from "@/app/src/components/feature";
import FileLinks from "@/app/src/components/fileLinks";
import ImageConverterContainer from "@/app/src/components/imageConverterContainer";
import ImageLinks from "@/app/src/components/imageLinks";
import { myImageLinks } from "@/app/src/const";
import { baseMetadataTemplate } from "@/app/src/metatags";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string; lang: "ar" | "fr" }>;
};

export async function generateStaticParams() {
  return myImageLinks.map((item) => ({
    slug: item.link.split("/")[1],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const conversion = myImageLinks.find((item) => item.link === `/${slug}`);
  if (!conversion) return {};
  const [from, to] = slug.split("-to-");
  return baseMetadataTemplate(from, to);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const conversion = myImageLinks.find((item) => item.link === `/${slug}`);
  if (!conversion) notFound();

  const [from, to] = slug.split("-to-");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center gap-10 bg-white px-4 py-12 sm:px-6 lg:px-10">
        <ImageConverterContainer
          title={`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
          slogan={`Convert an image from ${from.toUpperCase()} to ${to.toUpperCase()} in your browser. Choose a file, convert it, and download the result.`}
          from={from}
          to={to}
        />
        <Feature from={from} to={to} />
        <ImageLinks />
        <FileLinks />
      </main>
    </div>
  );
}
