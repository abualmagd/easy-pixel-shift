import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

export default function FileFeature() {
  return (
    <section className="flex w-full flex-col gap-7 mt-8" aria-labelledby="document-converter-guide">
      <div className="space-y-3">
        <h2 id="document-converter-guide" className="text-xl font-semibold">
          Supported document formats and what to expect
        </h2>
        <p className="text-base leading-7 text-slate-700">
          The available document tools work with PDF, DOCX, HTML and TXT files.
          A conversion changes the document structure, so the output may not
          look exactly like the source.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-700">
          <li><strong>PDF:</strong> useful for sharing a fixed page layout. Text extraction works on selectable text; scanned pages need OCR, which these text-extraction tools do not provide.</li>
          <li><strong>DOCX:</strong> supports editable Word content. Converting from or to other formats may simplify tables, images, fonts, page breaks and advanced layout.</li>
          <li><strong>HTML:</strong> represents structured web content. External images, CSS, fonts and scripts may not be reproduced as they appear in a full browser page.</li>
          <li><strong>TXT:</strong> preserves plain text, not rich formatting, images, tables or page design.</li>
        </ul>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="text-lg font-semibold text-slate-900">Before you convert</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700">
          <li>Choose a PDF, DOCX, HTML or TXT file from your device.</li>
          <li>Select a different output format from the list.</li>
          <li>Start the conversion and wait for the browser to finish.</li>
          <li>Open the downloaded file and compare important text, tables, images and page breaks with the original.</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <article className="flex flex-col items-center gap-3 text-center">
          <CgFileDocument size={40} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Text extraction is not OCR</h3>
          <p className="text-sm leading-6 text-slate-700">
            A PDF made from scanned page images may contain no selectable text. Use an OCR tool first if you need to recognize text in those images.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center">
          <BsArrowUpRightCircle size={35} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Review formatting</h3>
          <p className="text-sm leading-6 text-slate-700">
            Check page breaks, reading order, special characters and tables before relying on a converted document.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center">
          <AiOutlineSecurityScan size={38} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Browser-based tools</h3>
          <p className="text-sm leading-6 text-slate-700">
            The document conversion functions run in the browser. Processing large documents can use significant device memory and may take longer on older devices.
          </p>
        </article>
      </div>
    </section>
  );
}
