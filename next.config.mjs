/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join("src", "styles", "shared")],
  },
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/a/**',
        },
      ],
    },
};

export default nextConfig;
