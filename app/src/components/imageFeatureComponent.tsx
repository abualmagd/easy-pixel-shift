import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ImageFeature({ dic }: { dic?: any }) {
  return (
    <section className="flex w-full flex-col gap-6" aria-labelledby="image-how-title">
      <div className="space-y-4">
        <h2 id="image-how-title" className="text-xl font-semibold">
          {dic ? dic.imageConverter.feature.featureHow : "How to convert an image"}
        </h2>
        <ol className="list-decimal space-y-2 pl-6 text-base leading-7 text-slate-700">
          <li>{dic ? dic.imageConverter.feature.first : <>Choose an image file from your device.</>}</li>
          <li>{dic ? dic.imageConverter.feature.second : <>Select the output format from the <b>Convert To</b> list.</>}</li>
          <li>{dic ? dic.imageConverter.feature.third : <>Start the conversion and download the result when it is ready.</>}</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <article className="flex flex-col items-center gap-3 text-center">
          <CiImageOn size={38} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">
            {dic ? dic.imageConverter.feature.convertAny.title : "Common image formats"}
          </h3>
          <p className="text-sm leading-6 text-slate-700">
            {dic ? dic.imageConverter.feature.convertAny.description : "Convert between JPG, JPEG, PNG, WebP, SVG and ICO. The available output formats are shown in the converter."}
          </p>
        </article>

        <article className="flex flex-col items-center gap-3 text-center">
          <BsArrowUpRightCircle size={34} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">
            {dic ? dic.imageConverter.feature.bestConverter.title : "Understand format differences"}
          </h3>
          <p className="text-sm leading-6 text-slate-700">
            {dic ? dic.imageConverter.feature.bestConverter.description : "JPEG is useful for photographs, PNG supports transparency, WebP is designed for efficient web images, and SVG stores vector artwork."}
          </p>
        </article>

        <article className="flex flex-col items-center gap-3 text-center">
          <AiOutlineSecurityScan size={38} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">
            {dic ? dic.imageConverter.feature.freeSecure.title : "Processed in your browser"}
          </h3>
          <p className="text-sm leading-6 text-slate-700">
            {dic ? dic.imageConverter.feature.freeSecure.description : "The image conversion code runs in your browser. Your selected image is read locally by the converter rather than uploaded to a conversion server."}
          </p>
        </article>
      </div>
    </section>
  );
}
