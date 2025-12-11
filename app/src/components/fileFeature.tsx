import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

export default function FileFeature() {
  return (
    <section className="flex flex-col gap-5 w-full mt-10">
      <div className="how flex flex-col gap-10">
        <h2 className=" font-semibold text-xl  font-mono">
          How to Convert Files?
        </h2>
        <ol className=" list-decimal text-md text-[#282f3a] shadow-black">
          <li>
            <span className="n">
              Click the “<b>Choose File</b>” button to select your file{" "}
            </span>
          </li>
          <li>
            <span className="n">
              Select a target file format from the “<b>Convert To</b>” drop-down
              list.
            </span>
          </li>
          <li>
            <span className="n">
              Click on the blue “<b>Convert</b>” button to start the conversion.
            </span>
          </li>
        </ol>
      </div>
      <div className="features mt-10 gap-5 grid lg:grid-cols-3 grid-cols-1 ">
        <div className="flex w-full gap-5 h-full  items-center flex-col">
          <div className="icon flex w-full justify-center ">
            <CgFileDocument size={40} />
          </div>
          <h2 className=" text-2xl font-semibold text-center">
            Convert Any Document
          </h2>
          <p className=" mt-0 text-[#282f3a] shadow-black">
            Convert your files between a core set of <b>popular formats </b>{" "}
            including DOCX, PDF, HTML, and TXT.
          </p>
        </div>

        <div className="flex w-full gap-5 h-full  items-center flex-col">
          <div className="icon flex w-full justify-center items-center">
            <BsArrowUpRightCircle size={35} />
          </div>
          <h2 className=" text-2xl font-semibold text-center">
            Best File Converter
          </h2>
          <p className="text-[#282f3a] shadow-black">
            Best web app to convert your files into high-quality in many format.
            This tool supports converting various files types.
          </p>
        </div>

        <div className="flex w-full gap-5 h-full  items-center flex-col">
          <div className="icon flex w-full justify-center items-center">
            <AiOutlineSecurityScan size={40} />
          </div>
          <h2 className=" text-2xl font-semibold text-center">Free & Secure</h2>
          <p className=" mt-7 text-[#282f3a] shadow-black">
            Our File converter is free and works on any web browser. Your files
            are converted in your browser and {"aren't"} sent anywhere, ensuring
            complete safety.
          </p>
        </div>
      </div>
    </section>
  );
}
