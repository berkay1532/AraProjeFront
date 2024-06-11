/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "media.licdn.com" },
      { hostname: "www.essltd.ie" },
      { hostname: "www.icanbea.org.uk" },
    ],
  },
};

export default nextConfig;
