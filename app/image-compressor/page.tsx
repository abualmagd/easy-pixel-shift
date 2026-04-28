import FileLinks from "@/app/src/components/fileLinks";
import ImageLinks from "@/app/src/components/imageLinks";
import { Metadata } from "next";
import { DataSecure } from "@/app/src/components/data";
import SeoContent from "@/app/src/components/content";
import ComparisonSection from "@/app/src/components/cmpare";
import { BlogComponent } from "@/app/src/components/blogComponent";
import { GlobalMain } from "@/app/src/components/Main";
import ImageCompressor from "@/app/src/components/imageCompressor";
import CompressionBenefits from "@/app/src/components/compressor-benefits";

export const metadata: Metadata = {
  title: "Fast Image Compressor | Free Online Tool",
  description:
    "Compress images instantly in your browser using hardware acceleration. Reduce file size without losing quality. No files are uploaded to any server.",
  keywords: [
    "image compressor",
    "browser-based compression",
    "reduce image size",
    "jpeg compressor",
    "png compressor",
    "free online tool",
  ],
  authors: [{ name: "Easypixelshift" }],
  openGraph: {
    title: "Fast Online Image Compressor",
    description:
      "Privacy-focused image compression. All processing happens locally in your browser.",
    url: "https://easypixelshift.com/image-compressor",
    siteName: "Easy Pixel Shift",
    images: [
      {
        url: "https://easypixelshift.com/eps-logo-easy-pixel-shift.jpeg", // Create a preview image
        width: 1200,
        height: 630,
        alt: "Image Compressor Tool Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Online Image Compressor",
    description: "Compress images in seconds. 100% private and local.",
    images: ["https://easypixelshift.com/eps-logo-easy-pixel-shift.jpeg"],
  },
};

export default async function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <GlobalMain>
        <ImageCompressor />
        <CompressionBenefits />
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
