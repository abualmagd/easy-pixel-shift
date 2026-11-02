"use client";

import {
  convertTextToWord,
  convertWordToHtml,
  convertWordToPdf,
  convertWordToTxt,
} from "./docx";
import { convertHtmlToText, convertHtmlToWord, convertTxtToHtml } from "./html";
import {
  convertPdfToDocxSimple,
  convertPdfToTxt,
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
        return convertTxtToPdf(file);
      case "html":
        return convertTxtToHtml(file);
      case "docx":
        return convertTextToWord(file);
      case "txt":
        throw new Error("The source file is already TXT.");
      default:
        throw new Error(`TXT to ${to.toUpperCase()} conversion is not supported.`);
    }
  }

  if (from === "html" || from === "htm") {
    switch (to) {
      case "pdf":
        return htmlToPdf(file);
      case "txt":
        return convertHtmlToText(file);
      case "docx":
        return convertHtmlToWord(file);
      case "html":
        throw new Error("The source file is already HTML.");
      default:
        throw new Error(`HTML to ${to.toUpperCase()} conversion is not supported.`);
    }
  }

  if (from === "docx" || from === "doc") {
    switch (to) {
      case "pdf":
        return convertWordToPdf(file);
      case "html":
        return convertWordToHtml(file);
      case "txt":
        return convertWordToTxt(file);
      case "docx":
        throw new Error("The source file is already DOCX.");
      default:
        throw new Error(`Word to ${to.toUpperCase()} conversion is not supported.`);
    }
  }

  if (from === "pdf") {
    switch (to) {
      case "pdf":
        throw new Error("The source file is already PDF.");
      case "txt":
        return convertPdfToTxt(file);
      case "docx":
        return convertPdfToDocxSimple(file);
      case "html":
        return convertPdfToHtml(file);
      default:
        throw new Error(`PDF to ${to.toUpperCase()} conversion is not supported.`);
    }
  }

  throw new Error("Unsupported file type. Choose a PDF, DOCX, HTML, or TXT file.");
}
