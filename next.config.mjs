/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental:{
    cssChunking: false,
  },
  env: {
    JWT_SECRET: process.env.JWT_SECRET, 
  },
}

export default nextConfig;