/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/services/whatsapp-automation-crm",
        destination: "/services/whatsapp-automation-kolkata",
        permanent: true
      },
      {
        source: "/services/crm-dashboard-development",
        destination: "/services/crm-kolkata",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
