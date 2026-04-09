import Converter from "@/app/src/components/converterContainer";
import FileLinks from "@/app/src/components/fileLinks";
import ImageLinks from "@/app/src/components/imageLinks";
import { Metadata } from "next";
import { myDocumentLinks } from "@/app/src/const";
import { baseFileMetadataTemplate } from "@/app/src/metatags";
import FFeature from "@/app/src/components/fFeatures";
import { DataSecure } from "@/app/src/components/data";
import FormatDef from "@/app/src/components/FormatDef";
import ComparisonSection from "@/app/src/components/cmpare";
import { BlogComponent } from "@/app/src/components/blogComponent";
import { GlobalMain } from "@/app/src/components/Main";

type Props = {
  params: Promise<{ path: string }>;
};

export async function generateStaticParams() {
  const paths = myDocumentLinks;

  return paths.map((p) => ({
    path: p.link.split("/")[1],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;

  // Parse formats from slug
  const formats = path.split("-to-");

  const from = formats[0] || "pdf";
  const to = formats[1] || "docx";
  return baseFileMetadataTemplate(from, to);
}

export default async function Page({ params }: Props) {
  const { path } = await params;
  if (!path) {
    return <div>not found</div>;
  } else {
    const formats = path.split("-to-");

    const from = formats[0] || "pdf";
    const to = formats[1] || "docx";
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <GlobalMain>
          <Converter
            title={`Convert ${from.toUpperCase()}  to ${to.toLocaleUpperCase()} free`}
            slogan={`Easily convert files from ${from} format to ${to}, online,for free.`}
            from={from}
            to={to}
          />
          <FFeature from={from} to={to} />
          <FileLinks />
          <ImageLinks />
          <DataSecure />
          <FormatDef from={from} to={to} />
          <ComparisonSection />
          <BlogComponent />
        </GlobalMain>
      </div>
    );
  }
}
