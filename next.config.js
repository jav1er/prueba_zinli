/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // add domains for use with next/image
  images: {
    domains: ["localhost:3000", "localhost:3001", "loremflickr.com"],
  },
};

module.exports = nextConfig;
