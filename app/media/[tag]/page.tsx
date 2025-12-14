import FileLinks from "@/app/src/components/fileLinks";
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
        <main className="flex min-h-screen w-full max-w-3xl flex-col gap-10 items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <VideoConverter
            title={`${from === "adts" ? "Acc" : from.toLocaleUpperCase()} to ${
              to === "adts" ? "ACC" : to.toLocaleUpperCase()
            }`}
            slogan={`Easily convert ${from === "adts" ? "Acc" : from} to ${
              to === "adts" ? "Acc" : to
            } With The Best online tool to convert ${from} to ${
              to === "adts" ? "Acc" : to
            }..`}
            from={from}
            to={to as SupportedFormat}
          />
          <MeadiaFeature
            from={from === "adts" ? "Acc" : from}
            to={to === "adts" ? "Acc" : to}
          />
          <VideoLinks />
          <FileLinks />
        </main>
      </div>
    );
  }
}
