/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com'],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          "fs": false,
          "net": false,
          "tls": false
        }                                                                                                  
      }
      return config
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          
        }
      ],
    },
  };
  

module.exports = nextConfig
