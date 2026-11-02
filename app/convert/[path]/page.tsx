import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Converter from "@/app/src/components/converterContainer";
import FileLinks from "@/app/src/components/fileLinks";
import ImageLinks from "@/app/src/components/imageLinks";
import { myDocumentLinks } from "@/app/src/const";
import { baseFileMetadataTemplate } from "@/app/src/metatags";
import FFeature from "@/app/src/components/fFeatures";

type Props = {
  params: Promise<{ path: string }>;
};

export async function generateStaticParams() {
  return myDocumentLinks.map((item) => ({
    path: item.link.split("/")[1],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;
  const conversion = myDocumentLinks.find((item) => item.link === `/${path}`);
  if (!conversion) return {};

  const [from, to] = path.split("-to-");
  return baseFileMetadataTemplate(from, to);
}

export default async function Page({ params }: Props) {
  const { path } = await params;
  const conversion = myDocumentLinks.find((item) => item.link === `/${path}`);
  if (!conversion) notFound();

  const [from, to] = path.split("-to-");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center gap-10 bg-white px-4 py-12 sm:px-6 lg:px-10">
        <Converter
          title={`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
          slogan={`Convert a ${from.toUpperCase()} file to ${to.toUpperCase()} in your browser. Review the format notes below before downloading the result.`}
          from={from}
          to={to}
        />
        <FFeature from={from} to={to} />
        <FileLinks />
        <ImageLinks />
      </main>
    </div>
  );
}
