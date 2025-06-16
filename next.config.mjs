const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const repo = 'denoire';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: isGhPages ? `/${repo}` : '',
    assetPrefix: isGhPages ? `/${repo}/` : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
