import { BlogComponent } from "@/app/src/components/blogComponent";
import ComparisonSection from "@/app/src/components/cmpare";
import SeoContent from "@/app/src/components/content";
import Converter from "@/app/src/components/converterContainer";
import { DataSecure } from "@/app/src/components/data";
import FileFeature from "@/app/src/components/fileFeature";
import FileLinks from "@/app/src/components/fileLinks";
import ImageLinks from "@/app/src/components/imageLinks";
import { GlobalMain } from "@/app/src/components/Main";
import { siteLink } from "@/app/src/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Online File Converter - Free Document, Audio, Video & Archive Conversion",
  description:
    "Convert documents (PDF, DOCX), audio (MP3, WAV), video (MP4, MOV), and archives (ZIP, RAR) easily online. Free, fast, and secure file format conversion.",
  keywords: [
    "file converter",
    "online file converter",
    "free file converter",
    "document converter",
    "audio converter",
    "video converter",
    "convert file to pdf",
    "convert docx to pdf",
    "convert mp4 to mp3",
  ],
  authors: [{ name: "ismail abu almagd" }],
  openGraph: {
    title:
      "Online File Converter - Free Document, Audio, Video & Archive Conversion",
    description:
      "Convert documents (PDF, DOCX), audio, video, and archives easily online. Fast, secure, and high-quality conversion for all file types.",
    type: "website",
    images: [
      {
        url: `${siteLink}+/eps-logo-easy-pixel-shift.jpeg`, // IMPORTANT: A full 1200x630 image URL
        width: 1200,
        height: 630,
        alt: "File Converter tool preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Online File Converter for All Formats",
    description:
      "Convert documents, audio, video, and archives online. Secure, fast, and completely free to use.",
    images: `${siteLink}+/eps-logo-easy-pixel-shift.jpeg`,
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <GlobalMain>
        <Converter
          title={"File converter"}
          slogan="Easily convert files from one format to another, online."
          from=""
          to=""
        />
        <FileFeature />
        <FileLinks />
        <ImageLinks />
        <DataSecure />
        <SeoContent page="file" />
        <ComparisonSection />
        <BlogComponent />
      </GlobalMain>
    </div>
  );
}
