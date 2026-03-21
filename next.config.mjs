/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'store.storeimages.cdn-apple.com' },
      { protocol: 'https', hostname: 'images.macrumors.com' },
      { protocol: 'https', hostname: 'www.apple.com' },
      { protocol: 'https', hostname: 'gmedia.playstation.com' },
    ],
  },
}

export default nextConfig
