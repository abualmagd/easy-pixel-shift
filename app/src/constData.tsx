export const FORMAT_DEFINITIONS = {
  // --- IMAGE FORMATS ---
  JPG: "Joint Photographic Experts Group; a lossy compression standard ideal for photographs and web images due to its small file size.",
  JPEG: "The same as JPG; a standard image format used widely in digital photography and online content.",
  PNG: "Portable Network Graphics; a lossless format that supports transparency, ideal for logos and high-quality web graphics.",
  SVG: "Scalable Vector Graphics; an XML-based vector format that remains sharp at any size, perfect for icons and illustrations.",
  WEBP: "A modern image format from Google providing superior lossless and lossy compression for faster web performance.",
  ICO: "Microsoft Icon format; used for Windows icons and website favicons, containing multiple sizes in one file.",
  GIF: "Graphics Interchange Format; supports both static and animated images using a 256-color palette.",

  // --- VIDEO FORMATS ---
  MP4: "MPEG-4 Part 14; a digital multimedia container format most commonly used to store video, audio, and subtitles.",
  WEBM: "An open, royalty-free media file format designed for the web, offering high quality with smaller file sizes.",
  MOV: "Apple's QuickTime Movie format; a high-quality video container used frequently in professional video editing.",
  MKV: "Matroska Multimedia Container; an open-standard format that can hold unlimited tracks of video, audio, and subtitles in one file.",

  // --- AUDIO FORMATS ---
  MP3: "MPEG-1 Audio Layer III; the most popular compressed audio format, offering a balance between file size and sound quality.",
  WAV: "Waveform Audio File Format; a standard for storing uncompressed, high-quality audio, primarily used on Windows systems.",
  FLAC: "Free Lossless Audio Codec; provides bit-perfect copies of audio at a smaller size than WAV without any quality loss.",
  OGG: "Ogg Vorbis; an open-source, compressed audio format designed to provide high-quality sound at smaller bitrates.",
  AAC: "Advanced Audio Coding; designed to be the successor to MP3, offering better sound quality at the same bit rate.",
  ADTS: "Audio Data Transport Stream; a container format for AAC audio data, commonly used for streaming.",

  // --- DOCUMENT FORMATS ---
  PDF: "Portable Document Format; preserves layout, fonts, and images across all platforms, used for secure document sharing.",
  HTML: "HyperText Markup Language; the standard code used to structure and display web pages in a browser.",
  TXT: "Plain Text; a basic file containing only unformatted characters with no styling or embedded media.",
  DOCX: "Microsoft Word Open XML; the standard editable document format for modern word processing software.",
};

export type FormatKey = keyof typeof FORMAT_DEFINITIONS;
