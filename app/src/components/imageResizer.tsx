/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  FileInput,
  Label,
  RangeSlider,
  Select,
  TextInput,
  Checkbox,
  HelperText,
} from "flowbite-react";
import { useState, ChangeEvent } from "react";
import { IoMdCloseCircleOutline, IoMdSettings } from "react-icons/io";
import { HiOutlinePhotograph, HiOutlineShare } from "react-icons/hi";
import { downloadFile, notify } from "../services/utils";
import { processResizing } from "../services/img";

const SOCIAL_PRESETS = [
  { name: "Instagram Post (Square)", w: 1080, h: 1080 },
  { name: "Instagram Story", w: 1080, h: 1920 },
  { name: "Twitter Header", w: 1500, h: 500 },
  { name: "YouTube Thumbnail", w: 1280, h: 720 },
];

export default function ImageResizer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [originalDimensions, setOriginalDimensions] = useState({ w: 0, h: 0 });

  // Resize Settings
  const [mode, setMode] = useState<"size" | "percentage" | "social">("size");
  const [activePreset, setActivePreset] = useState<string | null>(null); // New state for tracking selection
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(50);
  const [maintainAspect, setMaintainAspect] = useState(true);

  // Export Settings
  const [targetKb, setTargetKb] = useState<number | "">("");
  const [format, setFormat] = useState<string>("original");

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setOriginalDimensions({ w: img.width, h: img.height });
        setWidth(img.width);
        setHeight(img.height);
        setSelectedFile(file);
      };
    }
  };

  const syncDimensions = (val: number, type: "w" | "h") => {
    setActivePreset(null); // Clear preset if user manually changes dimensions
    if (!maintainAspect) {
      if (type === "w") {
        setWidth(val);
      } else {
        setHeight(val);
      }
      return;
    }

    const ratio = originalDimensions.w / originalDimensions.h;
    if (type === "w") {
      setWidth(val);
      setHeight(Math.round(val / ratio));
    } else {
      setHeight(val);
      setWidth(Math.round(val * ratio));
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full items-center max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="font-extrabold text-4xl mb-2">Smart Image Resizer</h1>
        <p className="text-gray-500">
          Resize for social media or specific dimensions in seconds.
        </p>
      </div>

      {!selectedFile ? (
        <Label
          htmlFor="drop-resizer"
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700"
        >
          <HiOutlinePhotograph className="text-4xl text-gray-400 mb-2" />
          <p className="text-sm text-gray-500 font-semibold">
            Upload an image to start resizing
          </p>
          <FileInput
            id="drop-resizer"
            className="hidden"
            onChange={handleFile}
            accept="image/*"
          />
        </Label>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <section className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 border-b pb-2">
                <IoMdSettings className="text-blue-600" />
                <h3 className="font-bold">Resize Settings</h3>
              </div>

              <div className="flex gap-2 mb-6">
                {["size", "percentage", "social"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m as any)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold cursor-pointer uppercase transition-colors ${
                      mode === m
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {mode === "size" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Width (px)</Label>
                    <TextInput
                      type="number"
                      value={width}
                      onChange={(e) =>
                        syncDimensions(Number(e.target.value), "w")
                      }
                    />
                  </div>
                  <div>
                    <Label>Height (px)</Label>
                    <TextInput
                      type="number"
                      value={height}
                      onChange={(e) =>
                        syncDimensions(Number(e.target.value), "h")
                      }
                    />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <Checkbox
                      id="aspect"
                      checked={maintainAspect}
                      onChange={() => setMaintainAspect(!maintainAspect)}
                    />
                    <Label htmlFor="aspect">Maintain Aspect Ratio</Label>
                  </div>
                </div>
              )}

              {mode === "percentage" && (
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Scale Factor</Label>
                    <span className="text-blue-600 font-bold">
                      {percentage}%
                    </span>
                  </div>
                  <RangeSlider
                    value={percentage}
                    min={1}
                    max={100}
                    onChange={(e) => setPercentage(Number(e.target.value))}
                  />
                  <p className="text-xs text-gray-400">
                    New Size:{" "}
                    {Math.round((originalDimensions.w * percentage) / 100)} x{" "}
                    {Math.round((originalDimensions.h * percentage) / 100)} px
                  </p>
                </div>
              )}

              {mode === "social" && (
                <div className="grid grid-cols-1 gap-3">
                  {SOCIAL_PRESETS.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => {
                        setWidth(p.w);
                        setHeight(p.h);
                        setMaintainAspect(false);
                        setActivePreset(p.name);
                      }}
                      className={`flex justify-between items-center cursor-pointer p-4 border rounded-lg transition-all text-sm group shadow-sm ${
                        activePreset === p.name
                          ? "bg-gray-200 border-blue-600 text-white"
                          : "bg-white dark:bg-gray-700 border-gray-200 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-600"
                      }`}
                    >
                      <span className="font-bold">{p.name}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          activePreset === p.name
                            ? "bg-white text-blue-600"
                            : "bg-gray-100 text-gray-500 group-hover:text-blue-600"
                        }`}
                      >
                        {p.w} x {p.h}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </section>

            <section className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 border-b pb-2">
                <HiOutlineShare className="text-green-600" />
                <h3 className="font-bold">Export Settings</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Target file size (Optional KB)</Label>
                  <TextInput
                    type="number"
                    placeholder="e.g. 200"
                    value={targetKb}
                    onChange={(e) =>
                      setTargetKb(
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                  />
                  <HelperText className="mt-2">
                    Only works for JPG output
                  </HelperText>
                </div>
                <div>
                  <Label>Save Image As</Label>
                  <Select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                  >
                    <option value="original">Original Format</option>
                    <option value="image/jpeg">JPG</option>
                    <option value="image/png">PNG</option>
                    <option value="image/webp">WebP</option>
                  </Select>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 border rounded-xl dark:bg-gray-700">
              <Label>Preview Info</Label>
              <div className="mt-2 text-xs space-y-1">
                <p>
                  Name: <span className="font-bold">{selectedFile.name}</span>
                </p>
                <p>
                  Original: {originalDimensions.w}x{originalDimensions.h}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-bold uppercase">
                  Target:{" "}
                  {mode === "percentage"
                    ? Math.round((originalDimensions.w * percentage) / 100)
                    : width}
                  x
                  {mode === "percentage"
                    ? Math.round((originalDimensions.h * percentage) / 100)
                    : height}
                </p>
              </div>
            </div>
            <ResizerAction
              file={selectedFile}
              settings={{ width, height, percentage, mode, targetKb, format }}
              onReset={() => {
                setSelectedFile(null);
                setActivePreset(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ResizerAction({ file, settings, onReset }: any) {
  const [loading, setLoading] = useState(false);

  const handleProcess = async () => {
    setLoading(true);
    try {
      const blob = await processResizing(file, settings);
      downloadFile(
        blob,
        `resized-${file.name.split(".")[0] || "easy-pixel-shift"}`,
        "jpeg",
      );
      notify("Resized successfully!", false);
    } catch (e) {
      notify("Processing failed " + e, true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleProcess}
        disabled={loading}
        className="w-full bg-blue-600 text-white cursor-pointer py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all disabled:opacity-50"
      >
        {loading ? "Processing..." : "Process & Download"}
      </button>
      <button
        onClick={onReset}
        className="w-full text-gray-500 text-sm hover:underline cursor-pointer flex items-center justify-center gap-1"
      >
        <IoMdCloseCircleOutline /> Remove Image
      </button>
    </div>
  );
}
