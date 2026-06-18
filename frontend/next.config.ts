import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.electraglobalrecruitment.com.np',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;