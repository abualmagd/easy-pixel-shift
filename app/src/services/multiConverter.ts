import { convertTxtToHtml } from "./html";
import { convertTxtToPdf, htmlToPdf } from "./pdf";
import { fileTypeFinder } from "./utils";

export async function multiFileConvert(file: File, to: string) {
  const from = fileTypeFinder(file);
  if (from === "txt") {
    switch (to) {
      case "pdf":
        return await convertTxtToPdf(file);
      case "html":
        return convertTxtToHtml(file);
      case "word":
        return undefined;
    }
  }

  if (from === "html") {
    switch (to) {
      case "pdf":
        return await htmlToPdf(file);
      default:
        return undefined;
    }
  }
}
