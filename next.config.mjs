/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/sitemap.xml", destination: "/api/sitemap" },
      { source: "/robots.txt", destination: "/api/robots" },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bseuburnlk.ufs.sh",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
