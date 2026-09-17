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
      },
      {
        source: "/blog",
        destination: "/resources",
        permanent: true
      },
      {
        source: "/blog/:slug*",
        destination: "/resources/:slug*",
        permanent: true
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
