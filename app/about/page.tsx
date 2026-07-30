/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { title } from "../src/const";

export const metadata = {
  title: `About ${title} - Privacy-First Image Converter`,
  description:
    "Learn about Easy Pixel Shift, a browser-side tool for converting PNG, JPG, WEBP, SVG, and other image formats with complete privacy and zero server uploads.",
  alternates: {
    canonical: "/about",
  },
};

export default function WhoUs() {
  return (
    <div className="flex min-h-screen max-w-5xl mx-auto px-6 py-12 flex-col items-center">
      {/* Header Section */}
      <section className="w-full text-center mt-8 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          About {title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Fast, private, and high-quality image file conversion powered directly
          by your browser.
        </p>
      </section>

      {/* Main Content Sections for AdSense Value */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {title} was built to provide web designers, developers, and everyday
            users with a reliable tool for converting graphics without
            compromising speed or visual quality. Whether transforming heavy
            PNGs into web-ready WebP formats or extracting crisp SVGs, our goal
            is to streamline asset workflows seamlessly.
          </p>
        </div>

        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            100% Local & Secure
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Unlike traditional converters that require uploading files to cloud
            servers, {title} processes every image locally using client-side
            technology (JavaScript / WebAssembly). Your private photos,
            graphics, and confidential project files never touch external
            infrastructure.
          </p>
        </div>
      </div>

      {/* Features Overview */}
      <section className="w-full mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Supported Workflows
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-gray-800 text-sm">
              Vectorization
            </h3>
            <p className="text-xs text-gray-500 mt-1">PNG to SVG conversion</p>
          </div>
          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-gray-800 text-sm">
              Web Optimization
            </h3>
            <p className="text-xs text-gray-500 mt-1">PNG & JPG to WebP</p>
          </div>
          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-gray-800 text-sm">
              Photo Standards
            </h3>
            <p className="text-xs text-gray-500 mt-1">HEIC to JPG conversion</p>
          </div>
          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-gray-800 text-sm">App Assets</h3>
            <p className="text-xs text-gray-500 mt-1">ICO & PNG extraction</p>
          </div>
        </div>
      </section>

      {/* Developer Profile Card */}
      <section className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-sm text-center flex flex-col items-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-4">
          Created & Maintained By
        </p>
        <div className="w-20 h-20 mb-3 rounded-full overflow-hidden border-4 border-slate-100 shadow-inner">
          <img
            src="/ismail.jpeg"
            alt="Ismail Abu Almagd"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">
          Ismail Abu Almagd
        </h3>
        <p className="text-sm text-gray-500 mt-2 mb-6 max-w-xs leading-relaxed">
          Full-stack software developer passionate about building lightweight
          web apps, performance optimization, and privacy-focused SaaS products.
        </p>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
          <Link
            href="https://x.com/ismail_code"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Twitter Profile"
            className="p-2.5 hover:bg-slate-100 rounded-full text-gray-600 transition-colors duration-150"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          <Link
            href="https://www.linkedin.com/in/ismail-abu-almgd-60096111b/"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 hover:bg-slate-100 rounded-full text-gray-600 transition-colors duration-150"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </Link>

          <Link
            href="https://codenuggets.hashnode.dev/"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Hashnode Blog"
            className="p-2.5 hover:bg-slate-100 rounded-full text-gray-600 transition-colors duration-150"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 200 200">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.742 66.824c-18.323 18.323-18.323 48.029 0 66.352l53.082 53.082c18.323 18.323 48.029 18.323 66.352 0l53.082-53.082c18.323-18.323 18.323-48.03 0-66.352l-53.082-53.082c-18.323-18.323-48.03-18.323-66.352 0L13.742 66.824zm109.481 56.399c12.826-12.826 12.826-33.62 0-46.446s-33.62-12.826-46.446 0-12.826 33.62 0 46.446 33.62 12.826 46.446 0z"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
