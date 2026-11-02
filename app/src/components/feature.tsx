import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";

function getConversionNote(from: string, to: string) {
  const source = from.toUpperCase();
  const target = to.toUpperCase();

  if (target === "JPG" || target === "JPEG") {
    return "JPEG uses lossy compression at a quality setting of 0.92 in this converter and does not support transparency. Transparent areas are filled with white. Repeatedly saving an image as JPEG can introduce additional compression artifacts.";
  }
  if (target === "PNG") {
    return "PNG is exported with lossless compression and supports transparency. It is useful for screenshots, interface graphics, and logos, but the resulting file may be larger than JPEG or WebP.";
  }
  if (target === "WEBP") {
    return "WebP is exported using the browser canvas at a quality setting of 0.92. It supports transparency in the browser's WebP encoder, but check compatibility with older software or publishing systems before replacing the source.";
  }
  if (target === "SVG" && source !== "SVG") {
    return "This converter traces the raster image into SVG shapes. The result is an approximation: photographs can create complex paths and large files, and the trace does not recover the original editable design layers. Logos and high-contrast artwork generally trace more cleanly than detailed photos.";
  }
  if (source === "SVG") {
    return "SVG is vector artwork. When converted to PNG, JPEG, or WebP, the browser renders it as pixels; the result is no longer infinitely scalable. Keep the SVG if you need to edit paths or resize the artwork without rasterization.";
  }
  if (target === "ICO") {
    return "The converter creates one 256 × 256 PNG-backed ICO image. The artwork is scaled to fit inside a square with transparent padding where needed. This is useful for many modern Windows and browser icon workflows, but it does not create the multiple embedded sizes sometimes required by legacy software.";
  }
  if (source === "ICO") {
    return "An ICO file can contain several embedded image sizes. The converter reads the image through the browser, so the rendered result may use the image representation selected by the browser rather than preserving every embedded icon size.";
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
          <li>Select an image from your device. The file is read by your browser.</li>
          <li>Check the output format. You can change it in the converter before starting.</li>
          <li>Start the conversion and wait for the browser to finish processing the image.</li>
          <li>Download the result, open it in its intended app, and check its dimensions, background, and appearance.</li>
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
          <h3 className="text-lg font-semibold text-slate-900">Check transparency</h3>
          <p className="text-sm leading-6 text-slate-700">
            If the source has a transparent background, choose PNG or WebP to retain it. JPEG uses a white background in this converter.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center">
          <BsArrowUpRightCircle size={34} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Choose the right output</h3>
          <p className="text-sm leading-6 text-slate-700">
            Use JPEG for photographs, PNG for crisp graphics and transparency, WebP for supported web workflows, and ICO for common icon use cases.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center">
          <AiOutlineSecurityScan size={36} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Browser processing</h3>
          <p className="text-sm leading-6 text-slate-700">
            Image conversion runs in your browser using browser image decoding and canvas APIs. Large images may require substantial device memory.
          </p>
        </article>
      </div>
    </section>
  );
}
