import { notFound } from "next/navigation";
import FileLinks from "@/app/src/components/fileLinks";
import MeadiaFeature from "@/app/src/components/mediaFeature";
import VideoConverter from "@/app/src/components/videoConverter";
import VideoLinks from "@/app/src/components/videoLinks";
import { allMediaConversions } from "@/app/src/const";
import { mediaMetadataTemplate } from "@/app/src/metatags";
import { SupportedFormat } from "@/app/src/services/video";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  return allMediaConversions.map((item) => ({
    tag: item.link.split("/")[1],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const conversion = allMediaConversions.find((item) => item.link === `/${tag}`);
  if (!conversion) return {};

  const [from, to] = tag.split("-to-");
  return mediaMetadataTemplate(from, to);
}

export default async function Page({ params }: Props) {
  const { tag } = await params;
  const conversion = allMediaConversions.find((item) => item.link === `/${tag}`);
  if (!conversion) notFound();

  const [from, to] = tag.split("-to-");
  const displayFormat = (format: string) =>
    format === "adts" ? "AAC (ADTS)" : format.toUpperCase();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-10 bg-white px-6 py-16 dark:bg-black sm:items-start sm:px-10">
        <VideoConverter
          title={`Convert ${displayFormat(from)} to ${displayFormat(to)}`}
          slogan={`Choose a ${displayFormat(from)} file, convert it to ${displayFormat(to)}, and download the result. This tool processes media in your browser; supported codecs depend on the source file and your browser.`}
          from={from}
          to={to as SupportedFormat}
        />
        <MeadiaFeature from={displayFormat(from)} to={displayFormat(to)} />
        <VideoLinks />
        <FileLinks />
      </main>
    </div>
  );
}
