"use client";

import { FileInput, Label } from "flowbite-react";
import { ChangeEvent, useState } from "react";
import { downloadFile, fileNameFinder, notify } from "../services/utils";
import { convertVideo, SupportedFormat } from "../services/video";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function VideoConverter(props: {
  title: string;
  slogan: string;
  from: string;
  to: SupportedFormat;
}) {
  const [selectedFile, updateSelectedFile] = useState<File | null>();

  const removeSelectedFile = () => {
    updateSelectedFile(null);
  };
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0] ? Array.from(e.target.files!)[0] : null;
    updateSelectedFile(file!);
  };
  return (
    <>
      <div className=" flex flex-col gap-3 w-full items-center">
        <h1 className=" font-extrabold text-4xl leading-15">{props.title}</h1>
        <p className=" text-xl dark:text-gray-400">{props.slogan}</p>

        <div className="h-5"></div>

        {!selectedFile ? (
          <div className="flex w-full items-center justify-center">
            <Label
              htmlFor="dropzone-file"
              className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span>
                </p>
              </div>
              <FileInput
                onChange={(e) => handleFile(e)}
                id="dropzone-file"
                className="hidden"
                accept="video/*,audio/*,audio/vnd.dlna.adts "
              />
            </Label>
          </div>
        ) : (
          <div className=" w-full">
            <MyVideoCpnverter
              file={selectedFile}
              removeFile={removeSelectedFile}
              to={props.to}
            />
          </div>
        )}
      </div>
    </>
  );
}

const MyVideoCpnverter = (props: {
  file: File;
  to: SupportedFormat;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  removeFile: Function;
}) => {
  const [state, setState] = useState("waiting");
  const [output, setOutput] = useState<Blob>();
  const [to, setTo] = useState<SupportedFormat>(props.to || "mkv");

  const handleToChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTo(e.target.value as SupportedFormat);
  };

  const remove = () => {
    return props.removeFile();
  };
  const convert = async () => {
    try {
      setState("loading");
      const out = await convertVideo(props.file, to);
      setOutput(out);
      notify("converted well", false);
      setState("download");
    } catch (error) {
      setState("waiting");
      console.log("err ", error);
      notify(String(error), true);
    }
  };

  const dowloadIt = () => {
    try {
      const name = fileNameFinder(props.file);
      downloadFile(output!, name + "-easy-pixel-shift", to);
    } catch (error) {
      console.log("error in downloadin");
      notify(String(error), true);
    }
  };
  return (
    <div className=" w-full flex-col  h-32 rounded border border-gray-500 flex">
      <div className="flex w-full p-4 justify-between">
        <p className=" lg:max-w-60 max-w-32 max-h-10 overflow-hidden dark:text-gray-400">
          {props.file.name}
        </p>
        <div className=" flex gap-5 text-gray-500">
          <div className=" flex items-center gap-2 ">
            <span>Output:</span>

            <select
              defaultValue={to}
              onChange={(e) => handleToChange(e)}
              id="output"
              className="block w-full px-3 py-2 rounded  border border-rounded text-heading text-sm focus:ring-brand  focus:rounded shadow-xs placeholder:text-body"
            >
              <option value="mp4">Mp4</option>
              <option value="webm">Webm</option>
              <option value="mov">Mov</option>
              <option value="mkv">Mkv</option>
              <option value="ogg">Ogg</option>
              <option value="mp3">Mp3</option>
              <option value="wav">Wav</option>
              <option value="adts">Acc</option>
              <option value="fla">Flac</option>
            </select>
          </div>
          <button onClick={remove} className=" cursor-pointer">
            <IoMdCloseCircleOutline size={30} />
          </button>
        </div>
      </div>
      <div className="bg-gray-100 rounded-b-md h-14 w-full flex justify-center items-center">
        {state === "waiting" && (
          <button
            onClick={convert}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm cursor-pointer font-medium min-w-44 text-heading rounded-base group rounded hover:scale-90 bg-linear-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className=" relative px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent leading-5">
              Convert
            </span>
          </button>
        )}
        {state === "loading" && (
          <button
            disabled
            type="button"
            className="text-white bg-brand inline-flex items-center box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="w-4 h-4 me-2 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Converting...
          </button>
        )}
        {state === "download" && (
          <button
            onClick={dowloadIt}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm cursor-pointer font-medium min-w-44 text-heading rounded-base group rounded hover:scale-90 bg-linear-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className=" relative px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent leading-5">
              Download
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
