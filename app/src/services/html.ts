import { readFileAsText } from "./pdf";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
} from "docx";

export async function convertTxtToHtml(file: File) {
  const text = await readFileAsText(file);
  const html = String(text)
    .split("\n")
    .map((line) => {
      if (line.trim() === "") return "<br>";
      return `<p>${line}</p>`;
    })
    .join("");

  const blob = new Blob([html], { type: "text/html" });

  return blob;
}

// html-to-text-converter.ts
export async function convertHtmlToText(file: File): Promise<Blob> {
  const htmlContent = await readFileAsText(file);
  // Convert HTML to plain text
  const textContent = extractTextFromHtmlBest(String(htmlContent));

  // Convert text to blob
  const blob = new Blob([textContent], {
    type: "text/plain;charset=utf-8",
  });

  console.log(`Text document extracted successfully from HTML`);

  return blob;
}

// Extract plain text from HTML string
function extractTextFromHtml(html: string): string {
  // Create temporary div element
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  // Extract text content
  let text = tempDiv.textContent || tempDiv.innerText || "";

  // Clean up the text
  text = cleanTextContent(text);

  return text;
}

function extractTextFromHtmlBest(html: string): string {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Create a temporary div to use innerText
    const tempDiv = document.createElement("div");

    // Clone body content without script/style elements
    const bodyClone = doc.body.cloneNode(true) as HTMLElement;

    // Remove unwanted elements
    const unwanted = bodyClone.querySelectorAll(
      "script, style, link, meta, noscript, title"
    );
    unwanted.forEach((el) => el.remove());

    // Put the cleaned content in temp div
    tempDiv.appendChild(bodyClone);

    // Use innerText (respects CSS visibility)
    const text = tempDiv.innerText;

    // Clean up
    tempDiv.remove();

    return cleanTextContent(text);
  } catch (error) {
    console.warn("Best extraction failed, using simple method:", error);
    return extractTextFromHtml(html);
  }
}

// Clean and format text content
function cleanTextContent(text: string): string {
  return (
    text
      // Normalize line endings
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")

      // Handle multiple spaces
      .replace(/[ \t]+/g, " ")

      // Handle line breaks from block elements
      .replace(/\n{3,}/g, "\n\n")

      // Remove leading/trailing whitespace from lines
      .replace(/^[ \t]+/gm, "")
      .replace(/[ \t]+$/gm, "")

      // Trim the entire content
      .trim()
  );
}

// html-to-docx
export async function convertHtmlToWord(file: File): Promise<Blob> {
  // Parse HTML and convert to DOCX paragraphs

  const htmlContent = await readFileAsText(file);
  const paragraphs = await parseHtmlToDocx(String(htmlContent));

  // Create the document
  const doc = new Document({
    creator: "EasyPixelShift.com",
    title: "Document",
    description: "Generated from HTML",
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
  console.log(`Word document generated successfully from HTML`);

  return blob;
}

/**
 * Parse HTML and convert to DOCX paragraphs
 */
async function parseHtmlToDocx(html: string): Promise<Paragraph[]> {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Start with body or the entire document
  const body = doc.body;
  const paragraphs: Paragraph[] = [];

  // Walk through DOM nodes
  const walker = document.createTreeWalker(
    body,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    null
  );

  let currentNode: Node | null;
  const nodes: Node[] = [];

  while ((currentNode = walker.nextNode())) {
    nodes.push(currentNode);
  }

  // Process nodes
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];

    if (node.nodeType === Node.TEXT_NODE) {
      const textNode = node as Text;
      const text = textNode.textContent?.trim();

      if (text && text.length > 0) {
        // Check if this text node is inside a block element
        const parentElement = getParentBlockElement(textNode);

        if (!parentElement || isInlineElement(parentElement)) {
          // If no block parent or parent is inline, create paragraph
          paragraphs.push(createTextParagraph(text));
        }
        // If parent is block element, it will be handled when we reach that element
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      const tagName = element.tagName.toLowerCase();

      switch (tagName) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          paragraphs.push(createHeadingParagraph(element));
          break;

        case "p":
          paragraphs.push(createParagraphFromElement(element));
          break;

        case "div":
          if (hasTextContent(element)) {
            paragraphs.push(createParagraphFromElement(element));
          }
          break;

        case "br":
          paragraphs.push(
            new Paragraph({
              children: [new TextRun("")],
              spacing: { after: 100 },
            })
          );
          break;

        case "hr":
          paragraphs.push(createHorizontalRule());
          break;

        case "ul":
        case "ol":
          const listParagraphs = createListParagraphs(element);
          paragraphs.push(...listParagraphs);
          break;

        case "table":
          const table = createTable(element);
          if (table) {
            const tableParagraph = convertTableToParagraph(element);
            if (tableParagraph) {
              paragraphs.push(tableParagraph);
            }
          }
          break;

        case "blockquote":
          paragraphs.push(createBlockquoteParagraph(element));
          break;

        case "pre":
        case "code":
          paragraphs.push(createCodeParagraph(element));
          break;

        default:
          // For other block elements that contain text
          if (isBlockElement(element) && hasTextContent(element)) {
            paragraphs.push(createParagraphFromElement(element));
          }
          break;
      }
    }
  }

  // If no paragraphs were created, create one empty paragraph
  if (paragraphs.length === 0) {
    paragraphs.push(
      new Paragraph({
        children: [new TextRun("")],
      })
    );
  }

  return paragraphs;
}

