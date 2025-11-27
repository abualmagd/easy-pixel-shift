import { readFileAsText } from "./pdf";

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
