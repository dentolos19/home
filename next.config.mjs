/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
    ],
  },
};

export default nextConfig;