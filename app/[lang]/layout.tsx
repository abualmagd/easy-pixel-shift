export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "fr" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "ar" | "fr" }>;
}>) {
  return (
    <html lang={(await params).lang}>
      <body>{children}</body>
    </html>
  );
}
