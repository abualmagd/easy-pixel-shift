import { BlogComponent } from "@/app/src/components/blogComponent";
import { DataSecure } from "@/app/src/components/data";
import FileLinks from "@/app/src/components/fileLinks";
import FormatDef from "@/app/src/components/FormatDef";
import { GlobalMain } from "@/app/src/components/Main";
import MeadiaFeature from "@/app/src/components/mediaFeature";
import VideoConverter from "@/app/src/components/videoConverter";
import VideoLinks from "@/app/src/components/videoLinks";
import { allMediaConversions } from "@/app/src/const";
import { mediaMetadataTemplate } from "@/app/src/metatags";
import { SupportedFormat } from "@/app/src/services/video";
import { Metadata } from "next";

//change this page
type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  const paths = allMediaConversions;

  return paths.map((path) => ({
    tag: path.link.split("/")[1],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;

  // Parse formats from slug
  const formats = tag.split("-to-");

  const from = formats[0] || "mp4";
  const to = formats[1] || "mp3";
  return mediaMetadataTemplate(from, to);
}

export default async function Page({ params }: Props) {
  const { tag } = await params;
  if (!tag) {
    return <div>not found</div>;
  } else {
    const formats = tag.split("-to-");

    const from = formats[0] || "mp4";
    const to = formats[1] || "mp3";

    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <GlobalMain>
          <VideoConverter
            title={`${from === "adts" ? "AAC" : from.toLocaleUpperCase()} to ${
              to === "adts" ? "AAC" : to.toLocaleUpperCase()
            }`}
            slogan={`Easily convert ${from === "adts" ? "Aac" : from} to ${
              to === "adts" ? "Aac" : to
            } With The Most Secure and Fast online tool, for free.`}
            from={from}
            to={to as SupportedFormat}
          />
          <MeadiaFeature
            from={from === "adts" ? "Aac" : from}
            to={to === "adts" ? "Aac" : to}
          />
          <VideoLinks />
          <FileLinks />
          <DataSecure />
          <FormatDef
            from={from === "adts" ? "Aac" : from}
            to={to === "adts" ? "Aac" : to}
          />
          <BlogComponent />
        </GlobalMain>
      </div>
    );
  }
}
