import type { Metadata } from "next";
import { siteLink } from "./const";

// Define a utility function to replace the placeholders
const replacePlaceholders = (
  template: string,
  from: string,
  to: string
): string => {
  return template
    .replace(/{{FROM}}/g, from.toUpperCase()) // e.g., JPG
    .replace(/{{from}}/g, from.toLowerCase()) // e.g., jpg
    .replace(/{{TO}}/g, to.toUpperCase()) // e.g., PNG
    .replace(/{{to}}/g, to.toLowerCase()); // e.g., png
};

// Define the base structure using placeholders
export const baseMetadataTemplate = (from: string, to: string): Metadata => {
  // --- Start Metadata Template ---
  const titleTemplate =
    "{{FROM}} to {{TO}} Converter Online: High Quality & Free Tool";
  const descriptionTemplate =
    "Convert your {{FROM}} images to high-quality {{TO}} format easily and quickly. Preserve quality and is free to use.";
  const keywordsTemplate = [
    "{{from}} to {{to}} converter",
    "convert {{from}} to {{to}}",
    "online {{from}} to {{to}}",
    "free {{from}} {{to}} converter",
    "{{from}} {{to}} tool",
  ].join(", ");

  // --- Apply Placeholders ---
  const title = replacePlaceholders(titleTemplate, from, to);
  const description = replacePlaceholders(descriptionTemplate, from, to);
  const keywords = replacePlaceholders(keywordsTemplate, from, to).split(", ");

  return {
    title: title,
    description: description,

    openGraph: {
      title: title,
      description: description,
      url: `${siteLink}/convert/${from}-to-${to}`,
      // Note: You may need a separate strategy for images if they are highly specific
      images: ["/eps-logo-easy-pixel-shift.jpeg"],
    },

    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/eps-logo-easy-pixel-shift.jpeg"],
    },

    keywords: keywords,
  };
};

export const baseFileMetadataTemplate = (
  from: string,
  to: string
): Metadata => {
  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();

  // --- Start Dynamic Content Definitions ---
  let titleTemplate = "{{FROM}} to {{TO}} Converter Online: Free & Fast";
  let descriptionTemplate =
    "Convert your {{FROM}} files to {{TO}} format quickly and easily. High-quality conversion, free to use.";

  // --- Custom Logic for Target Formats (for better SEO specificity) ---

  if (toLower === "docx" || toLower === "doc") {
    titleTemplate = "{{FROM}} to DOCX Converter: Editable Word Document Online";
    descriptionTemplate =
      "Convert {{FROM}} files to a fully formatted, **editable Microsoft Word (DOCX)** document without losing layout. Free online tool.";
  } else if (toLower === "pdf") {
    titleTemplate =
      "{{FROM}} to PDF Converter: Professional & Printable Documents";
    descriptionTemplate =
      "Convert {{FROM}} files to a professional, universally compatible **PDF** document. Perfect for archiving and printing.";
  } else if (toLower === "html") {
    titleTemplate = "{{FROM}} to HTML Converter: Web-Ready, Clean Code Output";
    descriptionTemplate =
      "Convert {{FROM}} files to **clean, semantic HTML code** for web publishing. Free, fast, and easy embedding.";
  } else if (toLower === "txt") {
    titleTemplate = "{{FROM}} to TXT Converter: Extract Plain Text Easily";
    descriptionTemplate =
      "Convert {{FROM}} files to a simple **plain text (TXT)** format. Ideal for data extraction and basic editing.";
  }

  // --- Apply Placeholders ---
  const title = replacePlaceholders(titleTemplate, from, to);
  const description = replacePlaceholders(descriptionTemplate, from, to);

  const keywordsTemplate = [
    "{{from}} to {{to}} converter",
    "convert {{from}} to {{to}}",
    "online {{from}} to {{to}}",
    "free {{from}} to {{to}} tool",
    // Add a generic keyword for the file type
    `${toLower} converter online`,
  ].join(", ");

  const keywords = replacePlaceholders(keywordsTemplate, from, to).split(", ");

  return {
    title: title,
    description: description,

    openGraph: {
      title: title,
      description: description,
      url: `${siteLink}+/+${fromLower}-to-${toLower}`,
      images: ["/eps-logo-easy-pixel-shift.jpeg"],
    },

    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/eps-logo-easy-pixel-shift.jpeg"],
    },

    keywords: keywords,
  };
};
