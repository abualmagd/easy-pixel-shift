import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";

function getDocumentNote(from: string, to: string) {
  const source = from.toLowerCase();
  const target = to.toLowerCase();

  if (source === "pdf" && target === "txt") {
    return "The converter extracts selectable text from PDF pages. It does not run OCR, so a scanned PDF that contains only page images may produce little or no text. Columns, tables, and page layout are simplified.";
  }
  if (source === "pdf" && target === "docx") {
    return "PDF-to-DOCX uses text extraction to create a new Word document. It is useful for reusing text, but the original page layout, columns, tables, and images may not be reproduced.";
  }
  if (source === "pdf" && target === "html") {
    return "PDF-to-HTML extracts page text and places it into HTML page sections. It does not recreate the exact visual layout of the PDF, and scanned pages without selectable text are not OCR-processed.";
  }
  if (source === "docx" && target === "txt") {
    return "Plain text keeps the document's words but removes most formatting, images, tables, and page layout.";
  }
  if (source === "docx" && target === "pdf") {
    return "This conversion extracts document text and creates a simple PDF. It is not a page-faithful rendering of the original Word document; review fonts, tables, images, and layout separately.";
  }
  if (source === "docx" && target === "html") {
    return "The converter translates supported Word document content into HTML. Complex page layouts and some advanced Word features may not be preserved exactly.";
  }
  if (source === "html" && target === "txt") {
    return "HTML tags and styling are removed to produce readable text. Images, links as visual elements, and page styling are not retained as plain text.";
  }
  if (source === "html" && target === "pdf") {
    return "HTML is rendered in a browser-sized layout and placed into a PDF page. Complex CSS, external images, and very long pages may not match the original website exactly.";
  }
  if (source === "html" && target === "docx") {
    return "The converter maps common HTML headings, paragraphs, lists, and tables into Word elements. Advanced CSS and interactive website behavior are not carried into DOCX.";
  }
  if (source === "txt" && target === "pdf") {
    return "Plain text is placed into a basic PDF layout. Rich formatting is not available in a TXT source, and very long lines or special characters should be checked in the result.";
  }
  if (source === "txt" && target === "html") {
    return "Each text line is wrapped in simple HTML paragraphs. The conversion does not infer headings, tables, links, or rich styling from plain text.";
  }
  if (source === "txt" && target === "docx") {
    return "Text lines become basic Word paragraphs. Since TXT has no rich formatting, the output does not recreate styles, tables, or embedded images.";
  }
  return "Document conversion can change formatting, page layout, images, and other structural elements. Open the downloaded file and review it before editing or sharing.";
}

export default function FFeature({ from, to }: { from: string; to: string }) {
  const note = getDocumentNote(from, to);

  return (
    <section className="mt-8 w-full space-y-7">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">
          How to convert {from.toUpperCase()} to {to.toUpperCase()}
        </h2>
        <ol className="list-decimal space-y-2 pl-6 text-base leading-7 text-slate-700">
          <li>Select a {from.toUpperCase()} file from your device.</li>
          <li>Choose {to.toUpperCase()} in the output format selector.</li>
          <li>Start the conversion and wait for the browser to finish processing.</li>
          <li>Download the new file and check its text, formatting, and page layout.</li>
        </ol>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="text-lg font-semibold text-slate-900">
          What to expect from {from.toUpperCase()} to {to.toUpperCase()}
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-700">{note}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <article className="flex flex-col items-center gap-3 text-center">
          <CiBookmarkCheck size={38} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Check the output</h3>
          <p className="text-sm leading-6 text-slate-700">
            Compare important sections with the source file, especially tables, page breaks, and special characters.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center">
          <BsArrowUpRightCircle size={35} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Know the limitations</h3>
          <p className="text-sm leading-6 text-slate-700">
            Text extraction and format conversion are not the same as preserving the original document design.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center">
          <AiOutlineSecurityScan size={38} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Browser processing</h3>
          <p className="text-sm leading-6 text-slate-700">
            These document conversion functions read the selected file in the browser and create the result locally in browser memory.
          </p>
        </article>
      </div>
    </section>
  );
}
