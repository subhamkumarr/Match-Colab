import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pravatar.cc', 'images.unsplash.com'],
  },
};

export default withFlowbiteReact(nextConfig);