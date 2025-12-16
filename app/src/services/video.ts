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
import { canEncodeAudio } from "mediabunny";
import { registerMp3Encoder } from "@mediabunny/mp3-encoder";

export async function convertVideo(file: File, format: SupportedFormat) {
  if (!(await canEncodeAudio("mp3"))) {
    registerMp3Encoder();
  }

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
    throw Error(" your browser doesnot support this conversion!");
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
