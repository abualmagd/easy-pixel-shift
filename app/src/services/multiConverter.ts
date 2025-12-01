import {
  convertTextToWord,
  convertWordToHtml,
  convertWordToPdf,
  convertWordToTxt,
} from "./docx";
import { convertHtmlToText, convertHtmlToWord, convertTxtToHtml } from "./html";
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
      case "docx":
        return convertTextToWord(file);
      case "txt":
        throw Error("its the same file extension");
      default:
        return undefined;
    }
  }

  if (from === "html") {
    switch (to) {
      case "pdf":
        return await htmlToPdf(file);
      case "txt":
        return convertHtmlToText(file);
      case "docx":
        return convertHtmlToWord(file); //here
      case "html":
        throw Error("its the same file extension");
      default:
        return undefined;
    }
  }

  if (from === "docx" || from === "doc") {
    switch (to) {
      case "pdf":
        return await convertWordToPdf(file);
      case "html":
        return convertWordToHtml(file);
      case "txt":
        return convertWordToTxt(file);
      case "docx":
        throw Error("its the same file extension");
      default:
        return undefined;
    }
  }
}
