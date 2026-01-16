import FileLinks from "@/app/src/components/fileLinks";
import ImageLinks from "@/app/src/components/imageLinks";
import { Metadata } from "next";
import { baseFileMetadataTemplate } from "@/app/src/metatags";
import FFeature from "@/app/src/components/fFeatures";
import JpgPdfConverter from "@/app/src/components/jpgPdfConverter";
import { DataSecure } from "@/app/src/components/data";
import FormatDef from "@/app/src/components/FormatDef";

export async function generateMetadata(): Promise<Metadata> {
  const from = "jpg";
  const to = "pdf";
  return baseFileMetadataTemplate(from, to);
}

export default async function Page() {
  const from = "jpg";
  const to = "pdf";
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <JpgPdfConverter
          title={`Convert ${from.toUpperCase()}  to ${to.toLocaleUpperCase()} free`}
          slogan={`Easily convert files from ${from} format to ${to}, online.`}
          from={from}
          to={to}
        />
        <FFeature from={from} to={to} />
        <FileLinks />
        <ImageLinks />
        <DataSecure />
        <FormatDef from={from} to={to} />
      </main>
    </div>
  );
}
