/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://hi-yeonju.github.io/ground-ui";

const nextConfig = {
    images: {
        domains: [
            'localhost',
            'plus.unsplash.com',
            'images.unsplash.com',
            // process.env.NEXT_PUBLIC_HOST_URL,

        ]
    },
    reactStrictMode: true,
    assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
    trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
    output: 'export'
}

module.exports = nextConfig
