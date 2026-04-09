import ImageConverterContainer from "@/app/src/components/imageConverterContainer";
import ImageFeature from "@/app/src/components/imageFeatureComponent";
import ImageLinks from "@/app/src/components/imageLinks";
import FileLinks from "@/app/src/components/fileLinks";
import { DataSecure } from "./src/components/data";
import SeoContent from "./src/components/content";
import ComparisonSection from "./src/components/cmpare";
import { BlogComponent } from "./src/components/blogComponent";
import { GlobalMain } from "./src/components/Main";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <GlobalMain>
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
      </GlobalMain>
    </div>
  );
}
