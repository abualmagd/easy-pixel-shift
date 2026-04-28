/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { parseICO } from "icojs/browser";
import { readFileAsArrayBuffer } from "./docx";
import { fileNameFinder, fileTypeFinder } from "./utils";
import { Options } from "@image-tracer-ts/browser";

export async function convertImageFormat(
  file: File,
  targetType: "image/png" | "image/jpeg" | "image/webp",
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Canvas not supported");

      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject("Conversion failed");
        },
        targetType,
        targetType === "image/png" ? undefined : 0.92,
      );
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

export async function convertToPng(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // prevent canvas tainting

    img.onload = () => {
      if (img.width === 0 || img.height === 0) {
        return reject(new Error("Image has invalid dimensions"));
      }

      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Canvas not supported"));

      ctx.drawImage(img, 0, 0);

      // Try toBlob first
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            // Fallback: use toDataURL if toBlob fails
            try {
              const dataUrl = canvas.toDataURL("image/png");
              const byteString = atob(dataUrl.split(",")[1]);
              const mimeString = "image/png";
              const ab = new ArrayBuffer(byteString.length);
              const ia = new Uint8Array(ab);
              for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
              }
              resolve(new Blob([ab], { type: mimeString }));
            } catch (err) {
              reject(new Error("PNG conversion failed" + String(err)));
            }
          }
        },
        "image/png", // no quality parameter for PNG
      );
    };

    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(file);
  });
}

export async function convertToSvg(file: File): Promise<Blob> {
  if (typeof window === "undefined") {
    throw new Error("PDF conversion must run in the browser, not during SSR");
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const tracer = require("@image-tracer-ts/browser");
  const options: Partial<Options> = { fillStyle: tracer.FillStyle.STROKE };
  const svgString = await tracer.ImageTracerBrowser.fromFile(file, options);
  console.log("svg: ", svgString);
  return new Blob([svgString], { type: "image/svg+xml" });
}

export async function convertToIco(file: File): Promise<Blob> {
  const type = fileTypeFinder(file);
  if (type === "png") {
    const buffer = await readFileAsArrayBuffer(file);
    const images = await parseICO(buffer);
    return new Blob([images[0].buffer], { type: "image/ico" });
  } else {
    const fileName = fileNameFinder(file);
    const pngBlob = await convertToPng(file);
    const pngFile = new File([pngBlob], fileName);
    const buffer = await readFileAsArrayBuffer(pngFile);
    const images = await parseICO(buffer);
    return new Blob([images[0].buffer], { type: "image/ico" });
  }
}

/**
 * Uses Canvas API to resize/compress an image
 */
export async function processCompression(
  file: File,
  quality: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set canvas dimensions to match image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image onto canvas
        ctx?.drawImage(img, 0, 0);

        // Convert to Blob with specified quality
        // Note: 'image/jpeg' and 'image/webp' support quality parameter
        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error("Canvas to Blob conversion failed"));
          },
          "image/jpeg",
          quality,
        );
      };

      img.onerror = (err) => reject(err);
    };

    reader.onerror = (err) => reject(err);
  });
}

export async function processResizing(
  file: File,
  settings: any,
): Promise<Blob> {
  const { width, height, percentage, mode, targetKb, format } = settings;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target?.result as string;
      img.onload = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }
        // Calculate target dimensions
        let tw = width;
        let th = height;
        if (mode === "percentage") {
          tw = Math.round((img.width * percentage) / 100);
          th = Math.round((img.height * percentage) / 100);
        }

        canvas.width = tw;
        canvas.height = th;
        ctx?.drawImage(img, 0, 0, tw, th);

        const mimeType = format === "original" ? file.type : format;

        // If target size is specified and it's a JPEG
        if (
          targetKb &&
          (mimeType === "image/jpeg" || mimeType === "image/webp")
        ) {
          let quality = 0.95;
          let blob: Blob | null = null;

          // Iterative loop to hit target size
          for (let i = 0; i < 6; i++) {
            blob = await new Promise((r) =>
              canvas.toBlob((b) => r(b), mimeType, quality),
            );
            if (blob && blob.size / 1024 <= targetKb) break;
            quality -= 0.15;
            if (quality < 0.1) break;
          }
          resolve(blob!);
        } else {
          canvas.toBlob((b) => resolve(b!), mimeType, 0.92);
        }
      };
    };
  });
}
