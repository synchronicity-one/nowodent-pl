import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["nowodent-pl.dev.41.pl", "*.dev.41.pl"],
  images: { unoptimized: true },
};

export default nextConfig;
