import type { Metadata } from "next";
import ImageConverterContainer from "../../src/components/imageConverterContainer";
import ImageFeature from "../../src/components/imageFeatureComponent";
import ImageFormatGuide from "../../src/components/imageFormatGuide";
import ImageLinks from "../../src/components/imageLinks";
import FileLinks from "../../src/components/fileLinks";
import { siteLink } from "@/app/src/const";

export const metadata: Metadata = {
  title: "Online Image Converter | JPG, PNG, WebP, SVG & ICO",
  description:
    "Convert common image formats in your browser. Compare JPEG, PNG, WebP, SVG and ICO features before choosing an output format.",
  alternates: { canonical: siteLink },
  openGraph: {
    title: "Online Image Converter | Easy Pixel Shift",
    description:
      "Convert common image formats in your browser and learn about transparency, image quality and icon compatibility.",
    type: "website",
    url: siteLink,
    images: [
      {
        url: `${siteLink}/eps-logo-easy-pixel-shift.jpeg`,
        width: 1200,
        height: 630,
        alt: "Easy Pixel Shift image converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Image Converter | Easy Pixel Shift",
    description:
      "Convert common image formats in your browser with practical format guidance.",
    images: [`${siteLink}/eps-logo-easy-pixel-shift.jpeg`],
  },
};

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center gap-10 bg-white px-4 py-12 sm:px-6 lg:px-10">
        <ImageConverterContainer
          title="Image converter"
          slogan="Choose an image, select a supported output format, and convert it in your browser."
          from=""
          to=""
        />
        <ImageFeature />
        <ImageFormatGuide />
        <ImageLinks />
        <FileLinks />
      </main>
    </div>
  );
}
