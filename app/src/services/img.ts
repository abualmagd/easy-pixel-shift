export async function convertImageFormat(
  file: File,
  targetType: "image/png" | "image/jpeg" | "image/webp"
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
        targetType === "image/png" ? undefined : 0.92
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
        "image/png" // no quality parameter for PNG
      );
    };

    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(file);
  });
}
