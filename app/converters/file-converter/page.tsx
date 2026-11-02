import type { Metadata } from "next";
import Converter from "@/app/src/components/converterContainer";
import FileFeature from "@/app/src/components/fileFeature";
import FileLinks from "@/app/src/components/fileLinks";
import ImageLinks from "@/app/src/components/imageLinks";
import { siteLink } from "@/app/src/const";

export const metadata: Metadata = {
  title: "Document Converter | PDF, DOCX, HTML & TXT",
  description:
    "Convert between PDF, DOCX, HTML and TXT in your browser. Learn what happens to text, formatting, tables and page layout during conversion.",
  alternates: { canonical: `${siteLink}/converters/file-converter` },
  openGraph: {
    title: "Document Converter | Easy Pixel Shift",
    description:
      "Convert common document formats in your browser, with practical notes about layout and formatting limitations.",
    type: "website",
    url: `${siteLink}/converters/file-converter`,
    images: [
      {
        url: `${siteLink}/eps-logo-easy-pixel-shift.jpeg`,
        width: 1200,
        height: 630,
        alt: "Easy Pixel Shift document converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Document Converter | Easy Pixel Shift",
    description:
      "Convert PDF, DOCX, HTML and TXT files with guidance on expected output.",
    images: [`${siteLink}/eps-logo-easy-pixel-shift.jpeg`],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center gap-10 bg-white px-4 py-12 sm:px-6 lg:px-10">
        <Converter
          title="Document converter"
          slogan="Convert supported PDF, DOCX, HTML and TXT files. Choose a target format and review the limitations before using the result."
          from=""
          to=""
        />
        <FileFeature />
        <FileLinks />
        <ImageLinks />
      </main>
    </div>
  );
}
