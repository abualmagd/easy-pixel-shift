"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Input,
  Output,
  Conversion,
  ALL_FORMATS,
  BlobSource,
  WebMOutputFormat,
  BufferTarget,
  Mp3OutputFormat,
  Mp4OutputFormat,
  MovOutputFormat,
  MkvOutputFormat,
  OggOutputFormat,
  WavOutputFormat,
  AdtsOutputFormat,
  FlacOutputFormat,
} from "mediabunny";
import { fileTypeFinder } from "./utils";

export async function convertVideo(file: File, format: SupportedFormat) {
  const input = new Input({
    source: new BlobSource(file),
    formats: ALL_FORMATS,
  });
  const outputFormat = formatMap[format];
  const output = new Output({
    format: new outputFormat(),
    target: new BufferTarget(),
  });

  const conversion = await Conversion.init({ input, output });
  if (!conversion.isValid) {
    await convertWithFFmpeg(file, format);
  } else {
    await conversion.execute();
    const mimType = await output.getMimeType();
    const data = (output.target as BufferTarget).buffer;
    const blob =
      data instanceof Blob ? data : new Blob([data!], { type: mimType });
    return blob;
  }
}
//failed conversions
//mp3 to flac
//mp4 to flac
//mp4 to ogg
//mp4 to adts
//mp4 to wav
//flac to mp3
//adts to mp3
//adts to flac

const formatMap: Record<SupportedFormat, any> = {
  webm: WebMOutputFormat,
  mp4: Mp4OutputFormat,
  mov: MovOutputFormat,
  mkv: MkvOutputFormat,
  ogg: OggOutputFormat,
  mp3: Mp3OutputFormat,
  wav: WavOutputFormat,
  adts: AdtsOutputFormat,
  flac: FlacOutputFormat,
};

interface FFmpegInstance {
  load(): Promise<void>;
  writeFile(filename: string, data: Uint8Array): Promise<void>;
  exec(args: string[]): Promise<{ stdout: string; stderr: string }>;
  readFile(filename: string): Promise<Uint8Array>;
  deleteFile(filename: string): Promise<void>;
}

// Initialize FFmpeg.wasm
async function initFFmpeg(): Promise<FFmpegInstance | null> {
  // Load FFmpeg.wasm from CDN
  /* const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/@ffmpeg.wasm/main/dist/index.global.js";
  await new Promise((resolve, reject) => {
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  // Wait for FFmpeg to be available globally
  await new Promise((resolve) => setTimeout(resolve, 100));*/

  if (typeof window !== undefined) {
    const { FFmpeg } = window as any;
    const ffmpegInstance = FFmpeg.create({ core: "@ffmpeg.wasm/core-mt" });
    await ffmpegInstance.load();

    console.log("FFmpeg.wasm loaded successfully");
    return ffmpegInstance;
  } else {
    return null;
  }
}

async function convertWithFFmpeg(
  file: File,
  targetFormat: SupportedFormat
): Promise<Blob> {
  const ffmpeg = await initFFmpeg();

  const inputFilename = `input.${fileTypeFinder(file)}`;
  const outputFilename = `output.${targetFormat}`;

  // Read file as ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);

  // Write input file to FFmpeg's virtual filesystem
  await ffmpeg?.writeFile(inputFilename, data);

  // Build FFmpeg command based on conversion type
  const args = buildFFmpegArgs(
    inputFilename,
    outputFilename,
    file.type,
    targetFormat
  );

  console.log("Running FFmpeg command:", args.join(" "));

  // Execute conversion
  await ffmpeg?.exec(args);

  // Read output file
  const outputData = await ffmpeg?.readFile(outputFilename);

  // Clean up files
  await ffmpeg?.deleteFile(inputFilename);
  await ffmpeg?.deleteFile(outputFilename);

  // Convert to Blob
  const mimeType = getMimeType(targetFormat);

  const blobData = new Uint8Array(outputData as any).buffer;

  return new Blob([blobData], { type: mimeType });
}

export type SupportedFormat =
  | "mp4"
  | "webm"
  | "mov"
  | "mkv"
  | "ogg"
  | "mp3"
  | "wav"
  | "adts"
  | "flac";
export type VideoFormat =
  // Video formats
  | "webm"
  | "mp4"
  | "avi"
  | "mkv"
  | "mov"
  | "flv"
  | "mpeg"
  | "wmv"
  | "ogg"
  | "3gp"
  | "3g2"
  | "adts"

  // Audio formats
  | "mp3"
  | "aac"
  | "wav"
  | "ogg"
  | "flac"
  | "opus"
  | "wma"

  // Special formats
  | "apng"
  | "hls"
  | "dash"
  | "h264"
  | "h265"
  | "vp8"
  | "vp9"
  | "av1"

  // Devices
  | "iphone"
  | "android"
  | "ipad";

// Build FFmpeg arguments for conversion
function buildFFmpegArgs(
  inputFile: string,
  outputFile: string,
  inputType: string,
  outputFormat: SupportedFormat
): string[] {
  const args = ["-i", inputFile];

  // Handle specific conversions
  if (
    inputType.startsWith("video/") &&
    ["flac", "mp3", "wav", "ogg", "adts"].includes(outputFormat)
  ) {
    // Extract audio from video
    args.push("-vn"); // No video
    args.push("-acodec", getFFmpegCodec(outputFormat));
  } else if (inputType.startsWith("audio/")) {
    // Audio to audio conversion
    args.push("-acodec", getFFmpegCodec(outputFormat));
  }

  // Audio quality settings
  if (outputFormat === "mp3") {
    args.push("-b:a", "192k"); // MP3 bitrate
  } else if (outputFormat === "flac") {
    args.push("-compression_level", "5"); // FLAC compression level
  }

  // Output file
  args.push(outputFile);

  return args;
}

// Get FFmpeg codec for format
function getFFmpegCodec(format: SupportedFormat): string {
  const codecMap: Record<SupportedFormat, string> = {
    mp4: "libx264",
    webm: "libvpx-vp9",
    mov: "libx264",
    mkv: "libx264",
    ogg: "libvorbis",
    mp3: "libmp3lame",
    wav: "pcm_s16le",
    adts: "aac",
    flac: "flac",
  };
  return codecMap[format] || "copy";
}

function getMimeType(format: SupportedFormat): string {
  const mimeMap: Record<SupportedFormat, string> = {
    webm: "video/webm",
    mp4: "video/mp4",
    mov: "video/quicktime",
    mkv: "video/x-matroska",
    ogg: "audio/ogg",
    mp3: "audio/mpeg",
    wav: "audio/wav",
    adts: "audio/aac",
    flac: "audio/flac",
  };
  return mimeMap[format] || "application/octet-stream";
}
