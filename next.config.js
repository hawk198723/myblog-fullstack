/** @type {import('next').NextConfig} */
const withImages = require("next-images");
module.exports = withImages();
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "static.xx.fbcdn.net",
      "platform-lookaside.fbsbx.com",
      "images.fineartamerica.com",
      "render.fineartamerica.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
