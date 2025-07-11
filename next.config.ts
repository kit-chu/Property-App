import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com", "randomuser.me"], // เพิ่ม host ที่ใช้
  },
};

export default nextConfig;
