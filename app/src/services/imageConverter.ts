import { convertImageFormat, convertToPng } from "./img";

export async function imageConverting(file: File, to: string) {
  if (to === "jpeg") {
    const res = "image/jpeg";
    return convertImageFormat(file, res);
  } else if (to === "png") {
    //const res = "image/png";
    return convertToPng(file);
  } else if (to === "webp") {
    const res = "image/webp";
    return convertImageFormat(file, res);
  } else {
    throw Error("unvalid");
  }
}
