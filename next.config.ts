/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: './', // ✅ Use relative paths for GitHub Pages
}

module.exports = nextConfig
