import { jsPDF } from "jspdf";

export function convertTxtToPdf(text) {
  const pdf = new jsPDF();
  pdf.setFont("helvetica");
  pdf.setFontSize(12);

  const lines = pdf.splitTextToSize(text, 180);
  let yPosition = 10;
  const lineHeight = 7;

  lines.forEach((line) => {
    if (yPosition > 280) {
      pdf.addPage();
      yPosition = 10;
    }
    pdf.text(line, 10, yPosition);
    yPosition += lineHeight;
  });

  return pdf.output("blob");
}

export const readFileAsText = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsText(file);
  });
};
