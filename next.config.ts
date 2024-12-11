import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverRuntimeConfig: {
    HOST: '0.0.0.0', // This makes your app accessible from all network interfaces
    PORT: 3000, // Set the port your app will run on
  },
};

export default nextConfig;
