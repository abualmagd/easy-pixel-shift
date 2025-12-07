import type { Metadata } from "next";

interface ConversionMetadata {
  link: string;
  metadata: Metadata;
}

export const conversionMetaDataList: ConversionMetadata[] = [
  // 1. JPG Conversions
  {
    link: "/jpg-to-png",
    metadata: {
      title: "JPG to PNG Converter Online: High Quality & Free Tool",
      description:
        "Convert your JPG and JPEG images to high-quality PNG format easily and quickly. Preserve transparency, free to use.",
      openGraph: {
        title: "JPG to PNG Converter Online: High Quality & Free Tool",
        description:
          "Convert your JPG and JPEG images to high-quality PNG format easily and quickly.",
        url: "https://yourdomain.com/jpg-to-png",
        images: [{ url: "/og/jpg-to-png.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "JPG to PNG Converter Online",
        description:
          "Convert JPG to PNG quickly. Preserve quality and transparency.",
        images: ["/og/jpg-to-png.jpg"],
      },
      keywords: [
        "jpg to png converter",
        "convert jpeg to png",
        "online jpg to png",
        "free image converter",
      ],
    },
  },
  {
    link: "/jpg-to-svg",
    metadata: {
      title: "Convert JPG to SVG Vector Online: Raster to Vector",
      description:
        "Quickly convert raster JPG/JPEG images to scalable vector SVG format. Ideal for logos, icons, and high-resolution printing. Free and fast.",
      openGraph: {
        title: "Convert JPG to SVG Vector Online: Raster to Vector",
        description:
          "Convert raster JPG to scalable vector SVG format for high-resolution graphics.",
        url: "https://yourdomain.com/jpg-to-svg",
        images: [{ url: "/og/jpg-to-svg.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "JPG to SVG Converter",
        description:
          "Convert raster JPG to SVG vector format for crisp, scalable logos and graphics.",
        images: ["/og/jpg-to-svg.jpg"],
      },
      keywords: [
        "jpg to svg converter",
        "convert jpg to vector",
        "online raster to vector",
        "jpeg to svg",
      ],
    },
  },
  {
    link: "/jpg-to-webp",
    metadata: {
      title: "JPG to WebP Converter: Reduce Image Size for Web Speed",
      description:
        "Optimize your website by converting JPG/JPEG images to the modern, efficient WebP format. Achieve smaller file sizes and faster page loading.",
      openGraph: {
        title: "JPG to WebP Converter: Reduce Image Size for Web Speed",
        description:
          "Convert JPG to WebP for smaller file sizes and better web performance. Free optimization tool.",
        url: "https://yourdomain.com/jpg-to-webp",
        images: [{ url: "/og/jpg-to-webp.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "JPG to WebP for Optimization",
        description:
          "Fast JPG to WebP conversion to improve your website's speed.",
        images: ["/og/jpg-to-webp.jpg"],
      },
      keywords: [
        "jpg to webp converter",
        "convert jpg to webp",
        "webp optimizer",
        "jpeg to webp",
      ],
    },
  },
  {
    link: "/jpg-to-ico",
    metadata: {
      title: "JPG to ICO Converter: Create Favicons Online for Free",
      description:
        "Turn any JPG or JPEG image into a perfect ICO file for website favicons. Supports multiple resolutions and transparency options. Fast and easy.",
      openGraph: {
        title: "JPG to ICO Converter: Create Favicons Online for Free",
        description:
          "Easily turn your JPG into a multi-size ICO favicon file for your website.",
        url: "https://yourdomain.com/jpg-to-ico",
        images: [{ url: "/og/jpg-to-ico.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "JPG to ICO Favicon Tool",
        description: "Create high-quality ICO files from JPG images instantly.",
        images: ["/og/jpg-to-ico.jpg"],
      },
      keywords: [
        "jpg to ico converter",
        "convert jpg to favicon",
        "online ico generator",
        "jpeg to ico",
      ],
    },
  },

  // 2. PNG Conversions
  {
    link: "/png-to-jpg",
    metadata: {
      title: "PNG to JPG Converter: Compress & Optimize Images Online",
      description:
        "Convert transparent PNG files to optimized, smaller JPG/JPEG format for web sharing and storage. Fast, free, and efficient conversion.",
      openGraph: {
        title: "PNG to JPG Converter: Compress & Optimize Images Online",
        description:
          "Convert transparent PNG files to compressed JPG/JPEG format quickly.",
        url: "https://yourdomain.com/png-to-jpg",
        images: [{ url: "/og/png-to-jpg.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "PNG to JPG for Smaller Files",
        description:
          "Convert PNG to JPG to reduce image file size without losing quality.",
        images: ["/og/png-to-jpg.jpg"],
      },
      keywords: [
        "png to jpg converter",
        "convert png to jpeg",
        "online png to jpg",
        "reduce png size",
      ],
    },
  },
  {
    link: "/png-to-svg",
    metadata: {
      title: "Convert PNG to SVG Vector Online: Image Trace Tool",
      description:
        "Vectorize PNG raster graphics to SVG format for infinite scaling without quality loss. Perfect for logos and design assets. Free image tracing.",
      openGraph: {
        title: "Convert PNG to SVG Vector Online: Image Trace Tool",
        description:
          "Vectorize your PNG image to SVG format for scalable graphics, ideal for web and print.",
        url: "https://yourdomain.com/png-to-svg",
        images: [{ url: "/og/png-to-svg.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "PNG to SVG Vectorizer",
        description:
          "Convert raster PNGs to SVG vector files for high-quality, scalable output.",
        images: ["/og/png-to-svg.jpg"],
      },
      keywords: [
        "png to svg converter",
        "convert png to vector",
        "png to svg online",
        "image trace tool",
      ],
    },
  },
  {
    link: "/png-to-webp",
    metadata: {
      title: "PNG to WebP Converter: Maintain Transparency, Save Space",
      description:
        "Convert bulky PNG files into smaller, next-gen WebP images while perfectly maintaining transparency (alpha channel). Boost website speed.",
      openGraph: {
        title: "PNG to WebP Converter: Maintain Transparency, Save Space",
        description:
          "Convert PNG to WebP to save bandwidth while keeping full transparency support.",
        url: "https://yourdomain.com/png-to-webp",
        images: [{ url: "/og/png-to-webp.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "PNG to WebP Converter",
        description:
          "Convert PNG to WebP quickly to optimize your website images.",
        images: ["/og/png-to-webp.jpg"],
      },
      keywords: [
        "png to webp converter",
        "convert png to webp",
        "webp with transparency",
        "png optimizer",
      ],
    },
  },
  {
    link: "/png-to-ico",
    metadata: {
      title: "PNG to ICO Converter: Create Transparent Favicons",
      description:
        "Easily convert your PNG with transparency into an ICO file for use as a favicon or Windows icon. Supports custom sizes and multi-resolution output.",
      openGraph: {
        title: "PNG to ICO Converter: Create Transparent Favicons",
        description:
          "Convert PNG to ICO to create a perfect, transparent favicon for your website or application.",
        url: "https://yourdomain.com/png-to-ico",
        images: [{ url: "/og/png-to-ico.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "PNG to ICO Favicon Tool",
        description:
          "Free PNG to ICO converter with transparency support and multi-size output.",
        images: ["/og/png-to-ico.jpg"],
      },
      keywords: [
        "png to ico converter",
        "convert png to favicon",
        "online png to ico",
        "transparent ico generator",
      ],
    },
  },

  // 3. SVG Conversions
  {
    link: "/svg-to-jpeg",
    metadata: {
      title: "SVG to JPEG Converter: Rasterize Vector to JPG Image",
      description:
        "Convert scalable vector SVG files to standard raster JPG/JPEG format for easy sharing, printing, and compatibility. Specify output resolution.",
      openGraph: {
        title: "SVG to JPEG Converter: Rasterize Vector to JPG Image",
        description:
          "Rasterize vector SVG to high-quality JPG/JPEG images for universal compatibility and printing.",
        url: "https://yourdomain.com/svg-to-jpeg",
        images: [{ url: "/og/svg-to-jpeg.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "SVG to JPG Rasterizer",
        description:
          "Convert SVG to JPG/JPEG with custom resolution settings for high-quality raster output.",
        images: ["/og/svg-to-jpeg.jpg"],
      },
      keywords: [
        "svg to jpeg converter",
        "convert svg to jpg",
        "rasterize svg to jpg",
        "svg to jpeg online",
      ],
    },
  },
  {
    link: "/svg-to-png",
    metadata: {
      title: "SVG to PNG Converter: Vector to Raster with Transparency",
      description:
        "Rasterize your SVG files into high-resolution PNG format. Supports alpha transparency for backgrounds and customizable output size. Free tool.",
      openGraph: {
        title: "SVG to PNG Converter: Vector to Raster with Transparency",
        description:
          "Convert SVG vector files to PNG raster, preserving transparency and allowing custom sizing.",
        url: "https://yourdomain.com/svg-to-png",
        images: [{ url: "/og/svg-to-png.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "SVG to PNG Converter",
        description:
          "Fast and free SVG to PNG conversion tool supporting full transparency.",
        images: ["/og/svg-to-png.jpg"],
      },
      keywords: [
        "svg to png converter",
        "convert svg to png",
        "rasterize svg online",
        "vector to png",
      ],
    },
  },
  {
    link: "/svg-to-webp",
    metadata: {
      title: "SVG to WebP Converter: Optimize Vector for Web Speed",
      description:
        "Convert SVG vector files into the highly efficient WebP format for improved website loading performance. Free, fast, and secure conversion tool.",
      openGraph: {
        title: "SVG to WebP Converter: Optimize Vector for Web Speed",
        description:
          "Convert SVG to WebP to rasterize and optimize vector images for high web speed and performance.",
        url: "https://yourdomain.com/svg-to-webp",
        images: [{ url: "/og/svg-to-webp.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "SVG to WebP Optimization",
        description:
          "Optimize SVG files by converting to WebP for faster web page loading.",
        images: ["/og/svg-to-webp.jpg"],
      },
      keywords: [
        "svg to webp converter",
        "convert svg to webp",
        "optimize svg for web",
        "vector to webp",
      ],
    },
  },
  {
    link: "/svg-to-ico",
    metadata: {
      title: "Convert SVG to ICO Online: High-Quality Vector Favicons",
      description:
        "Turn your vector SVG logo or icon into a crisp ICO file for favicons, preserving quality at any resolution. Free ICO generation tool.",
      openGraph: {
        title: "Convert SVG to ICO Online: High-Quality Vector Favicons",
        description:
          "Generate high-quality ICO favicons from your SVG vector files quickly and easily.",
        url: "https://yourdomain.com/svg-to-ico",
        images: [{ url: "/og/svg-to-ico.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "SVG to ICO Favicon Maker",
        description: "Convert SVG to ICO for perfect favicons on all browsers.",
        images: ["/og/svg-to-ico.jpg"],
      },
      keywords: [
        "svg to ico converter",
        "convert svg to favicon",
        "svg to ico online",
        "favicon generator",
      ],
    },
  },

  // 4. WebP Conversions
  {
    link: "/webp-to-jpg",
    metadata: {
      title: "WebP to JPG Converter Online: Best Compatibility Tool",
      description:
        "Convert WebP images back to universally supported JPG/JPEG format. Ideal for editing, sharing, and legacy systems. Free, high-quality conversion.",
      openGraph: {
        title: "WebP to JPG Converter Online: Best Compatibility Tool",
        description:
          "Convert WebP images to JPG/JPEG format for maximum compatibility and easy sharing.",
        url: "https://yourdomain.com/webp-to-jpg",
        images: [{ url: "/og/webp-to-jpg.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "WebP to JPG Compatibility",
        description:
          "Fast and easy WebP to JPG converter for universal image compatibility.",
        images: ["/og/webp-to-jpg.jpg"],
      },
      keywords: [
        "webp to jpg converter",
        "convert webp to jpg",
        "webp to jpeg online",
        "image format compatibility",
      ],
    },
  },
  {
    link: "/webp-to-png",
    metadata: {
      title: "WebP to PNG Converter: Preserve Transparency & Quality",
      description:
        "Convert WebP files to PNG format to maintain transparency (alpha channel) and maximum image quality for editing or design work. Free tool.",
      openGraph: {
        title: "WebP to PNG Converter: Preserve Transparency & Quality",
        description:
          "Convert WebP to PNG to maintain transparency and image quality for design and editing.",
        url: "https://yourdomain.com/webp-to-png",
        images: [{ url: "/og/webp-to-png.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "WebP to PNG Converter",
        description:
          "Convert WebP to PNG quickly, preserving the transparency layer perfectly.",
        images: ["/og/webp-to-png.jpg"],
      },
      keywords: [
        "webp to png converter",
        "convert webp to png",
        "webp transparency to png",
        "online webp to png",
      ],
    },
  },
  {
    link: "/webp-to-svg",
    metadata: {
      title: "WebP to SVG Converter: Trace Raster Image to Vector",
      description:
        "Use our tool to trace your WebP raster image and convert it into a scalable SVG vector format. Perfect for graphic design and development.",
      openGraph: {
        title: "WebP to SVG Converter: Trace Raster Image to Vector",
        description:
          "Convert WebP files to SVG vector graphics using our free image tracing tool.",
        url: "https://yourdomain.com/webp-to-svg",
        images: [{ url: "/og/webp-to-svg.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "WebP to SVG Vectorizer",
        description:
          "Convert WebP raster images to scalable SVG vector files for high-quality use.",
        images: ["/og/webp-to-svg.jpg"],
      },
      keywords: [
        "webp to svg converter",
        "convert webp to svg",
        "webp to vector online",
        "webp image trace",
      ],
    },
  },
  {
    link: "/webp-to-ico",
    metadata: {
      title: "WebP to ICO Converter: Favicon Generator Online",
      description:
        "Create an ICO file from your WebP image for use as a website favicon. Supports correct sizing and efficient, free conversion.",
      openGraph: {
        title: "WebP to ICO Converter: Favicon Generator Online",
        description:
          "Convert WebP to ICO to create a favicon for your website quickly and easily.",
        url: "https://yourdomain.com/webp-to-ico",
        images: [{ url: "/og/webp-to-ico.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "WebP to ICO Favicon Tool",
        description:
          "Fast WebP to ICO conversion tool for modern favicon generation.",
        images: ["/og/webp-to-ico.jpg"],
      },
      keywords: [
        "webp to ico converter",
        "convert webp to ico",
        "webp favicon generator",
        "online webp to ico",
      ],
    },
  },

  // 5. ICO Conversions
  {
    link: "/ico-to-jpg",
    metadata: {
      title: "ICO to JPG Converter Online: Extract Icon to Standard Image",
      description:
        "Convert small ICO files (favicons) into standard, viewable JPG/JPEG images for easy viewing, sharing, or editing. Free online tool.",
      openGraph: {
        title: "ICO to JPG Converter Online: Extract Icon to Standard Image",
        description:
          "Convert ICO files to standard JPG/JPEG images for easy viewing and compatibility.",
        url: "https://yourdomain.com/ico-to-jpg",
        images: [{ url: "/og/ico-to-jpg.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "ICO to JPG Converter",
        description:
          "Quickly convert ICO favicons into high-quality JPG images for free.",
        images: ["/og/ico-to-jpg.jpg"],
      },
      keywords: [
        "ico to jpg converter",
        "convert ico to jpg",
        "ico to jpeg online",
        "extract ico image",
      ],
    },
  },
  {
    link: "/ico-to-png",
    metadata: {
      title: "ICO to PNG Converter: Extract PNG Layers from Icon File",
      description:
        "Convert ICO icons into PNG format, extracting all embedded images and preserving transparency for easier editing and design work. Free tool.",
      openGraph: {
        title: "ICO to PNG Converter: Extract PNG Layers from Icon File",
        description:
          "Convert ICO files to PNG format, preserving transparency and extracting all icon sizes.",
        url: "https://yourdomain.com/ico-to-png",
        images: [{ url: "/og/ico-to-png.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "ICO to PNG Extractor",
        description:
          "Extract PNG layers from ICO icons, keeping transparency intact.",
        images: ["/og/ico-to-png.jpg"],
      },
      keywords: [
        "ico to png converter",
        "convert ico to png",
        "ico to png online",
        "extract icon image",
      ],
    },
  },
  {
    link: "/ico-to-svg",
    metadata: {
      title: "ICO to SVG Converter: Vectorize Icon Online",
      description:
        "Convert your ICO file into a scalable SVG vector format. Ideal for high-resolution displays and modern web design with no quality loss.",
      openGraph: {
        title: "ICO to SVG Converter: Vectorize Icon Online",
        description:
          "Vectorize ICO files to SVG format for scalable, high-quality icon usage.",
        url: "https://yourdomain.com/ico-to-svg",
        images: [{ url: "/og/ico-to-svg.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "ICO to SVG Vectorizer",
        description:
          "Convert ICO icons to SVG vector graphics quickly and easily.",
        images: ["/og/ico-to-svg.jpg"],
      },
      keywords: [
        "ico to svg converter",
        "convert ico to svg",
        "ico to vector online",
        "icon to svg",
      ],
    },
  },
  {
    link: "/ico-to-webp",
    metadata: {
      title: "ICO to WebP Converter: Modernize Your Icons for Web",
      description:
        "Convert ICO icons to the modern and efficient WebP format for fast-loading web use. Improve performance and reduce file size instantly.",
      openGraph: {
        title: "ICO to WebP Converter: Modernize Your Icons for Web",
        description:
          "Convert ICO icons to the efficient WebP format for faster web performance and smaller file sizes.",
        url: "https://yourdomain.com/ico-to-webp",
        images: [{ url: "/og/ico-to-webp.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "ICO to WebP Converter",
        description:
          "Fast and free ICO to WebP conversion for optimized web icons.",
        images: ["/og/ico-to-webp.jpg"],
      },
      keywords: [
        "ico to webp converter",
        "convert ico to webp",
        "online ico to webp",
        "optimize ico",
      ],
    },
  },

  {
    link: "/pdf-to-html",
    metadata: {
      title: "PDF to HTML Converter Online: Web-Ready, Clean Code",
      description:
        "Convert PDF documents to clean, semantic HTML format for web publishing and SEO. Preserve layout and easily embed on your site. Free and fast.",
      openGraph: {
        title: "PDF to HTML Converter Online: Web-Ready, Clean Code",
        description:
          "Convert PDF to HTML accurately for web publishing. Free, online tool.",
        url: "https://yourdomain.com/pdf-to-html",
        images: [{ url: "/og/pdf-to-html.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "PDF to HTML Converter",
        description:
          "Free online tool to convert PDF files to clean, web-ready HTML code.",
        images: ["/og/pdf-to-html.jpg"],
      },
      keywords: [
        "pdf to html converter",
        "convert pdf to html",
        "pdf to webpage",
        "pdf to html online",
        "clean html output",
      ],
    },
  },
  {
    link: "/pdf-to-txt",
    metadata: {
      title: "PDF to TXT Converter: Extract Plain Text from PDF Files",
      description:
        "Extract text from PDF to a simple TXT file format. Great for data extraction, editing, and archiving. High accuracy and free to use.",
      openGraph: {
        title: "PDF to TXT Converter: Extract Plain Text from PDF Files",
        description:
          "Quickly convert PDF to TXT to extract all plain text content for easy use.",
        url: "https://yourdomain.com/pdf-to-txt",
        images: [{ url: "/og/pdf-to-txt.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "PDF to TXT Extractor",
        description:
          "Convert PDF to TXT (plain text) for data extraction and editing.",
        images: ["/og/pdf-to-txt.jpg"],
      },
      keywords: [
        "pdf to txt converter",
        "extract text from pdf",
        "convert pdf to plain text",
        "pdf to txt online",
      ],
    },
  },
  {
    link: "/pdf-to-docx",
    metadata: {
      title: "PDF to DOCX Converter: Editable Word Document Online",
      description:
        "Convert PDF to DOCX (Microsoft Word) format without losing formatting. Create perfectly editable documents for free. High-quality conversion.",
      openGraph: {
        title: "PDF to DOCX Converter: Editable Word Document Online",
        description:
          "Convert PDF to editable DOCX (Word) format accurately online and for free.",
        url: "https://yourdomain.com/pdf-to-docx",
        images: [{ url: "/og/pdf-to-docx.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "PDF to DOCX Converter",
        description:
          "The best tool to convert PDF to an editable Microsoft Word DOCX document.",
        images: ["/og/pdf-to-docx.jpg"],
      },
      keywords: [
        "pdf to docx converter",
        "convert pdf to word",
        "pdf to editable docx",
        "pdf to word online",
      ],
    },
  },

  // --- HTML Conversions ---
  {
    link: "/html-to-pdf",
    metadata: {
      title: "HTML to PDF Converter: Save Webpages as PDF Online",
      description:
        "Convert HTML files or web pages to high-quality PDF documents. Perfect for archiving, printing, and sharing. Preserves formatting and links.",
      openGraph: {
        title: "HTML to PDF Converter: Save Webpages as PDF Online",
        description:
          "Save HTML pages or files as high-quality, print-ready PDF documents for free.",
        url: "https://yourdomain.com/html-to-pdf",
        images: [{ url: "/og/html-to-pdf.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "HTML to PDF Converter",
        description:
          "Convert HTML code or entire webpages into a perfect PDF file.",
        images: ["/og/html-to-pdf.jpg"],
      },
      keywords: [
        "html to pdf converter",
        "convert html to pdf",
        "save webpage as pdf",
        "html to pdf online",
      ],
    },
  },
  {
    link: "/html-to-txt",
    metadata: {
      title: "HTML to TXT Converter: Extract Clean Text from Code",
      description:
        "Quickly strip all HTML tags and attributes to extract clean, plain text (TXT) from any HTML file or code snippet. Free and secure extraction.",
      openGraph: {
        title: "HTML to TXT Converter: Extract Clean Text from Code",
        description:
          "Extract clean, pure plain text from HTML, removing all code and tags.",
        url: "https://yourdomain.com/html-to-txt",
        images: [{ url: "/og/html-to-txt.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "HTML to TXT Extractor",
        description:
          "Convert HTML to TXT: strip tags and get clean text instantly.",
        images: ["/og/html-to-txt.jpg"],
      },
      keywords: [
        "html to txt converter",
        "convert html to plain text",
        "strip html tags",
        "html to txt online",
      ],
    },
  },
  {
    link: "/html-to-docx",
    metadata: {
      title: "HTML to DOCX Converter: Web Content to Word Document",
      description:
        "Convert structured HTML content into a formatted, editable DOCX (Microsoft Word) document. Ideal for drafting and offline editing. Free tool.",
      openGraph: {
        title: "HTML to DOCX Converter: Web Content to Word Document",
        description:
          "Convert HTML code or files directly into a perfectly formatted DOCX Word document.",
        url: "https://yourdomain.com/html-to-docx",
        images: [{ url: "/og/html-to-docx.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "HTML to DOCX Converter",
        description:
          "Free tool to convert HTML content into an editable Microsoft Word DOCX file.",
        images: ["/og/html-to-docx.jpg"],
      },
      keywords: [
        "html to docx converter",
        "convert html to word",
        "html to editable docx",
        "html to word online",
      ],
    },
  },

  // --- TXT Conversions ---
  {
    link: "/txt-to-pdf",
    metadata: {
      title: "TXT to PDF Converter: Convert Plain Text to PDF Document",
      description:
        "Convert simple TXT (plain text) files into a professional, printable PDF document. Control font and page size settings. Free and fast.",
      openGraph: {
        title: "TXT to PDF Converter: Convert Plain Text to PDF Document",
        description:
          "Convert TXT plain text files into a clean, printable PDF document.",
        url: "https://yourdomain.com/txt-to-pdf",
        images: [{ url: "/og/txt-to-pdf.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "TXT to PDF Maker",
        description:
          "Quickly convert TXT files to PDF format for easy printing and sharing.",
        images: ["/og/txt-to-pdf.jpg"],
      },
      keywords: [
        "txt to pdf converter",
        "convert text to pdf",
        "plain text to pdf",
        "txt to pdf online",
      ],
    },
  },
  {
    link: "/txt-to-html",
    metadata: {
      title: "TXT to HTML Converter: Plain Text to Web Format",
      description:
        "Convert plain TXT files into structured HTML, adding essential tags like `<p>` and `<br>` for web display. Free and easy conversion for publishing.",
      openGraph: {
        title: "TXT to HTML Converter: Plain Text to Web Format",
        description:
          "Convert TXT text files to basic HTML structure for web publishing.",
        url: "https://yourdomain.com/txt-to-html",
        images: [{ url: "/og/txt-to-html.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "TXT to HTML Converter",
        description:
          "Fast conversion of plain TXT files into web-friendly HTML format.",
        images: ["/og/txt-to-html.jpg"],
      },
      keywords: [
        "txt to html converter",
        "convert text to html",
        "plain text to html",
        "txt to html online",
      ],
    },
  },
  {
    link: "/txt-to-docx",
    metadata: {
      title: "TXT to DOCX Converter: Simple Text to Word Document",
      description:
        "Convert simple TXT files into a fully formatted, editable DOCX (Microsoft Word) document. Perfect for adding rich text and images later. Free tool.",
      openGraph: {
        title: "TXT to DOCX Converter: Simple Text to Word Document",
        description:
          "Convert TXT plain text to an editable DOCX Word document with formatting options.",
        url: "https://yourdomain.com/txt-to-docx",
        images: [{ url: "/og/txt-to-docx.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "TXT to DOCX Converter",
        description:
          "Free online tool to convert TXT files into Microsoft Word DOCX format.",
        images: ["/og/txt-to-docx.jpg"],
      },
      keywords: [
        "txt to docx converter",
        "convert text to docx",
        "txt to word document",
        "txt to docx online",
      ],
    },
  },

  // --- DOCX Conversions ---
  {
    link: "/docx-to-pdf",
    metadata: {
      title: "DOCX to PDF Converter: Word to PDF with Original Formatting",
      description:
        "Convert your DOCX (Microsoft Word) files to secure, universally compatible PDF format. Preserve original layout, images, and fonts perfectly. Free online tool.",
      openGraph: {
        title: "DOCX to PDF Converter: Word to PDF with Original Formatting",
        description:
          "Convert DOCX (Word) to PDF documents with perfect formatting preservation.",
        url: "https://yourdomain.com/docx-to-pdf",
        images: [{ url: "/og/docx-to-pdf.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "DOCX to PDF Converter",
        description:
          "Fast, free, and accurate conversion from DOCX to PDF, preserving all details.",
        images: ["/og/docx-to-pdf.jpg"],
      },
      keywords: [
        "docx to pdf converter",
        "convert docx to pdf",
        "word to pdf online",
        "microsoft word to pdf",
      ],
    },
  },
  {
    link: "/docx-to-html",
    metadata: {
      title: "DOCX to HTML Converter: Word Document to Web Format",
      description:
        "Convert DOCX (Word) documents to clean, structured HTML code for easy web integration. Great for CMS publishing and blog posts. Free tool.",
      openGraph: {
        title: "DOCX to HTML Converter: Word Document to Web Format",
        description:
          "Convert DOCX Word documents to clean, semantic HTML code for publishing online.",
        url: "https://yourdomain.com/docx-to-html",
        images: [{ url: "/og/docx-to-html.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "DOCX to HTML Converter",
        description:
          "Free online tool to convert Word DOCX files into web-friendly HTML.",
        images: ["/og/docx-to-html.jpg"],
      },
      keywords: [
        "docx to html converter",
        "convert docx to html",
        "word to html online",
        "clean html output",
      ],
    },
  },
  {
    link: "/docx-to-txt",
    metadata: {
      title: "DOCX to TXT Converter: Extract Plain Text from Word File",
      description:
        "Quickly convert DOCX (Word) documents to simple TXT (plain text), stripping all formatting, images, and embedded objects. Free and instant.",
      openGraph: {
        title: "DOCX to TXT Converter: Extract Plain Text from Word File",
        description:
          "Convert DOCX to TXT to extract pure, plain text without any formatting or images.",
        url: "https://yourdomain.com/docx-to-txt",
        images: [{ url: "/og/docx-to-txt.jpg" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "DOCX to TXT Extractor",
        description:
          "Free online tool to convert DOCX Word files to simple TXT plain text.",
        images: ["/og/docx-to-txt.jpg"],
      },
      keywords: [
        "docx to txt converter",
        "convert docx to txt",
        "word to plain text",
        "docx to txt online",
      ],
    },
  },
];
