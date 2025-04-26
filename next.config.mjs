// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) Don’t fail the build on ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 2) Whitelist any external image domains you need
  images: {
    domains: [
      "vapeaura.s3.us-east-2.amazonaws.com",
    ],
  },

  // (optional) other Next flags…
  reactStrictMode: true,
};

module.exports = nextConfig;
