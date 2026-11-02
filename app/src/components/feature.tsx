import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";

function getConversionNote(from: string, to: string) {
  const source = from.toUpperCase();
  const target = to.toUpperCase();

  if (target === "JPG" || target === "JPEG") {
    return "JPEG uses lossy compression and does not support transparency. Transparent areas in the source image may appear with a solid background in the result.";
  }
  if (target === "PNG") {
    return "PNG supports transparency and lossless image storage. The resulting file may be larger than a compressed JPEG or WebP image.";
  }
  if (target === "WEBP") {
    return "WebP supports both lossy and lossless compression and can preserve transparency. Confirm that the app or website using the result supports WebP.";
  }
  if (target === "SVG" && !["SVG"].includes(source)) {
    return "A bitmap-to-SVG conversion traces visible pixels into vector shapes. It is an approximation and does not recreate the original editable paths or design layers.";
  }
  if (source === "SVG") {
    return "SVG is a vector format. When converted to a raster format, the artwork is rendered as pixels at the dimensions used by the browser.";
  }
  if (target === "ICO" || source === "ICO") {
    return "ICO files are commonly used for application and website icons. Check the downloaded result in its intended application, since icon size and compatibility requirements vary.";
  }
  return "The output format can change image quality, transparency, file size, or how the image is displayed. Keep the original file until you have checked the result.";
}

export default function Feature({ from, to }: { from: string; to: string }) {
  const note = getConversionNote(from, to);

  return (
    <section className="w-full space-y-8" aria-labelledby="conversion-guide-title">
      <div className="space-y-4">
        <h2 id="conversion-guide-title" className="text-xl font-semibold">
          How to convert {from.toUpperCase()} to {to.toUpperCase()}
        </h2>
        <ol className="list-decimal space-y-2 pl-6 text-base leading-7 text-slate-700">
          <li>Select a {from.toUpperCase()} image from your device.</li>
          <li>Choose {to.toUpperCase()} as the output format in the converter.</li>
          <li>Start the conversion, then download the result when it is ready.</li>
          <li>Open the downloaded file and check its appearance before replacing your original.</li>
        </ol>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="text-lg font-semibold text-slate-900">
          What changes when converting {from.toUpperCase()} to {to.toUpperCase()}?
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-700">{note}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <article className="flex flex-col items-center gap-3 text-center">
          <CiBookmarkCheck size={36} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Simple workflow</h3>
          <p className="text-sm leading-6 text-slate-700">
            Select one image, choose an output format, and download the converted file.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center">
          <BsArrowUpRightCircle size={34} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Know the trade-offs</h3>
          <p className="text-sm leading-6 text-slate-700">
            Review the format-specific note above so you know what may happen to quality and transparency.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center">
          <AiOutlineSecurityScan size={36} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Browser processing</h3>
          <p className="text-sm leading-6 text-slate-700">
            This image conversion is performed in your browser; the selected image is passed to the browser-based conversion code.
          </p>
        </article>
      </div>
    </section>
  );
}
