import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join("src", 'styles')],
    },
};

export default nextConfig;
