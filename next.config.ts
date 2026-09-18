import type { NextConfig } from "next";

// GitHub Pages chỉ phục vụ file tĩnh và chạy ở đường dẫn con /LangdingPage,
// còn Vercel chạy Next.js đầy đủ ở gốc. Biến này chỉ được bật trong workflow Pages.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/LangdingPage" : undefined,
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
