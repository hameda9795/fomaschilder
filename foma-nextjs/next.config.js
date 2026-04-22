/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/offerte/',
        destination: '/contact/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
