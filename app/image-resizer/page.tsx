import FileLinks from "@/app/src/components/fileLinks";
import ImageLinks from "@/app/src/components/imageLinks";
import { Metadata } from "next";
import { DataSecure } from "@/app/src/components/data";
import SeoContent from "@/app/src/components/content";
import ComparisonSection from "@/app/src/components/cmpare";
import { BlogComponent } from "@/app/src/components/blogComponent";
import { GlobalMain } from "@/app/src/components/Main";
import { ResizerBenefits } from "@/app/src/components/compressor-benefits";
import ImageResizer from "../src/components/imageResizer";

export const metadata: Metadata = {
  title: "Fast Image Resizer | Free Online Tool",
  description:
    "Resize images instantly in your browser using hardware acceleration. Reduce file size without losing quality. No files are uploaded to any server.",
  keywords: [
    "image Resizer",
    "browser-based Resizer",
    "reduce image size",
    "jpeg Resizer",
    "png Resizer",
    "free online tool",
  ],
  authors: [{ name: "Easypixelshift" }],
  openGraph: {
    title: "Fast Online Image Resizer",
    description:
      "Privacy-focused image Resizer. All processing happens locally in your browser.",
    url: "https://easypixelshift.com/image-resizer",
    siteName: "Easy Pixel Shift",
    images: [
      {
        url: "https://easypixelshift.com/eps-logo-easy-pixel-shift.jpeg", // Create a preview image
        width: 1200,
        height: 630,
        alt: "Image Resizer Tool Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Online Image Resizer",
    description: "Resize images in seconds. 100% private and local.",
    images: ["https://easypixelshift.com/eps-logo-easy-pixel-shift.jpeg"],
  },
};

export default async function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <GlobalMain>
        <ImageResizer />
        <ResizerBenefits />
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
