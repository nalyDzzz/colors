/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/hooks'],
  },
  output: 'standalone',
  reactStrictMode: true,
};

export default nextConfig;
