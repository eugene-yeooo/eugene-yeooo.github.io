/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 👇 This is the fix: ensure paths are relative
  assetPrefix: './',
  basePath: '',
}

module.exports = nextConfig
