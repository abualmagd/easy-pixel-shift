import { Metadata } from "next";
import ImageConverterContainer from "../../src/components/imageConverterContainer";
import ImageFeature from "../../src/components/imageFeatureComponent";
import ImageLinks from "../../src/components/imageLinks";
import FileLinks from "../../src/components/fileLinks";
import { siteLink } from "@/app/src/const";
import { DataSecure } from "@/app/src/components/data";
import ComparisonSection from "@/app/src/components/cmpare";
import { GlobalMain } from "@/app/src/components/Main";

export const metadata: Metadata = {
  title: "Online Image Converter",
  description:
    "Convert images easily between popular formats like PNG, JPG, WEBP, and more, all online and for free. Fast, secure, and high-quality image file conversion.",
  keywords: [
    "image converter",
    "online image converter",
    "convert image to jpg",
    "convert image to png",
    "free image converter",
    "image format conversion",
    "webp converter",
  ],
  authors: [{ name: "ismail abu almagd" }],

  openGraph: {
    title: "Online Image Converter - Free & Fast Image Format Conversion",
    description:
      "Convert images easily between popular formats like PNG, JPG, WEBP, and more, all online and for free. Fast, secure, and high-quality image file conversion.",
    type: "website",
    images: [
      {
        url: `${siteLink}+/eps-logo-easy-pixel-shift.jpeg`, // IMPORTANT: A full 1200x630 image URL
        width: 1200,
        height: 630,
        alt: "Image Converter tool preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Online Image Converter - Free & Fast Conversion",
    description:
      "Convert images between formats like PNG, JPG, and WEBP online. Fast, secure, and completely free to use.",

    images: `${siteLink}+/eps-logo-easy-pixel-shift.jpeg`,
  },
};

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
        <ComparisonSection />
      </GlobalMain>
    </div>
  );
}
