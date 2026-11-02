import { ToastContainer } from "react-toastify";
import MyFooter from "../src/components/footer";
import Navbar from "../src/components/navbar";
import { getDictionary } from "./dictioneries";

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
  const lang = (await params).lang;
  const dic = await getDictionary(lang);

  return (
    <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen">
      <Navbar dic={dic} />
      {children}
      <MyFooter dic={dic} />
      <ToastContainer />
    </div>
  );
}
