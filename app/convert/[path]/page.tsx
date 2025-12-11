import Converter from "@/app/src/components/converterContainer";
import FileLinks from "@/app/src/components/fileLinks";
import ImageLinks from "@/app/src/components/imageLinks";
import { Metadata } from "next";
import { myDocumentLinks } from "@/app/src/const";
import { baseFileMetadataTemplate } from "@/app/src/metatags";
import FFeature from "@/app/src/components/fFeatures";

type Props = {
  params: Promise<{ path: string }>;
};

export async function generateStaticParams() {
  const paths = myDocumentLinks;

  return paths.map((p) => ({
    path: p.link.split("/")[1],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;

  // Parse formats from slug
  const formats = path.split("-to-");

  const from = formats[0] || "pdf";
  const to = formats[1] || "docx";
  return baseFileMetadataTemplate(from, to);
}

export default async function Page({ params }: Props) {
  const { path } = await params;
  if (!path) {
    return <div>not found</div>;
  } else {
    const formats = path.split("-to-");

    const from = formats[0] || "pdf";
    const to = formats[1] || "docx";
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Converter
            title={`Convert ${from.toUpperCase()}  to ${to.toLocaleUpperCase()} free`}
            slogan={`Easily convert files from ${from} format to ${to}, online.`}
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
}
