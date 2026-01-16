// components/SeoContent.tsx
export default function SeoContent({
  page,
}: {
  page: "home" | "gif" | "video" | "file";
}) {
  const content: Record<typeof page, { title: string; description: string[] }> =
    {
      home: {
        title: "EasyPixelShift – Online File Tools Made Simple",
        description: [
          "EasyPixelShift is your all‑in‑one hub for quick and reliable file conversions.",
          "Whether you’re working with images, audio, or documents, our platform ensures smooth results without complicated steps.",
          "Designed for speed, accessibility, and accuracy, EasyPixelShift helps creators, students, and professionals manage digital formats effortlessly.",
        ],
      },
      gif: {
        title: "Create GIFs Instantly – EasyPixelShift GIF Maker",
        description: [
          "Turn videos or images into high‑quality GIFs with just a few clicks.",
          "Our GIF Maker is optimized for social media, presentations, and creative projects, giving you control over size, speed, and loop settings.",
          "No downloads required – everything runs directly in your browser for maximum convenience.",
        ],
      },
      video: {
        title: "Convert Videos Online – EasyPixelShift Video Converter",
        description: [
          "Easily convert videos between MP4, MOV, WEBM, MKV, and more formats.",
          "Our Video Converter ensures compatibility across devices, platforms, and editing software.",
          "Fast, secure, and user‑friendly – perfect for content creators, educators, and everyday users.",
        ],
      },
      file: {
        title: "Universal File Converter – EasyPixelShift",
        description: [
          "Convert documents, images, audio, and video files into the formats you need.",
          "Our File Converter supports DOCX, PDF, JPG, PNG, MP3, WAV, and dozens more, ensuring seamless compatibility across platforms.",
          "Ideal for professionals, students, and everyday users who need quick, reliable format changes without installing software.",
        ],
      },
    };

  return (
    <section className="prose max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">{content[page].title}</h2>
      {content[page].description.map((p, i) => (
        <p key={i} className="mb-3 dark:text-white">
          {p}
        </p>
      ))}
    </section>
  );
}
