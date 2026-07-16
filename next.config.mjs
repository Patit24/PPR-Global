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
      },
      {
        source: "/services/mobile-app-development",
        destination: "/services/mobile-app-development-kolkata",
        permanent: true
      },
      {
        source: "/services/google-ads-management-kolkata",
        destination: "/services/google-ads-kolkata",
        permanent: true
      },
      {
        source: "/services/meta-ads-management-kolkata",
        destination: "/services/meta-ads-kolkata",
        permanent: true
      },
      {
        source: "/services/seo-geo-services-kolkata",
        destination: "/services/seo-kolkata",
        permanent: true
      },
      {
        source: "/services/google-meta-ads-kolkata",
        destination: "/services/digital-marketing-kolkata",
        permanent: true
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
