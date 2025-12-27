import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MyFooter from "./src/components/footer";
import { ToastContainer } from "react-toastify";
import Navbar from "./src/components/navbar";
import { siteLink } from "./src/const";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Image Converter - Free & Fast Image Format Conversion",
  description:
    "Convert images easily between popular formats like PNG, JPG, WEBP, and more, all online and for free. Fast, secure, and high-quality image file conversion.",
  keywords: [
    "image converter",
    "online image converter",
    "convert image to jpg",
    "convert image to png",
    "free image converter",
    "image format conversion",
    "webp converter",
  ],
  authors: [{ name: "ismail abu almagd" }],

  openGraph: {
    title: "Online Image Converter - Free & Fast Image Format Conversion",
    description:
      "Convert images easily between popular formats like PNG, JPG, WEBP, and more, all online and for free. Fast, secure, and high-quality image file conversion.",
    type: "website",
    images: [
      {
        url: `${siteLink}+/eps-logo-easy-pixel-shift.jpeg`, // IMPORTANT: A full 1200x630 image URL
        width: 1200,
        height: 630,
        alt: "Image Converter tool preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Online Image Converter - Free & Fast Conversion",
    description:
      "Convert images between formats like PNG, JPG, and WEBP online. Fast, secure, and completely free to use.",

    images: `${siteLink}+/eps-logo-easy-pixel-shift.jpeg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-VWH69FK9NJ" />
      <GoogleTagManager gtmId="G-VWH69FK9NJ" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <MyFooter />
        <ToastContainer />
      </body>
    </html>
  );
}
