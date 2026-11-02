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


/**
 * Extract selectable text from a PDF into a plain-text file.
 * This does not perform OCR, so scanned pages without a text layer may be empty.
 */
export async function convertPdfToTxt(file: File): Promise<Blob> {
  if (typeof window === "undefined") {
    throw new Error("PDF conversion must run in the browser, not during SSR");
  }

  const { getDocument, GlobalWorkerOptions } = await import("pdfjs-dist");
  GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

  const loadingTask = getDocument({ data: await file.arrayBuffer() });
  const pdf = await loadingTask.promise;
  const pages: string[] = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const lines: { y: number; text: string }[] = [];

    for (const item of textContent.items as any[]) {
      if (typeof item.str !== "string" || !item.str.trim()) continue;
      const y = Array.isArray(item.transform) ? item.transform[5] : 0;
      const previous = lines[lines.length - 1];

      if (previous && Math.abs(previous.y - y) <= 3) {
        previous.text += item.str;
      } else {
        lines.push({ y, text: item.str });
      }
    }

    pages.push(lines.map((line) => line.text.trim()).filter(Boolean).join("\n"));
  }

  return new Blob([pages.join("\n\n")], {
    type: "text/plain;charset=utf-8",
  });
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

export const htmlToPdf = async (file: File): Promise<Blob> => {
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
    throw new Error(
      error instanceof Error ? error.message : "Unable to create a PDF from this HTML file"
    );
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

export async function convertJpgToPdf(file: File): Promise<Blob> {
  // Create a new Promise to handle the conversion
  const pdfBlob = await new Promise<Blob>((resolve, reject) => {
    // Check if file is JPG/JPEG
    if (!file.type.includes("jpeg") && !file.type.includes("jpg")) {
      reject(new Error("File must be a JPG/JPEG image"));
      return;
    }

    const reader = new FileReader();

    reader.onload = async (event) => {
      if (!event.target?.result) {
        reject(new Error("Failed to read file"));
        return;
      }

      const img = new Image();
      img.src = event.target.result as string;

      img.onload = () => {
        // Create PDF in portrait A4 format
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        // Get PDF page dimensions
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Calculate dimensions to fit image on page
        const imgWidth = img.width;
        const imgHeight = img.height;

        // Calculate ratio to fit image within page
        const widthRatio = pageWidth / imgWidth;
        const heightRatio = pageHeight / imgHeight;
        const ratio = Math.min(widthRatio, heightRatio) * 0.95; // 95% to add small margin

        const finalWidth = imgWidth * ratio;
        const finalHeight = imgHeight * ratio;

        // Center the image on the page
        const xPos = (pageWidth - finalWidth) / 2;
        const yPos = (pageHeight - finalHeight) / 2;

        // Add image to PDF
        pdf.addImage(img.src, "JPEG", xPos, yPos, finalWidth, finalHeight);

        // Return PDF as Blob
        resolve(pdf.output("blob"));
      };

      img.onerror = () => {
        reject(new Error("Failed to load image"));
      };
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file"));
    };

    // Read the file as data URL
    reader.readAsDataURL(file);
  });

  return pdfBlob;
}

interface ConvertOptions {
  orientation?: "portrait" | "landscape";
  format?: "a4" | "a3" | "a5" | "letter" | "legal";
  margin?: "none" | "small" | "medium" | "large";
  scale?: "fit" | "fill" | "original";
}

export async function convertJpgToPdfCustomize(
  file: File,
  options?: ConvertOptions
): Promise<Blob> {
  // Set default options
  const {
    orientation = "portrait",
    format = "a4",
    margin = "medium",
    scale = "fit",
  } = options || {};

  // Map margin string to actual mm values
  const marginMap = {
    none: 0,
    small: 5,
    medium: 10,
    large: 20,
  };

  const marginInMm = marginMap[margin];

  const pdfBlob = await new Promise<Blob>((resolve, reject) => {
    // Check if file is JPG/JPEG
    if (!file.type.includes("jpeg") && !file.type.includes("jpg")) {
      reject(new Error("File must be a JPG/JPEG image"));
      return;
    }

    const reader = new FileReader();

    reader.onload = async (event) => {
      if (!event.target?.result) {
        reject(new Error("Failed to read file"));
        return;
      }

      const img = new Image();
      img.src = event.target.result as string;

      img.onload = () => {
        try {
          // Create PDF with specified orientation and format
          const pdf = new jsPDF({
            orientation,
            unit: "mm",
            format,
          });

          // Get PDF page dimensions
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();

          // Calculate available area with margins
          const availableWidth = pageWidth - 2 * marginInMm;
          const availableHeight = pageHeight - 2 * marginInMm;

          // Get image dimensions in pixels
          const imgWidth = img.width;
          const imgHeight = img.height;

          let finalWidth: number;
          let finalHeight: number;
          let xPos: number;
          let yPos: number;

          // Calculate dimensions based on scale option
          switch (scale) {
            case "fit":
              // Fit image within available area while maintaining aspect ratio
              const widthRatio = availableWidth / imgWidth;
              const heightRatio = availableHeight / imgHeight;
              const ratio = Math.min(widthRatio, heightRatio);

              finalWidth = imgWidth * ratio;
              finalHeight = imgHeight * ratio;
              xPos = marginInMm + (availableWidth - finalWidth) / 2;
              yPos = marginInMm + (availableHeight - finalHeight) / 2;
              break;

            case "fill":
              // Fill the entire available area (may distort aspect ratio)
              finalWidth = availableWidth;
              finalHeight = availableHeight;
              xPos = marginInMm;
              yPos = marginInMm;
              break;

            case "original":
              // Use original pixel dimensions (scaled to mm)
              // Convert pixels to mm (assuming 96 DPI: 1 pixel = 0.264583 mm)
              const pxToMm = 0.264583;
              finalWidth = imgWidth * pxToMm;
              finalHeight = imgHeight * pxToMm;

              // Center if fits, otherwise scale down to fit
              if (
                finalWidth > availableWidth ||
                finalHeight > availableHeight
              ) {
                const widthRatio = availableWidth / finalWidth;
                const heightRatio = availableHeight / finalHeight;
                const ratio = Math.min(widthRatio, heightRatio);

                finalWidth *= ratio;
                finalHeight *= ratio;
              }

              xPos = marginInMm + (availableWidth - finalWidth) / 2;
              yPos = marginInMm + (availableHeight - finalHeight) / 2;
              break;

            default:
              // Default to 'fit'
              const defaultRatio = Math.min(
                availableWidth / imgWidth,
                availableHeight / imgHeight
              );
              finalWidth = imgWidth * defaultRatio;
              finalHeight = imgHeight * defaultRatio;
              xPos = marginInMm + (availableWidth - finalWidth) / 2;
              yPos = marginInMm + (availableHeight - finalHeight) / 2;
          }

          // Add image to PDF
          pdf.addImage(img.src, "JPEG", xPos, yPos, finalWidth, finalHeight);

          // Return PDF as Blob
          resolve(pdf.output("blob"));
        } catch (error) {
          reject(error);
        }
      };

      img.onerror = () => {
        reject(new Error("Failed to load image"));
      };
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file"));
    };

    // Read the file as data URL
    reader.readAsDataURL(file);
  });

  return pdfBlob;
}

interface PdfToJpgOptions {
  quality?: number;
  scale?: number;
  pages?: number | "all" | number[];
  fileName?: string;
  type?: "image/jpeg" | "image/png";
}

export async function convertPdfToJpg(
  pdfFile: File,
  options?: PdfToJpgOptions
): Promise<Blob[]> {
  const {
    quality = 0.9,
    scale = 2,
    pages = "all",
    type = "image/jpeg",
  } = options || {};

  try {
    // Load pdfjs-dist dynamically to avoid large bundle size
    const pdfjsLib = await import("pdfjs-dist");

    // Set worker source
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

    // Read PDF file as ArrayBuffer
    const arrayBuffer = await pdfFile.arrayBuffer();

    // Load the PDF document
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;

    // Determine which pages to convert
    const totalPages = pdf.numPages;
    const pagesToConvert: number[] = [];

    if (pages === "all") {
      for (let i = 1; i <= totalPages; i++) {
        pagesToConvert.push(i);
      }
    } else if (typeof pages === "number") {
      if (pages > 0 && pages <= totalPages) {
        pagesToConvert.push(pages);
      } else {
        throw new Error(`Page ${pages} is out of range (1-${totalPages})`);
      }
    } else if (Array.isArray(pages)) {
      pagesToConvert.push(...pages.filter((p) => p > 0 && p <= totalPages));
    }

    if (pagesToConvert.length === 0) {
      throw new Error("No valid pages to convert");
    }

    const imageBlobs: Blob[] = [];

    // Convert each page to image
    for (const pageNumber of pagesToConvert) {
      const page = await pdf.getPage(pageNumber);

      // Get viewport
      const viewport = page.getViewport({ scale });

      // Create canvas
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Could not create canvas context");
      }

      // Set canvas dimensions
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Render PDF page to canvas
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
        canvas,
      };

      await page.render(renderContext).promise;

      // Convert canvas to Blob
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              throw new Error("Failed to create blob from canvas");
            }
          },
          type,
          quality
        );
      });

      imageBlobs.push(blob);
    }

    return imageBlobs;
  } catch (error) {
    throw new Error(`PDF to JPG conversion failed: ${error}`);
  }
}

