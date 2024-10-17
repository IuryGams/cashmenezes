/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join("src", "styles", "shared")],
  },
  images: {
      domains: ['github.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/a/**',
        }
      ],
    },
};

export default nextConfig;
