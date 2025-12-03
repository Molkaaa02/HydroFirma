/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Webpack (disable Turbopack)
  // This fixes google-spreadsheet v4 loading
  experimental: {
    forceSwcTransforms: false,
  },
  // Optional: Suppress source map warnings
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;