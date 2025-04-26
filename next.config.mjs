// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don’t fail the build on ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Whitelist your external image domains
  images: {
    domains: ["vapeaura.s3.us-east-2.amazonaws.com"],
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
