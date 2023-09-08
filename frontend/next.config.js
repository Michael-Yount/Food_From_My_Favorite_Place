/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "strapi-75qo.onrender.com",
          pathname: "/uploads/**",
        },
        {
          protocol: "http",
          hostname: "127.0.0.1",
          port: "1337",
          pathname: "/uploads/**",
        },
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/djdxnn3vg/image/upload/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;