import { Metadata } from "next";
import Feature from "../src/components/feature";
import ImageConverterContainer from "../src/components/imageConverterContainer";
import { conversionMetaDataList } from "../src/metatags";
import ImageLinks from "../src/components/imageLinks";
import FileLinks from "../src/components/fileLinks";

export const metadata: Metadata = conversionMetaDataList.filter(
  (m) => m.link === "/jpg-to-png"
)[0].metadata;

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-10 items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ImageConverterContainer
          title={"JPG to PNG"}
          slogan="Easily convert JPG to PNG With The Best online tool to convert JPG to PNG.."
          from="jpg"
          to="png"
        />
        <Feature from={"jpg"} to={"png"} />
        <ImageLinks />
        <FileLinks />
      </main>
    </div>
  );
}
