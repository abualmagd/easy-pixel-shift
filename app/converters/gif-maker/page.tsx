import FileLinks from "@/app/src/components/fileLinks";
import ImageLinks from "@/app/src/components/imageLinks";
import { Metadata } from "next";
import { baseFileMetadataTemplate } from "@/app/src/metatags";
import FFeature from "@/app/src/components/fFeatures";
import GifMaker from "@/app/src/components/gifMaker";
import { DataSecure } from "@/app/src/components/data";
import SeoContent from "@/app/src/components/content";
import ComparisonSection from "@/app/src/components/cmpare";
import { BlogComponent } from "@/app/src/components/blogComponent";

export async function generateMetadata(): Promise<Metadata> {
  const from = "images";
  const to = "gif";
  return baseFileMetadataTemplate(from, to);
}

export default async function Page() {
  const from = "images";
  const to = "gif";
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <GifMaker />
        <FFeature from={from} to={to} />
        <FileLinks />
        <ImageLinks />
        <DataSecure />
        <SeoContent page="gif" />
        <ComparisonSection />
        <BlogComponent />
      </main>
    </div>
  );
}
