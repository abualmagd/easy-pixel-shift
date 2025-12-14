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

export const mediaMetadataTemplate = (from: string, to: string): Metadata => {
  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();

  // Helper function to replace placeholders (assuming it exists in scope)
  const replacePlaceholders = (template: string, from: string, to: string) => {
    return template
      .replace(/{{FROM}}/g, from.toUpperCase())
      .replace(/{{TO}}/g, to.toUpperCase())
      .replace(/{{from}}/g, from.toLowerCase())
      .replace(/{{to}}/g, to.toLowerCase());
  };

  // --- Start Dynamic Content Definitions ---
  let titleTemplate =
    "{{FROM}} to {{TO}} Converter Online: Free Video/Audio Tool";
  let descriptionTemplate =
    "Convert your {{FROM}} media files to {{TO}} format quickly and easily. High-quality and fast conversion, free to use online.";

  // Define Media Formats for better targeting in logic
  const videoFormats = ["mp4", "webm", "mov", "mkv"];
  const audioFormats = ["mp3", "wav", "ogg", "flac", "adts"];

  // --- Custom Logic for Target Media Formats ---

  if (videoFormats.includes(fromLower) && audioFormats.includes(toLower)) {
    // Logic for Video-to-Audio Extraction (e.g., MP4 to MP3)
    titleTemplate =
      "Extract Audio: {{FROM}} to {{TO}} Converter (Video to Audio)";
    descriptionTemplate =
      "**Extract high-quality audio** from your video file. Convert **{{FROM}} video to a {{TO}} audio file** easily online. Fast and secure audio extraction.";
  } else if (toLower === "mp4") {
    // Logic for converting TO the universal MP4 format
    titleTemplate = "{{FROM}} to MP4 Converter: Universal Video Format";
    descriptionTemplate =
      "Convert your media to the highly compatible **MP4 format**. Ensure your {{FROM}} file plays on all devices and streaming platforms.";
  } else if (toLower === "mp3") {
    // Logic for converting TO the universal MP3 format
    titleTemplate = "{{FROM}} to MP3 Converter: Universal Audio Format";
    descriptionTemplate =
      "Convert your audio or video to the universally supported **MP3 format**. Ideal for music and podcast downloads.";
  } else if (toLower === "flac") {
    // Logic for converting TO the lossless FLAC format
    titleTemplate = "{{FROM}} to FLAC Converter: Lossless Audio Quality";
    descriptionTemplate =
      "Convert your audio to the **FLAC lossless format** for zero quality loss. Perfect for archiving and high-fidelity listening.";
  } else if (toLower === "mkv") {
    // Logic for converting TO the flexible MKV container
    titleTemplate = "{{FROM}} to MKV Converter: Multi-Track Video Container";
    descriptionTemplate =
      "Convert your video to the flexible **MKV container format**. Ideal for multiple audio tracks and subtitles.";
  }

  // --- Apply Placeholders ---
  const title = replacePlaceholders(titleTemplate, from, to);
  const description = replacePlaceholders(descriptionTemplate, from, to);

  // --- Define Keywords ---
  const keywordsTemplate = [
    "{{from}} to {{to}} converter",
    "convert {{from}} to {{to}}",
    "online {{from}} to {{to}}",
    "free {{from}} to {{to}} tool",
    // Generic keyword for the output type
    `${toLower} converter online`,
    // Specific keywords based on conversion type
    ...(videoFormats.includes(fromLower) && videoFormats.includes(toLower)
      ? ["video converter online", "media conversion"]
      : []),
    ...(videoFormats.includes(fromLower) && audioFormats.includes(toLower)
      ? ["video to audio converter", "extract audio from video"]
      : []),
    // Add common formats being converted
    "mp4",
    "mov",
    "webm",
    "mkv",
    "mp3",
    "wav",
    "flac",
  ].join(", ");

  const keywords = replacePlaceholders(keywordsTemplate, from, to).split(", ");

  return {
    title: title,
    description: description,

    // OpenGraph and Twitter use the generated title and description
    openGraph: {
      title: title,
      description: description,
      url: `${siteLink}+/${fromLower}-to-${toLower}`,
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
