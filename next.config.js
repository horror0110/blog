/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/resume",
        permanent: true, // эсвэл false
      },
    ];
  },
};

module.exports = nextConfig;