/**
 * Create a ZIP file containing all JPGs
 */
export async function convertPdfToJpgZip(
  pdfFile: File,
  options?: PdfToJpgOptions
): Promise<Blob> {
  try {
    // Import JSZip dynamically
    const JSZip = await import("jszip");
    const zip = new JSZip.default();

    const jpgs = await convertPdfToJpg(pdfFile, options);
    const baseName = options?.fileName || pdfFile.name.replace(/\.pdf$/i, "");

    // Add each JPG to the ZIP
    jpgs.forEach((blob, index) => {
      zip.file(`${baseName}-page-${index + 1}.jpg`, blob);
    });

    // Generate ZIP file
    const zipBlob = await zip.generateAsync({ type: "blob" });
    return zipBlob;
  } catch (error) {
    throw new Error(`Failed to create ZIP: ${error}`);
  }
}

/**
 * Convert first page of PDF to JPG
 */
export async function convertPdfToJpgFirstPage(pdfFile: File): Promise<Blob> {
  return new Promise(async (resolve, reject) => {
    try {
      // Read PDF file
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

      // Load PDF
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const page = await pdf.getPage(1);

      // Set up canvas
      const viewport = page.getViewport({ scale: 2 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        reject(new Error("Canvas context not available"));
        return;
      }

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Render PDF to canvas
      await page.render({
        canvasContext: context,
        viewport: viewport,
        canvas,
      }).promise;

      // Convert to JPG Blob
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to create JPG blob"));
          }
        },
        "image/jpeg",
        0.9
      );
    } catch (error) {
      reject(new Error(`Conversion failed: ${error}`));
    }
  });
}
