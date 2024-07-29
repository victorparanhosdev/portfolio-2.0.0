/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'github.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
