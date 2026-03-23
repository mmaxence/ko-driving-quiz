import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ko-driving-quiz",
  assetPrefix: "/ko-driving-quiz/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
