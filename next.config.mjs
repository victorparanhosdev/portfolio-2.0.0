/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'github.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: ''
          }
        ],
      },
};

export default nextConfig;
