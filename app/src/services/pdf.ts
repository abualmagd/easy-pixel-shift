/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { createCompleteHtmlDocument } from "./docx";
import { fileNameFinder } from "./utils";

export async function convertTxtToPdf(file: File) {
  const text = await readFileAsText(file);
  const pdf = new jsPDF();
  pdf.setFont("helvetica");
  pdf.setFontSize(12);

  const lines = pdf.splitTextToSize(text as string, 180);
  let yPosition = 10;
  const lineHeight = 7;

  lines.forEach((line: string) => {
    if (yPosition > 280) {
      pdf.addPage();
      yPosition = 10;
    }
    pdf.text(line, 10, yPosition);
    yPosition += lineHeight;
  });

  return pdf.output("blob");
}

export async function convertPdfToDocxSimple(file: File): Promise<Blob> {
  if (typeof window === "undefined") {
    throw new Error("PDF conversion must run in the browser, not during SSR");
  }

  const { getDocument, GlobalWorkerOptions } = await import("pdfjs-dist");
  GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

  const arrayBuffer = await file.arrayBuffer();

  // Load PDF with all DOM-dependent features disabled
  const loadingTask = getDocument({
    data: arrayBuffer,
    disableAutoFetch: true, // Disable automatic fetching
    disableStream: true, // Disable streaming
    disableFontFace: true, // Disable font face creation
    disableRange: true, // Disable range requests
    isEvalSupported: false, // Disable eval
    useSystemFonts: true, // Use system fonts
    verbosity: 0, // No console output      cMapPacked: false,             // No packed character maps
    stopAtErrors: false, // Continue on errors
    maxImageSize: -1, // No image size limit
  });

  const pdf = await loadingTask.promise;

  // Extract text from all pages
  let allText = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();

    // Process text items, preserving some line structure
    let pageText = "";
    let lastY = 0;

    textContent.items.forEach((item: any, index: number) => {
      const currentY = item.transform[5];
      const text = item.str;

      // Add line break if Y position changes significantly
      if (index > 0 && Math.abs(currentY - lastY) > 10) {
        pageText += "\n";
      }

      pageText += text + " ";
      lastY = currentY;
    });

    allText += `Page ${i}\n${pageText.trim()}\n\n`;
  }

  // Create simple DOCX document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: file.name.replace(".pdf", ""),
                bold: true,
                size: 28,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Converted from PDF",
                italics: true,
                size: 20,
                color: "666666",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: allText,
                size: 24,
              }),
            ],
          }),
        ],
      },
    ],
  });

  // Generate DOCX and convert to Blob
  const buffer = await Packer.toBuffer(doc);
  const blob = new Blob([new Uint8Array(buffer)], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });

  return blob;
}

export const readFileAsText = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result);
    reader.onerror = (e) => reject(e);
    reader.readAsText(file);
  });
};

export const htmlToPdf = async (file: File): Promise<Blob | undefined> => {
  let container: HTMLDivElement | null = null;

  try {
    const htmlContent = await file.text();

    // Create container and insert HTML
    container = document.createElement("div");
    container.innerHTML = htmlContent;
    container.style.position = "absolute";
    container.style.left = "-9999px";
    container.style.top = "0";
    container.style.width = "800px";
    container.style.padding = "40px";
    container.style.backgroundColor = "white";
    container.style.boxSizing = "border-box";
    document.body.appendChild(container);

    // Wait for images and fonts to load
    await waitForResources(container);

    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });

    // Ensure we have a valid canvas and image data
    if (!canvas || canvas.width === 0 || canvas.height === 0) {
      throw new Error("Canvas is empty or invalid");
    }

    // Get image data and verify it's valid
    const imgData = canvas.toDataURL("image/png");

    if (!imgData || !imgData.startsWith("data:image/png;base64,")) {
      throw new Error("Invalid PNG data generated");
    }

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    //const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Add image with error handling
    try {
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    } catch (imgError) {
      console.error("Error adding image to PDF:", imgError);
      throw new Error("Failed to add image to PDF");
    }

    const pdfBlob = pdf.output("blob");
    return pdfBlob;
  } catch (error) {
    console.error("Error generating PDF:", error);
    return undefined;
  } finally {
    // Always clean up
    if (container && document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
};

const waitForResources = (element: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    const images = Array.from(element.getElementsByTagName("img"));
    if (images.length === 0) {
      setTimeout(resolve, 500);
      return;
    }

    let loaded = 0;
    const checkAllLoaded = () => {
      loaded++;
      if (loaded === images.length) {
        setTimeout(resolve, 500);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener("load", checkAllLoaded);
        img.addEventListener("error", checkAllLoaded);
      }
    });
  });
};

export async function convertPdfToHtml(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();

  if (typeof window === "undefined") {
    throw new Error("PDF conversion must run in the browser, not during SSR");
  }

  const { getDocument, GlobalWorkerOptions } = await import("pdfjs-dist");

  GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

  const loadingTask = getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  let htmlOutput = `<div class="pdf-document">`;

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();

    let pageHtml = `<div class="pdf-page" data-page="${i}">`;
    let lastY = 0;
    let paragraph = "";

    textContent.items.forEach((item: any, index: number) => {
      const currentY = item.transform[5];
      const text = item.str;

      // If Y position jumps, close current paragraph and start a new one
      if (index > 0 && Math.abs(currentY - lastY) > 10) {
        if (paragraph.trim()) {
          pageHtml += `<p class="pdf-paragraph">${paragraph.trim()}</p>`;
        }
        paragraph = "";
      }

      paragraph += text + " ";
      lastY = currentY;
    });

    // Flush last paragraph
    if (paragraph.trim()) {
      pageHtml += `<p class="pdf-paragraph">${paragraph.trim()}</p>`;
    }

    pageHtml += "</div>";
    htmlOutput += pageHtml;
  }

  htmlOutput += "</div>";

  const name = fileNameFinder(file);
  const html = createCompleteHtmlDocument(htmlOutput, name);

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  return blob;
}
