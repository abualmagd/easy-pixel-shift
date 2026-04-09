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
import { GlobalMain } from "@/app/src/components/Main";

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
      <GlobalMain>
        <GifMaker />
        <FFeature from={from} to={to} />
        <FileLinks />
        <ImageLinks />
        <DataSecure />
        <SeoContent page="gif" />
        <ComparisonSection />
        <BlogComponent />
      </GlobalMain>
    </div>
  );
}
