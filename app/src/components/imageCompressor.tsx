"use client";

import { FileInput, Label, RangeSlider } from "flowbite-react";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { downloadFile, notify } from "../services/utils";
import { processCompression } from "../services/img";

// Helper to format bytes
const formatSize = (bytes: number | undefined) => {
  if (!bytes) return "0 KB";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export default function ImageCompressor() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<number>(0.7);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full items-center">
      <h1 className="font-extrabold text-4xl">Fast Image Compressor</h1>
      <p className="dark:text-gray-400 text-center text-xl">
        Reduce file size using browser hardware acceleration.
      </p>

      {!selectedFile ? (
        <div className="flex w-full items-center justify-center mt-5">
          <Label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <p className="mb-2 text-sm text-gray-500 font-semibold">
                Click to upload image
              </p>
            </div>
            <FileInput
              onChange={handleFile}
              id="dropzone-file"
              className="hidden"
              accept="image/jpeg,image/png"
            />
          </Label>
        </div>
      ) : (
        <div className="w-full space-y-4">
          {/* COMPONENT WITH SIZES */}
          <MyCompressor
            file={selectedFile}
            quality={quality}
            removeFile={() => setSelectedFile(null)}
          />

          {/* QUALITY CONTROL */}
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between mb-2">
              <Label>
                Target Quality:{" "}
                <span className="text-blue-600 font-bold">
                  {Math.round(quality * 100)}%
                </span>
              </Label>
            </div>
            <RangeSlider
              min={1}
              max={100}
              value={quality * 100}
              onChange={(e) => setQuality(parseInt(e.target.value) / 100)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function MyCompressor({
  file,
  quality,
  removeFile,
}: {
  file: File;
  quality: number;
  removeFile: () => void;
}) {
  const [state, setState] = useState<"waiting" | "loading" | "download">(
    "waiting",
  );
  const [outputBlob, setOutputBlob] = useState<Blob | null>(null);

  const compressImage = async () => {
    setState("loading");
    try {
      const compressed = await processCompression(file, quality);
      setOutputBlob(compressed);
      setState("download");
      notify("Compression finished!", false);
    } catch (err) {
      notify("Error compressing" + err, true);
      setState("waiting");
    }
  };

  return (
    <div className="w-full flex flex-col rounded-lg border border-gray-400 overflow-hidden">
      {/* TOP ROW: INFO & SIZE */}
      <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
        <div className="flex flex-col">
          <span className="text-sm font-bold truncate max-w-[200px] dark:text-white">
            {file.name}
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] px-2 py-0.5 bg-gray-200 rounded text-gray-700 uppercase font-bold">
              Original: {formatSize(file.size)}
            </span>
            {outputBlob && (
              <>
                <span className="text-gray-400">→</span>
                <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded uppercase font-bold border border-green-200">
                  New: {formatSize(outputBlob.size)}
                </span>
              </>
            )}
          </div>
        </div>
        <button
          onClick={removeFile}
          className="text-gray-400 hover:text-red-500 cursor-pointer"
        >
          <IoMdCloseCircleOutline size={28} />
        </button>
      </div>

      {/* BOTTOM ROW: ACTIONS */}
      <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-t border-gray-200 flex justify-center">
        {state === "waiting" && (
          <button
            onClick={compressImage}
            className="w-full md:w-auto cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-10 py-2 rounded-md font-semibold text-sm transition-all"
          >
            Compress Image
          </button>
        )}

        {state === "loading" && (
          <div className="flex items-center gap-2 text-blue-600 font-medium">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            Calculating...
          </div>
        )}

        {state === "download" && (
          <div className="flex flex-col md:flex-row gap-3 items-center w-full justify-center">
            <button
              onClick={compressImage}
              className="text-xs text-gray-500 cursor-pointer hover:underline"
            >
              Try again
            </button>
            <button
              onClick={() =>
                downloadFile(
                  outputBlob!,
                  `compressed-${file.name.split("")[0] || "easy-pixel-shift"}`,
                  "jpeg",
                )
              }
              className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-10 py-2 rounded-md font-bold text-sm shadow-lg"
            >
              Download {formatSize(outputBlob?.size)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
