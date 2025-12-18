import Feature from "@/app/src/components/feature";
import FileLinks from "@/app/src/components/fileLinks";
import ImageConverterContainer from "@/app/src/components/imageConverterContainer";
import ImageLinks from "@/app/src/components/imageLinks";
import { myImageLinks } from "@/app/src/const";
import { baseMetadataTemplate } from "@/app/src/metatags";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const paths = myImageLinks;

  return paths.map((path) => ({
    slug: path.link.split("/")[1],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Parse formats from slug
  const formats = slug.split("-to-");

  const from = formats[0] || "jpg"; // 'jpg'
  const to = formats[1] || "png"; // 'svg'
  return baseMetadataTemplate(from, to);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!slug) {
    return <div>not found</div>;
  } else {
    const formats = slug.split("-to-");

    const from = formats[0] || "jpg"; // 'jpg'
    const to = formats[1] || "png"; // 'svg'

    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col gap-10 items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <ImageConverterContainer
            title={`${from} to ${to}`}
            slogan={`Easily convert ${from} to ${to} With The Best online tool to convert ${from} to ${to}..`}
            from="jpg"
            to="png"
          />
          <Feature from={from} to={to} />
          <ImageLinks dic={undefined} />
          <FileLinks />
        </main>
      </div>
    );
  }
}
