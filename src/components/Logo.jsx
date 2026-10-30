const SRC = "/logo-horizontal.jpeg";

// Wordmark's bounding box inside the 500x500 source image (as fractions).
const BOX = { x: 17 / 500, y: 222 / 500, w: 466 / 500, h: 56 / 500 };

export default function Logo({ height = 30, href = "#top" }) {
  const size = height / BOX.h; // rendered size of the full square image
  return (
    <a href={href} className="logo" style={{ width: size * BOX.w, height }}>
      <img
        src={SRC}
        alt="Equicate Academy"
        width={size}
        height={size}
        style={{ width: size, height: size, left: -size * BOX.x, top: -size * BOX.y }}
      />
    </a>
  );
}