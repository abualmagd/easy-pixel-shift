"use client";

import {
  convertImageFormat,
  convertToIco,
  convertToPng,
  convertToSvg,
} from "./img";

export async function imageConverting(file: File, to: string) {
  if (to === "jpeg" || to === "jpg") {
    const res = "image/jpeg";
    return convertImageFormat(file, res);
  } else if (to === "png") {
    //const res = "image/png";
    return convertToPng(file);
  } else if (to === "webp") {
    const res = "image/webp";
    return convertImageFormat(file, res);
  } else if (to === "svg") {
    return convertToSvg(file);
  } else if (to === "ico") {
    return convertToIco(file);
  } else {
    throw Error("unvalid");
  }
}
