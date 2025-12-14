import FileLinks from "@/app/src/components/fileLinks";
import VideoConverter from "@/app/src/components/videoConverter";
import VideoFeature from "@/app/src/components/videoFeature";
import VideoLinks from "@/app/src/components/videoLinks";
import { siteLink } from "@/app/src/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Video Converter - Free MP4, MOV, WEBM & MKV Conversion",
  description:
    "Convert video files easily online. Free, fast, and secure video format conversion between MP4, MOV, WEBM, MKV, OGG, and more. Convert video to audio (MP3, WAV) too.",
  keywords: [
    "video converter",
    "online video converter",
    "free video converter",
    "convert video",
    "convert mp4 to mov",
    "convert webm to mp4",
    "convert mov to mp4",
    "convert video to mp3",
    "mp4 converter",
    "mov converter",
    "webm converter",
    "mkv converter",
  ],
  authors: [{ name: "ismail abu almagd" }],
  openGraph: {
    title: "Free Online Video Converter - Convert MP4, MOV, WEBM, MKV & More",
    description:
      "Convert video formats (MP4, MOV, WEBM, MKV) and extract audio (MP3, WAV) easily online. Fast, secure, and high-quality conversion for all major video types.",
    type: "website",
    images: [
      {
        url: `${siteLink}+/eps-logo-easy-pixel-shift.jpeg`, // IMPORTANT: A full 1200x630 image URL
        width: 1200,
        height: 630,
        alt: "Online Video Converter tool preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Video Converter for MP4, MOV, WEBM, MKV",
    description:
      "Convert video files online. Secure, fast, and completely free to use. Supports MP4, MOV, WEBM, MKV, and more.",
    images: `${siteLink}+/eps-logo-easy-pixel-shift.jpeg`,
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <VideoConverter
          title={"Online Video Converter"}
          slogan="Convert video files online. Secure, fast, and completely free to use. Supports MP4, MOV, WEBM, MKV, and more."
          from=""
          to="mp4"
        />
        <VideoFeature />
        <VideoLinks />
        <FileLinks />
      </main>
    </div>
  );
}
