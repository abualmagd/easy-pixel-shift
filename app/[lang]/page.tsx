import { Metadata } from "next";
import ImageConverterContainer from "@/app/src/components/imageConverterContainer";
import ImageFeature from "@/app/src/components/imageFeatureComponent";
import ImageLinks from "@/app/src/components/imageLinks";
import FileLinks from "@/app/src/components/fileLinks";
import { getDictionary } from "./dictioneries";
import { languages } from "../src/const";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dic = await getDictionary(lang);
  return dic.imageConverter.metatages;
}

type Props = {
  params: Promise<{ lang: "ar" | "fr" }>;
};

export function generateStaticParams() {
  const langugz = languages;

  return langugz.map((path) => ({
    lang: path.lang,
  }));
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const dic = await getDictionary(lang);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl gap-10 flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ImageConverterContainer
          title={dic.imageConverter.title}
          slogan={dic.imageConverter.description}
          from=""
          to=""
        />
        <ImageFeature dic={dic} />
        <ImageLinks dic={dic} />
        <FileLinks dic={dic} />
      </main>
    </div>
  );
}
