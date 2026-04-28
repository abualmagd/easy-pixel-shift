import {
  HiLightningBolt,
  HiDatabase,
  HiShieldCheck,
  HiArrowCircleUp,
} from "react-icons/hi";

export default function CompressionBenefits() {
  const benefits = [
    {
      title: "Faster Load Times",
      desc: "Smaller images load instantly, reducing bounce rates and keeping users engaged on your site.",
      icon: <HiLightningBolt className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Storage Savings",
      desc: "Save up to 80% of disk space on your server or cloud storage without losing visible quality.",
      icon: <HiDatabase className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "SEO Boost",
      desc: "Google favors fast-loading websites. Compressing images is one of the easiest ways to improve your SEO rank.",
      icon: <HiArrowCircleUp className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Privacy First",
      desc: "Our tool processes everything locally in your browser. Your images never touch our servers.",
      icon: <HiShieldCheck className="w-6 h-6 text-purple-500" />,
    },
  ];

  return (
    <div className="w-full max-w-5xl py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Why Compress Your Images?
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="shrink-0 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg h-fit">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">
          How it works
        </h3>
        <p className="text-blue-800/80 dark:text-blue-200/70 text-sm">
          We use <strong>Lossy Compression</strong> via the Canvas API. By
          slightly reducing the color data and metadata that the human eye
          can&rsquo;t see, we significantly decrease the byte size while keeping
          the image looking crisp.
        </p>
      </div>
    </div>
  );
}

import {
  HiOutlineArrowsExpand,
  HiOutlineDeviceMobile,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

export function ResizerBenefits() {
  const benefits = [
    {
      title: "Social Media Ready",
      desc: "Instantly adjust images to fit Instagram, Twitter, or YouTube perfectly without manual cropping or stretching.",
      icon: <HiOutlineDeviceMobile className="w-6 h-6 text-pink-500" />,
    },
    {
      title: "Aspect Ratio Control",
      desc: "Lock your aspect ratio to ensure your photos never look distorted, or unlock it for custom free-form resizing.",
      icon: <HiOutlineArrowsExpand className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Optimized Performance",
      desc: "Websites load faster when images aren't larger than they need to be. Resize to the exact pixel width your layout requires.",
      icon: <HiOutlineGlobeAlt className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Client-Side Privacy",
      desc: "Processing happens entirely in your browser. Your high-res originals are never uploaded to any server.",
      icon: <HiShieldCheck className="w-6 h-6 text-purple-500" />,
    },
  ];

  return (
    <div className="w-full max-w-5xl py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Why Use Our Smart Resizer?
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="shrink-0 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg h-fit">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">
          Precision Matters
        </h3>
        <p className="text-blue-800/80 dark:text-blue-200/70 text-sm">
          We use <strong>Bicubic Interpolation</strong> logic via the browser
          &quot s hardware-accelerated Canvas API. This ensures that when you
          downscale an image, the pixels are recalculated to maintain sharpness
          and prevent the &quot aliasing &quot or &quot blurriness &quot often
          seen in low-quality resizing tools.
        </p>
      </div>
    </div>
  );
}
