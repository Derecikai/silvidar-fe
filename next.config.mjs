/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
      {
        protocol: "https",
        hostname: "dribbble.com",
      },
      {
        protocol: "https",
        hostname: "example.com,",
      },
    ],
  },
};

export default nextConfig;
