import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons',
      },
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
