/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // İleride başka sitelerden (örn: AWS, Framer) görsel çekerseniz, 
      // o sitelerin alan adlarını da buraya eklemelisiniz.
    ],
  },
};

export default nextConfig;