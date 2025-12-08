import { Metadata } from "next";
import ImageConverterContainer from "@/app/src/components/imageConverterContainer";
import ImageFeature from "@/app/src/components/imageFeatureComponent";
import ImageLinks from "@/app/src/components/imageLinks";
import FileLinks from "@/app/src/components/fileLinks";
import { siteLink } from "./src/const";

export const metadata: Metadata = {
  title: "Online Image Converter - Free & Fast Image Format Conversion",
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
      </main>
    </div>
  );
}
