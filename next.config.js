/** @type {import('next').NextConfig} */
const nextConfig = {
  // API routes require dynamic mode (no output: 'export')
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : '',
  eslint: { ignoreDuringBuilds: true },
  images: {
    unoptimized: true,
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
