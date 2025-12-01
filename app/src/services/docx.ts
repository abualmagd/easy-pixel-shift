import { Document, Packer, Paragraph, TextRun } from "docx";
import { readFileAsText } from "./pdf";
import mammoth from "mammoth";
import jsPDF from "jspdf";
import { siteLink, ttle } from "../const";

// txt to docx {word}
export async function convertTextToWord(file: File): Promise<Blob> {
  const textContent = await readFileAsText(file);

  // Split text into paragraphs (handle different line endings)
  const paragraphs = String(textContent)
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0 || line.includes("\n"))
    .map((line) => {
      // Handle empty lines as spacing
      if (line.trim().length === 0) {
        return new Paragraph({
          children: [new TextRun("")],
          spacing: { after: 100 },
        });
      }

      return new Paragraph({
        children: [
          new TextRun({
            text: line,
            font: "Arial",
            size: 24, // 12 points * 2 (converted to half-points)
          }),
        ],
        spacing: { after: 100 },
      });
    });

  // If no paragraphs, create one with empty text
  if (paragraphs.length === 0) {
    paragraphs.push(
      new Paragraph({
        children: [new TextRun("")],
      })
    );
  }

  // Create the document with basic settings
  const doc = new Document({
    creator: "EasyPixelShift.com",
    title: "Document",
    description: "Generated from text",
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440, // 1 inch in twips
              right: 1440,
              bottom: 1440,
              left: 1440,
            },
          },
        },
        children: paragraphs,
      },
    ],
  });

  // Generate the Word document as a blob
  const blob = await Packer.toBlob(doc);
  console.log(`Word document generated successfully`);

  return blob;
}

/**
 * Convert DOCX file to plain text
 */
export async function convertWordToTxt(file: File): Promise<Blob> {
  // Read the DOCX file content
  const arrayBuffer = await readFileAsArrayBuffer(file);

  // Convert DOCX to text using mammoth
  const result = await mammoth.extractRawText({ arrayBuffer });

  // Get the text content
  const textContent = result.value;

  // Convert text to blob
  const blob = new Blob([textContent], {
    type: "text/plain;charset=utf-8",
  });

  console.log(`Text document extracted successfully from DOCX`);

  return blob;
}

//read file as buffer
function readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target?.result as ArrayBuffer);
    };

    reader.onerror = (error) => {
      reject(new Error(`Failed to read file: ${error}`));
    };

    reader.readAsArrayBuffer(file);
  });
}

// docx-to-pdf-converter.ts

export async function convertWordToPdf(file: File): Promise<Blob> {
  // First, convert DOCX to text (or structured content)
  const textContent = await extractTextFromDocx(file);

  // Create PDF from text content
  const pdf = new jsPDF();
  pdf.setFont("helvetica");
  pdf.setFontSize(12);

  const lines = pdf.splitTextToSize(textContent, 180);
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

//convert docx to html
export async function convertWordToHtml(file: File): Promise<Blob> {
  // Read the DOCX file content
  const arrayBuffer = await readFileAsArrayBuffer(file);

  // Convert DOCX to HTML using mammoth
  const result = await mammoth.convertToHtml({ arrayBuffer });

  // Get the HTML content
  const htmlContent = createCompleteHtmlDocument(result.value, file.name);

  // Convert HTML to blob
  const blob = new Blob([htmlContent], {
    type: "text/html;charset=utf-8",
  });

  console.log(`HTML document generated successfully from DOCX`);

  return blob;
}

/**
 * Extract text from DOCX file
 */
async function extractTextFromDocx(file: File): Promise<string> {
  const arrayBuffer = await readFileAsArrayBuffer(file);
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
}

/**
 * Create a complete HTML document with proper structure
 */
function createCompleteHtmlDocument(
  content: string,
  originalFileName: string
): string {
  const title = originalFileName.replace(/\.docx$/i, "");

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #f9f9f9;
        }
        
        .document-container {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
            font-size: 28px;
            margin-bottom: 20px;
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        
        h2 {
            font-size: 22px;
            margin: 25px 0 15px 0;
            color: #34495e;
        }
        
        h3 {
            font-size: 18px;
            margin: 20px 0 12px 0;
            color: #7f8c8d;
        }
        
        p {
            margin-bottom: 16px;
            font-size: 16px;
        }
        
        ul, ol {
            margin: 0 0 16px 20px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        
        strong, b {
            font-weight: 600;
            color: #2c3e50;
        }
        
        em, i {
            font-style: italic;
            color: #555;
        }
        
        a {
            color: #3498db;
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        blockquote {
            border-left: 4px solid #3498db;
            margin: 20px 0;
            padding-left: 20px;
            font-style: italic;
            color: #555;
            background-color: #f8f9fa;
            padding: 15px 20px;
        }
        
        code {
            background-color: #f1f1f1;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
        }
        
        pre {
            background-color: #282c34;
            color: #abb2bf;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
            font-size: 14px;
        }
        
        .document-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .document-header h1 {
            border-bottom: none;
            margin-bottom: 10px;
        }
        
        .conversion-info {
            font-size: 12px;
            color: #7f8c8d;
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .document-container {
                box-shadow: none;
                padding: 0;
            }
        }
        
        @media (max-width: 768px) {
            body {
                padding: 20px 10px;
            }
            
            .document-container {
                padding: 20px;
            }
            
            h1 { font-size: 24px; }
            h2 { font-size: 20px; }
            h3 { font-size: 16px; }
            p { font-size: 15px; }
        }
    </style>
</head>
<body>
    <div class="document-container">
        <div class="document-header">
            <h1>${escapeHtml(title)}</h1>
        </div>
        
        <div class="document-content">
            ${content}
        </div>
        
        <div class="conversion-info">
            <p>Document converted using DOCX to HTML <a href="${siteLink}">${ttle}</a> converter • ${new Date().toLocaleDateString()}</p>
        
            </div>
    </div>
</body>
</html>`;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
