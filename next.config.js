/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.sanity.io**",
          },
        ],
        domains: ['avatars.githubusercontent.com'],
      },
}

module.exports = nextConfig;