/**
 * Create heading paragraph
 */
function createHeadingParagraph(element: HTMLElement): Paragraph {
  const text = element.textContent?.trim() || "";
  const tagName = element.tagName.toLowerCase();

  let headingLevel;
  switch (tagName) {
    case "h1":
      headingLevel = HeadingLevel.HEADING_1;
      break;
    case "h2":
      headingLevel = HeadingLevel.HEADING_2;
      break;
    case "h3":
      headingLevel = HeadingLevel.HEADING_3;
      break;
    case "h4":
      headingLevel = HeadingLevel.HEADING_4;
      break;
    case "h5":
      headingLevel = HeadingLevel.HEADING_5;
      break;
    case "h6":
      headingLevel = HeadingLevel.HEADING_6;
      break;
    default:
      headingLevel = HeadingLevel.HEADING_1;
  }

  return new Paragraph({
    text: text,
    heading: headingLevel,
    spacing: { after: 200 },
  });
}

/**
 * Create paragraph from element with formatting
 */
function createParagraphFromElement(element: HTMLElement): Paragraph {
  const textRuns = extractTextRunsFromElement(element);

  return new Paragraph({
    children: textRuns,
    spacing: { after: 100 },
  });
}

/**
 * Extract formatted text runs from element
 */
function extractTextRunsFromElement(element: HTMLElement): TextRun[] {
  const textRuns: TextRun[] = [];

  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
    null
  );

  let currentNode: Node | null;

  while ((currentNode = walker.nextNode())) {
    if (currentNode.nodeType === Node.TEXT_NODE) {
      const text = (currentNode as Text).textContent?.trim();

      if (text && text.length > 0) {
        // Get formatting from parent elements
        const parentElement = getParentElementWithFormatting(currentNode);
        const formatting = getFormattingFromElement(parentElement);

        textRuns.push(
          new TextRun({
            text: text + " ", // Add space between runs
            bold: formatting.bold,
            italics: formatting.italic,
            color: formatting.color,
            size: formatting.size,
          })
        );
      }
    }
  }

  // If no text runs were found, create one with the element's text
  if (textRuns.length === 0) {
    const text = element.textContent?.trim();
    if (text) {
      textRuns.push(new TextRun(text));
    }
  }

  return textRuns;
}

/**
 * Get parent element that affects formatting
 */
function getParentElementWithFormatting(node: Node): HTMLElement | null {
  let current: Node | null = node.parentElement;

  while (current) {
    const element = current as HTMLElement;
    const tagName = element.tagName.toLowerCase();

    if (
      ["strong", "b", "em", "i", "u", "span", "font", "a"].includes(tagName)
    ) {
      return element;
    }

    current = current.parentElement;
  }

  return null;
}

/**
 * Extract formatting from element
 */
function getFormattingFromElement(element: HTMLElement | null): {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  color: string;
  size: number;
} {
  if (!element) {
    return {
      bold: false,
      italic: false,
      underline: false,
      color: "000000",
      size: 24,
    };
  }

  const tagName = element.tagName.toLowerCase();
  const style = element.style;

  return {
    bold:
      tagName === "strong" || tagName === "b" || style.fontWeight === "bold",
    italic: tagName === "em" || tagName === "i" || style.fontStyle === "italic",
    underline: tagName === "u" || style.textDecoration?.includes("underline"),
    color: style.color || "000000",
    size: parseInt(style.fontSize) || 24,
  };
}

/**
 * Create simple text paragraph
 */
function createTextParagraph(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun(text)],
    spacing: { after: 100 },
  });
}

/**
 * Create horizontal rule
 */
function createHorizontalRule(): Paragraph {
  return new Paragraph({
    children: [new TextRun("―".repeat(50))],
    spacing: { before: 200, after: 200 },
    alignment: "center",
  });
}

/**
 * Create list paragraphs
 */
