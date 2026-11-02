"use client";

import { Options } from "@image-tracer-ts/browser";

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      if (!image.naturalWidth || !image.naturalHeight) {
        reject(new Error("Image has invalid dimensions"));
        return;
      }
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("The selected file could not be read as an image"));
    };
    image.src = objectUrl;
  });
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: string,
  quality?: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("The browser could not create the converted image"));
      },
      type,
      quality
    );
  });
}

export async function convertImageFormat(
  file: File,
  targetType: "image/png" | "image/jpeg" | "image/webp"
): Promise<Blob> {
  const image = await loadImage(file);
  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas is not supported by this browser");

  // JPEG has no alpha channel; use white as the explicit background.
  if (targetType === "image/jpeg") {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  context.drawImage(image, 0, 0);

  return canvasToBlob(
    canvas,
    targetType,
    targetType === "image/jpeg" || targetType === "image/webp" ? 0.92 : undefined
  );
}

export async function convertToPng(file: File): Promise<Blob> {
  const image = await loadImage(file);
  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas is not supported by this browser");

  context.drawImage(image, 0, 0);
  return canvasToBlob(canvas, "image/png");
}

export async function convertToSvg(file: File): Promise<Blob> {
  if (typeof window === "undefined") {
    throw new Error("SVG tracing must run in the browser");
  }

  // Bitmap-to-SVG is an automatic trace, not recovery of original vector paths.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const tracer = require("@image-tracer-ts/browser");
  const options: Partial<Options> = { fillStyle: tracer.FillStyle.STROKE };
  const svgString = await tracer.ImageTracerBrowser.fromFile(file, options);
  return new Blob([svgString], { type: "image/svg+xml" });
}

export async function convertToIco(file: File): Promise<Blob> {
  // A single 256 x 256 PNG-backed ICO image. Transparent padding preserves
  // the source aspect ratio; PNG payloads are supported by modern Windows.
  const image = await loadImage(file);
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas is not supported by this browser");

  const scale = Math.min(size / image.naturalWidth, size / image.naturalHeight);
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const x = Math.round((size - width) / 2);
  const y = Math.round((size - height) / 2);
  context.clearRect(0, 0, size, size);
  context.drawImage(image, x, y, width, height);

  const pngBlob = await canvasToBlob(canvas, "image/png");
  const pngBytes = await pngBlob.arrayBuffer();

  // ICONDIR (6 bytes) + ICONDIRENTRY (16 bytes) + PNG image payload.
  const header = new ArrayBuffer(22);
  const view = new DataView(header);
  view.setUint16(0, 0, true);
  view.setUint16(2, 1, true);
  view.setUint16(4, 1, true);
  view.setUint8(6, 0); // 256 pixels is represented by 0
  view.setUint8(7, 0);
  view.setUint8(8, 0);
  view.setUint8(9, 0);
  view.setUint16(10, 1, true);
  view.setUint16(12, 32, true);
  view.setUint32(14, pngBytes.byteLength, true);
  view.setUint32(18, 22, true);

  return new Blob([header, pngBytes], { type: "image/x-icon" });
}
