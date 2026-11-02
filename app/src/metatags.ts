import type { Metadata } from "next";
import { siteLink } from "./const";

const replacePlaceholders = (template: string, from: string, to: string) =>
  template
    .replace(/{{FROM}}/g, from.toUpperCase())
    .replace(/{{from}}/g, from.toLowerCase())
    .replace(/{{TO}}/g, to.toUpperCase())
    .replace(/{{to}}/g, to.toLowerCase());

const socialImage = `${siteLink}/eps-logo-easy-pixel-shift.jpeg`;

export const baseMetadataTemplate = (from: string, to: string): Metadata => {
  const title = `Convert {{FROM}} to {{TO}} Online | Easy Pixel Shift`;
  const description =
    "Convert {{FROM}} images to {{TO}} in your browser. Choose a file, download the result, and review format-specific notes about quality and transparency.";

  const resolvedTitle = replacePlaceholders(title, from, to);
  const resolvedDescription = replacePlaceholders(description, from, to);
  const canonical = `${siteLink}/image/${from.toLowerCase()}-to-${to.toLowerCase()}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: { canonical },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [socialImage],
    },
  };
};

export const baseFileMetadataTemplate = (
  from: string,
  to: string
): Metadata => {
  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();

  let title = "{{FROM}} to {{TO}} Converter Online | Easy Pixel Shift";
  let description =
    "Convert {{FROM}} files to {{TO}} in your browser. Review the result before using it for sharing, editing, or printing.";

  if (toLower === "docx" || toLower === "doc") {
    title = "{{FROM}} to DOCX Converter | Easy Pixel Shift";
    description =
      "Convert a {{FROM}} document to DOCX. Download the result and review its layout and formatting in your word processor.";
  } else if (toLower === "pdf") {
    title = "{{FROM}} to PDF Converter | Easy Pixel Shift";
    description =
      "Convert {{FROM}} files to PDF for sharing or printing. Check page layout, fonts, and formatting after conversion.";
  } else if (toLower === "html") {
    title = "{{FROM}} to HTML Converter | Easy Pixel Shift";
    description =
      "Convert {{FROM}} content to HTML and review the generated markup before publishing it on a website.";
  } else if (toLower === "txt") {
    title = "{{FROM}} to TXT Converter | Easy Pixel Shift";
    description =
      "Convert {{FROM}} content to plain text. Formatting, images, and page layout may not be retained in a TXT file.";
  }

  const resolvedTitle = replacePlaceholders(title, from, to);
  const resolvedDescription = replacePlaceholders(description, from, to);
  const canonical = `${siteLink}/convert/${fromLower}-to-${toLower}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: { canonical },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [socialImage],
    },
  };
};

export const mediaMetadataTemplate = (from: string, to: string): Metadata => {
  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();
  const title = `Convert {{FROM}} to {{TO}} Online | Easy Pixel Shift`;
  const description =
    "Convert {{FROM}} media to {{TO}} with the browser-based media tool. Conversion support and output quality depend on the selected formats and your device.";

  const resolvedTitle = replacePlaceholders(title, from, to);
  const resolvedDescription = replacePlaceholders(description, from, to);
  const canonical = `${siteLink}/media/${fromLower}-to-${toLower}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: { canonical },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [socialImage],
    },
  };
};
