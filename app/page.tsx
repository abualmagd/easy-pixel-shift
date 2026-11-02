import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { siteLink } from "./src/const";
import ImageConverterContainer from "@/app/src/components/imageConverterContainer";
import ImageFeature from "@/app/src/components/imageFeatureComponent";
import ImageFormatGuide from "@/app/src/components/imageFormatGuide";
import ImageLinks from "@/app/src/components/imageLinks";
import FileLinks from "@/app/src/components/fileLinks";
import Navbar from "./src/components/navbar";
import MyFooter from "./src/components/footer";

export const metadata: Metadata = {
  title: "Free Online Image Converter | JPG, PNG, WebP, SVG & ICO",
  description:
    "Convert images between JPG, JPEG, PNG, WebP, SVG and ICO in your browser. Choose an output format, review its trade-offs, and download your converted image.",
  alternates: { canonical: siteLink },
  authors: [{ name: "Ismail Abu Almagd" }],
  openGraph: {
    title: "Free Online Image Converter | Easy Pixel Shift",
    description:
      "Convert images between common formats in your browser, with practical guidance on quality, transparency and format compatibility.",
    type: "website",
    url: siteLink,
    images: [
      {
        url: `${siteLink}/eps-logo-easy-pixel-shift.jpeg`,
        width: 1200,
        height: 630,
        alt: "Easy Pixel Shift image conversion tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Converter | Easy Pixel Shift",
    description:
      "Convert common image formats in your browser and learn which format is right for your image.",
    images: [`${siteLink}/eps-logo-easy-pixel-shift.jpeg`],
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-50">
        <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 bg-white px-4 py-12 sm:px-6 lg:px-10">
          <ImageConverterContainer
            title="Free online image converter"
            slogan="Convert JPG, JPEG, PNG, WebP, SVG and ICO images. Choose a file and select the format you need."
            from=""
            to=""
          />
          <ImageFeature />
          <ImageFormatGuide />
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Explore image converters</h2>
            <p className="text-base leading-7 text-slate-600">
              Open a dedicated converter when you already know the source and
              output formats you need.
            </p>
            <ImageLinks />
          </div>
          <FileLinks />
        </main>
      </div>
      <MyFooter />
      <ToastContainer />
    </>
  );
}
