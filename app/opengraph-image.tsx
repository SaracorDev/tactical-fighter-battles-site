import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090b",
          color: "#f3efe4",
          padding: "64px",
          border: "12px solid #e3b23c",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#e3b23c",
            fontFamily: "monospace",
          }}
        >
          Windows · 1945–present
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#8b929b",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
