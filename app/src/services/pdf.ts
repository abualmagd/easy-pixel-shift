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
