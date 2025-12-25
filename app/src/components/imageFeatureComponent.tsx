import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ImageFeature({ dic }: { dic?: any }) {
  return (
    <section className="flex flex-col gap-5 w-full">
      <div className="how flex flex-col gap-10">
        <h2 className=" font-semibold text-xl font-mono">
          {dic
            ? dic.imageConverter.feature.featureHow
            : "How to Convert Images?"}
        </h2>
        <ol className=" list-decimal text-md text-[#282f3a] shadow-black">
          <li>
            <span className="n">
              {dic ? (
                dic.imageConverter.feature.first
              ) : (
                <>
                  Click the <b>Choose File</b> button to select your image
                </>
              )}
            </span>
          </li>
          <li>
            <span className="n">
              {dic ? (
                dic.imageConverter.feature.second
              ) : (
                <>
                  {" "}
                  Select a target image format from the “<b>Convert To</b>”
                  drop-down list.
                </>
              )}
            </span>
          </li>
          <li>
            <span className="n">
              {dic ? (
                dic.imageConverter.feature.third
              ) : (
                <>
                  Click on the blue “<b>Convert</b>” button to start the
                  conversion.
                </>
              )}
            </span>
          </li>
        </ol>
      </div>
      <div className="features mt-10 gap-5 grid lg:grid-cols-3 grid-cols-1 ">
        <div className="flex w-full gap-5 h-full  items-center flex-col">
          <div className="icon flex w-full justify-center ">
            <CiImageOn size={40} />
          </div>
          <h2 className=" text-2xl font-semibold text-center">
            {dic
              ? dic.imageConverter.feature.convertAny.title
              : "Convert Any Image"}
          </h2>
          <p className=" mt-0 text-[#282f3a] shadow-black">
            {dic
              ? dic.imageConverter.feature.convertAny.description
              : "Convert your images between a core set of <b>popular formats </b>including JPG, PNG, SVG, WebP, and ICO."}
          </p>
        </div>

        <div className="flex w-full gap-5 h-full  items-center flex-col">
          <div className="icon flex w-full justify-center items-center">
            <BsArrowUpRightCircle size={35} />
          </div>
          <h2 className=" text-2xl font-semibold text-center">
            {dic
              ? dic.imageConverter.feature.bestConverter.title
              : "Best Image Converter"}
          </h2>
          <p className="text-[#282f3a] shadow-black">
            {dic
              ? dic.imageConverter.feature.bestConverter.description
              : " Best web app to convert your images into high-quality in many format. This tool supports converting various image types including animated formats."}{" "}
          </p>
        </div>

        <div className="flex w-full gap-5 h-full  items-center flex-col">
          <div className="icon flex w-full justify-center items-center">
            <AiOutlineSecurityScan size={40} />
          </div>
          <h2 className=" text-2xl font-semibold text-center">
            {dic
              ? dic.imageConverter.feature.freeSecure.title
              : "Free & Secure"}
          </h2>
          <p className=" mt-7 text-[#282f3a] shadow-black">
            {dic
              ? dic.imageConverter.feature.freeSecure.description
              : "  Our Image converter is free and works on any web browser. Your files are converted in your browser and aren't sent anywhere, ensuring complete safety."}{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
