import { ToastContainer } from "react-toastify";
import MyFooter from "../src/components/footer";
import Navbar from "../src/components/navbar";
import { getDictionary } from "./dictioneries";
import "@/app/globals.css";

export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "fr" }];
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "ar" | "fr" }>;
}>) {
  const dic = await getDictionary((await params).lang);
  return (
    <html
      lang={(await params).lang}
      dir={(await params).lang == "ar" ? "rtl" : "ltr"}
    >
      <body>
        <Navbar dic={dic} />
        {children}
        <MyFooter dic={dic} />
        <ToastContainer />
      </body>
    </html>
  );
}
