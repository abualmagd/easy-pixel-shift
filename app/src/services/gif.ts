import { encode, UnencodedFrame } from "modern-gif";

export async function makeGif(frames: UnencodedFrame[] | undefined) {
  const workerUrl = "/gif.worker.js";

  // Convert URL strings to actual image data
  const processedFrames = await Promise.all(
    frames!.map(async (frame) => {
      if (typeof frame.data === "string") {
        // If it's a URL string, load the image
        return new Promise<UnencodedFrame>((resolve) => {
          const img = new Image();
          img.src = frame.data as string;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 200;
            canvas.height = 200;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              resolve(frame);
              return;
            }
            ctx.drawImage(img, 0, 0, 200, 200);
            const imageData = ctx.getImageData(0, 0, 200, 200);
            resolve({
              data: imageData.data,
              delay: frame.delay,
              left: frame.left,
              top: frame.top,
            });
          };
          img.onerror = () => resolve(frame);
        });
      }
      return frame;
    })
  );

  const output = await encode({
    workerUrl,
    width: 200,
    height: 200,
    // CanvasImageSource | BufferSource | string
    frames: processedFrames,
  });

  const blob = new Blob([output], { type: "image/gif" });

  return blob;
}

export async function fileToImage(
  file: File | Blob
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };

    img.onerror = (error) => {
      URL.revokeObjectURL(url);
      reject(new Error(`Failed to load image: ${error}`));
    };

    img.src = url;
  });
}
