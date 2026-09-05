import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090b",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 2.5 28 9.4v13.2L16 29.5 4 22.6V9.4L16 2.5Z"
            stroke="#e3b23c"
            strokeWidth="1.8"
          />
          <path d="M9.5 19.2 16 8.8l6.5 10.4H9.5Z" fill="#e3b23c" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
