import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@ffmpeg.wasm/main", "@ffmpeg.wasm/core-mt"],
};

export default withFlowbiteReact(nextConfig);
