import ImageConverterContainer from "@/app/src/components/imageConverterContainer";
import ImageFeature from "@/app/src/components/imageFeatureComponent";
import ImageLinks from "@/app/src/components/imageLinks";
import FileLinks from "@/app/src/components/fileLinks";
import { DataSecure } from "./src/components/data";
import SeoContent from "./src/components/content";
import ComparisonSection from "./src/components/cmpare";
import { BlogComponent } from "./src/components/blogComponent";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl gap-10 flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ImageConverterContainer
          title={"Image converter"}
          slogan="Easily convert images from one format to another, online."
          from=""
          to=""
        />
        <ImageFeature />
        <ImageLinks />
        <FileLinks />
        <DataSecure />
        <SeoContent page="home" />
        <ComparisonSection />
        <BlogComponent />
      </main>
    </div>
  );
}
