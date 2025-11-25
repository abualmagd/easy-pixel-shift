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
