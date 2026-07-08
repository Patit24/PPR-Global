import { ImageResponse } from "next/og";

export const alt = "PPR Global software agency portfolio";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          color: "#f5f5ef",
          padding: 64,
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 74% 18%, rgba(184,255,61,0.26), transparent 320px), linear-gradient(135deg, rgba(255,255,255,0.08), transparent 45%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 62,
            width: 210,
            height: 210,
            borderRadius: 40,
            border: "1px solid rgba(184,255,61,0.42)",
            transform: "rotate(8deg)"
          }}
        />
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: 28, letterSpacing: 6, fontWeight: 800 }}>[PPR GLOBAL]</div>
          <div
            style={{
              background: "#b8ff3d",
              color: "#050505",
              borderRadius: 999,
              padding: "16px 26px",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: 3
            }}
          >
            IND 2026
          </div>
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: 860,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={{ color: "#b8ff3d", fontSize: 30, fontWeight: 800, letterSpacing: 5 }}>
            PATIT ROY
          </div>
          <div style={{ marginTop: 22, fontSize: 82, lineHeight: 0.95, fontWeight: 900 }}>
            Building Digital Products For Brands Worldwide
          </div>
          <div style={{ marginTop: 28, color: "rgba(245,245,239,0.72)", fontSize: 30, lineHeight: 1.35 }}>
            Websites, apps, automation, ads funnels, SEO/GEO, CRM and custom software.
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            gap: 18,
            color: "#050505",
            fontSize: 22,
            fontWeight: 800
          }}
        >
          {["WEBSITES", "APPS", "ADS", "SEO", "CRM"].map((item) => (
            <div key={item} style={{ background: "#f5f5ef", borderRadius: 999, padding: "12px 20px" }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
