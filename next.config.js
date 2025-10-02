/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/ScalingOpt' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ScalingOpt/' : ''
}

module.exports = nextConfig
