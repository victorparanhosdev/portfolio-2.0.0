import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();


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

export default withNextIntl(nextConfig);
