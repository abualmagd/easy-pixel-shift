import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";

export default function MeadiaFeature({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  return (
    <section className="flex flex-col gap-5 w-full">
      <div className="how flex flex-col gap-10">
        <h2 className=" font-semibold text-xl  font-mono">
          How to Convert {from} to {to}?
        </h2>
        <ol className=" list-decimal text-md text-[#282f3a] shadow-black">
          <li>
            <span className="n">
              Click the “<b>Choose File</b>” button to select your {from} file{" "}
            </span>
          </li>
          <li>
            <span className="n">
              Click on the “<b>Convert to {to}</b>” button to start the
              conversion
            </span>
          </li>
          <li>
            <span className="n">
              When the conversion from {from} to {to} is complete, click the “
              <b>Download {to}</b>” button
            </span>
          </li>
        </ol>
      </div>
      <div className="features mt-10 gap-5 grid lg:grid-cols-3 grid-cols-1 ">
        <div className="flex w-full gap-5 h-full  items-center flex-col">
          <div className="icon flex w-full justify-center ">
            <MdOndemandVideo size={40} />
          </div>
          <h2 className=" text-2xl font-semibold">Easy to Use</h2>
          <p className=" mt-7 text-[#282f3a] shadow-black">
            Simply upload your {from} files and click the convert button. You
            The process of convert {from} to {to} is quick and straightforward.
          </p>
        </div>

        <div className="flex w-full gap-5 h-full  items-center flex-col">
          <div className="icon flex w-full justify-center items-center">
            <BsArrowUpRightCircle size={35} />
          </div>
          <h2 className=" text-2xl font-semibold">
            Best {from} to {to} Converter
          </h2>
          <p className="text-[#282f3a] shadow-black">
            Best web app to convert your {from} videos/audios into high-quality{" "}
            {to} format. This tool supports converting various media types
            including videos/audios formats.
          </p>
        </div>

        <div className="flex w-full gap-5 h-full  items-center flex-col">
          <div className="icon flex w-full justify-center items-center">
            <AiOutlineSecurityScan size={40} />
          </div>
          <h2 className=" text-2xl font-semibold">Free & Secure</h2>
          <p className=" mt-7 text-[#282f3a] shadow-black">
            Our {from} to {to} converter is free and works on any web browser.
            Your files are converted in your browser and {"aren't"} sent
            anywhere, ensuring complete safety.
          </p>
        </div>
      </div>
    </section>
  );
}
