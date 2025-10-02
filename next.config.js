/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  // Disable SWC minification to avoid platform-specific binaries
  swcMinify: false,
  // Use webpack for minification instead
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = true;
    }
    return config;
  }
}

module.exports = nextConfig
