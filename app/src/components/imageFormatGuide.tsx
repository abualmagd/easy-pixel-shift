const formats = [
  {
    name: "JPEG / JPG",
    bestFor: "Photographs and smaller files",
    detail: "JPEG uses lossy compression. It does not support transparent backgrounds, so transparent areas need a solid background when saved as JPEG.",
  },
  {
    name: "PNG",
    bestFor: "Screenshots, graphics and transparency",
    detail: "PNG uses lossless compression and supports transparency. Files can be larger than comparable JPEG or WebP images.",
  },
  {
    name: "WebP",
    bestFor: "Modern websites",
    detail: "WebP supports lossy and lossless compression as well as transparency. Check that the software receiving the file supports WebP.",
  },
  {
    name: "SVG",
    bestFor: "Logos, icons and scalable artwork",
    detail: "SVG stores vector shapes. Converting a bitmap image to SVG traces its pixels into shapes; it does not recover the original editable vector artwork.",
  },
  {
    name: "ICO",
    bestFor: "Application and website icons",
    detail: "ICO is an icon container commonly used by Windows and browsers. Check the resulting icon in the application or browser where you plan to use it.",
  },
];

export default function ImageFormatGuide() {
  return (
    <section className="w-full space-y-6" aria-labelledby="format-guide-title">
      <div className="space-y-2">
        <h2 id="format-guide-title" className="text-2xl font-semibold text-slate-900">
          Choose the right image format
        </h2>
        <p className="text-base leading-7 text-slate-600">
          The best output format depends on what the image contains and where you
          plan to use it. These are the practical differences to consider before
          converting.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {formats.map((format) => (
          <article key={format.name} className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">{format.name}</h3>
            <p className="mt-1 text-sm font-medium text-slate-700">{format.bestFor}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{format.detail}</p>
          </article>
        ))}
      </div>
      <div className="rounded-xl bg-slate-50 p-5">
        <h3 className="text-lg font-semibold text-slate-900">A few things to check</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Choose PNG or WebP when you need a transparent background; JPEG does not preserve transparency.</li>
          <li>Converting to a lossy format can reduce image quality. Keep your original file if you may need to convert it again.</li>
          <li>SVG tracing is an approximation for raster images, not a way to recreate the original design layers.</li>
          <li>Large images use browser memory while they are being processed. If a conversion fails, try a smaller image or a modern browser.</li>
        </ul>
      </div>
    </section>
  );
}
