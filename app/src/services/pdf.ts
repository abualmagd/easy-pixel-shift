import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

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
    const pageHeight = pdf.internal.pageSize.getHeight();

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
