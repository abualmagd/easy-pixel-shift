"use client ";

import {
  convertTextToWord,
  convertWordToHtml,
  convertWordToPdf,
  convertWordToTxt,
} from "./docx";
import { convertHtmlToText, convertHtmlToWord, convertTxtToHtml } from "./html";
import {
  convertPdfToDocxSimple,
  convertPdfToHtml,
  convertTxtToPdf,
  htmlToPdf,
} from "./pdf";
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
  } else if (from === "html" || from === "htm") {
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
  } else if (from === "docx" || from === "doc") {
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
  } else if (from === "pdf") {
    switch (to) {
      case "pdf":
        throw Error("its the same file extension");
      case "txt":
        return convertHtmlToText(file);
      case "docx":
        return convertPdfToDocxSimple(file); //here
      case "html":
        return convertPdfToHtml(file);
      default:
        return undefined;
    }
  } else {
    throw Error("file is not supported!");
  }
}