function createListParagraphs(listElement: HTMLElement): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  const isOrdered = listElement.tagName.toLowerCase() === "ol";
  const items = listElement.querySelectorAll("li");

  items.forEach((item, index) => {
    const bulletText = isOrdered ? `${index + 1}.` : "•";
    const text = item.textContent?.trim() || "";

    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${bulletText} ${text}`,
            bold: isOrdered ? true : false,
          }),
        ],
        spacing: { after: 50 },
        indent: { left: 720 }, // 0.5 inch indent
      })
    );
  });

  return paragraphs;
}

/**
 * Create table from HTML table
 */
function createTable(tableElement: HTMLElement): Table | null {
  const rows = tableElement.querySelectorAll("tr");
  if (rows.length === 0) return null;

  const tableRows: TableRow[] = [];

  rows.forEach((row) => {
    const cells = row.querySelectorAll("th, td");
    const tableCells: TableCell[] = [];

    cells.forEach((cell) => {
      const text = cell.textContent?.trim() || "";
      const isHeader = cell.tagName.toLowerCase() === "th";

      // Calculate column span and row span
      const colSpan = parseInt(cell.getAttribute("colspan") || "1");
      const rowSpan = parseInt(cell.getAttribute("rowspan") || "1");

      tableCells.push(
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: text,
                  bold: isHeader,
                }),
              ],
            }),
          ],
          columnSpan: colSpan,
          rowSpan: rowSpan,
          shading: isHeader
            ? {
                fill: "DDDDDD",
              }
            : undefined,
        })
      );
    });

    if (tableCells.length > 0) {
      tableRows.push(new TableRow({ children: tableCells }));
    }
  });

  if (tableRows.length > 0) {
    return new Table({
      rows: tableRows,
      width: {
        size: 100,
        type: "pct",
      },
    });
  }

  return null;
}

/**
 * Create blockquote paragraph
 */
function createBlockquoteParagraph(element: HTMLElement): Paragraph {
  const text = element.textContent?.trim() || "";

  return new Paragraph({
    children: [
      new TextRun({
        text: `"${text}"`,
        italics: true,
        color: "666666",
      }),
    ],
    spacing: { before: 100, after: 100 },
    indent: { left: 720 },
  });
}

/**
 * Create code paragraph
 */
function createCodeParagraph(element: HTMLElement): Paragraph {
  const text = element.textContent?.trim() || "";

  return new Paragraph({
    children: [
      new TextRun({
        text: text,
        font: "Courier New",
        size: 20, // 10 points
        color: "0066CC",
      }),
    ],
    spacing: { before: 100, after: 100 },
    shading: {
      fill: "F5F5F5",
    },
  });
}

/**
 * Check if element has text content
 */
function hasTextContent(element: HTMLElement): boolean {
  const text = element.textContent?.trim();
  return !!(text && text.length > 0);
}

/**
 * Check if element is a block element
 */
function isBlockElement(element: HTMLElement): boolean {
  const blockTags = [
    "div",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "table",
    "tr",
    "td",
    "th",
    "blockquote",
    "pre",
    "hr",
    "br",
    "section",
    "article",
    "header",
    "footer",
    "nav",
    "aside",
    "main",
    "figure",
    "figcaption",
  ];

  return blockTags.includes(element.tagName.toLowerCase());
}

/**
 * Check if element is an inline element
 */
function isInlineElement(element: HTMLElement): boolean {
  const inlineTags = [
    "span",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "a",
    "code",
    "sup",
    "sub",
    "small",
    "mark",
    "time",
    "abbr",
    "cite",
    "q",
    "samp",
    "var",
    "kbd",
  ];

  return inlineTags.includes(element.tagName.toLowerCase());
}

/**
 * Get parent block element
 */
function getParentBlockElement(node: Node): HTMLElement | null {
  let current: Node | null = node.parentElement;

  while (current) {
    if (current.nodeType === Node.ELEMENT_NODE) {
      const element = current as HTMLElement;
      if (isBlockElement(element)) {
        return element;
      }
    }
    current = current.parentElement;
  }

  return null;
}

function convertTableToParagraph(tableElement: HTMLElement): Paragraph | null {
  const rows = tableElement.querySelectorAll("tr");
  if (rows.length === 0) return null;

  // Convert table to formatted text
  const tableRows: string[] = [];

  rows.forEach((row, rowIndex) => {
    const cells = row.querySelectorAll("th, td");
    const cellTexts = Array.from(cells).map((cell) => {
      const text = cell.textContent?.trim() || "";
      // Truncate long text for table display
      return text.length > 30 ? text.substring(0, 27) + "..." : text;
    });

    const rowText = cellTexts.join(" | ");
    tableRows.push(`| ${rowText} |`);

    // Add separator after header row
    if (rowIndex === 0 && row.querySelector("th")) {
      const separator = "|" + "---|".repeat(cells.length);
      tableRows.push(separator);
    }
  });

  return new Paragraph({
    children: [
      new TextRun({
        text: tableRows.join("\n"),
        font: "Courier New",
        size: 20,
      }),
    ],
    spacing: { before: 100, after: 100 },
  });
}
