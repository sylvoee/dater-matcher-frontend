/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "http",          // ✅ use http here
        hostname: "localhost",     // ✅ hostname is localhost
        port: "8000",              // ✅ port must be a string
        pathname: "/profiles/**",  // ✅ your images folder
      },
    ],
  },
};

export default nextConfig;
