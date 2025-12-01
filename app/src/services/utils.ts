import { saveAs } from "file-saver";
import { toast } from "react-toastify";

// Basic download function
export const downloadFile = (
  blob: Blob,
  fileName: string,
  extension: string
) => {
  const fullFileName = `${fileName}.${extension}`;
  saveAs(blob, fullFileName);
};

export const notify = (message: string, error: boolean) => {
  if (error) {
    return toast.error(message);
  } else {
    return toast(message);
  }
};

export const fileTypeFinder = (file: File) => {
  const lastDotIndex = file.name.lastIndexOf(".");
  let extension = "N/A";

  if (lastDotIndex > 0 && lastDotIndex < file.name.length - 1) {
    // Extract the substring after the last dot
    extension = file.name.substring(lastDotIndex + 1).toLowerCase();
  } else if (file.name.length > 0 && lastDotIndex === -1) {
    extension = "None (no dot)";
  } else if (lastDotIndex === file.name.length - 1) {
    extension = "None (trailing dot)";
  }
  return extension;
};

export const fileNameFinder = (file: File) => {
  const lastDotIndex = file.name.lastIndexOf(".");
  let name = "N/A";

  if (lastDotIndex > 0 && lastDotIndex < file.name.length - 1) {
    // Extract the substring after the last dot
    name = file.name.split(".")[0].toLowerCase();
  } else if (file.name.length > 0 && lastDotIndex === -1) {
    name = "file";
  } else if (lastDotIndex === file.name.length - 1) {
    name = "file";
  }
  return name;
};
