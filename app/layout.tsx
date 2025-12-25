import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MyFooter from "./src/components/footer";
import { ToastContainer } from "react-toastify";
import Navbar from "./src/components/navbar";
import { siteLink } from "./src/const";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Pixel Shift",
  description: "convert image compress images convert jpg to pdf ",
  metadataBase: new URL(`${siteLink}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <MyFooter />
        <ToastContainer />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NWVRE58F5M"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NWVRE58F5M'); `}
        </Script>
      </body>
    </html>
  );
}
