import { ExternalLink } from "lucide-react";

interface GameCardProps {
  title: string;
  platform: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  storeUrl: string;
  platformColor?: string;
  platformBg?: string;
  cardBorder?: string;
  hoverBorder?: string;
  btnBg?: string;
  imgHeight?: number;
}

const platformStyles: Record<string, { bg: string; color: string }> = {
  Steam: { bg: "rgba(102,192,244,0.2)", color: "#66c0f4" },
  Xbox: { bg: "rgba(155,240,11,0.2)", color: "#9bf00b" },
  PlayStation: { bg: "rgba(0,67,156,0.3)", color: "#66a0ff" },
  Nintendo: { bg: "rgba(230,0,18,0.2)", color: "#ff4d4d" },
};

function getPlaceholderBg(platform: string) {
  const map: Record<string, string> = {
    Steam: "linear-gradient(135deg, #2a475e, #1b2838)",
    Xbox: "linear-gradient(135deg, #107c10, #0e5c0e)",
    PlayStation: "linear-gradient(135deg, #003791, #0049b7)",
    Nintendo: "linear-gradient(135deg, #e60012, #8b0000)",
  };
  return map[platform] || "linear-gradient(135deg, #2a2a4a, #1a1a2e)";
}

export function GameCard({
  title,
  platform,
  price,
  originalPrice,
  discount,
  image,
  storeUrl,
  cardBorder,
  hoverBorder,
  btnBg = "#66c0f4",
  imgHeight = 200,
}: GameCardProps) {
  const ps = platformStyles[platform] || { bg: "rgba(255,255,255,0.1)", color: "#f5f7ff" };

  return (
    <div
      className="gs-card-scale-hover rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: `1px solid ${cardBorder || "rgba(255,255,255,0.08)"}`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = hoverBorder || "rgba(255,255,255,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = cardBorder || "rgba(255,255,255,0.08)";
      }}
    >
      {/* Image */}
      <div style={{ background: getPlaceholderBg(platform), height: imgHeight, overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <span
          className="inline-block px-2 py-0.5 rounded text-xs font-bold uppercase mb-2"
          style={{ background: ps.bg, color: ps.color }}
        >
          {platform}
        </span>
        <h3
          className="text-sm font-semibold mb-2 truncate"
          style={{ color: "#f5f7ff" }}
          title={title}
        >
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="font-bold text-base" style={{ color: "#ffb703" }}>
            {price}
          </span>
          {originalPrice && (
            <span className="text-xs line-through" style={{ color: "#888" }}>
              {originalPrice}
            </span>
          )}
          {discount && (
            <span
              className="text-xs font-bold px-1.5 py-0.5 rounded"
              style={{ background: "#4c6b22", color: "#beee11" }}
            >
              {discount}
            </span>
          )}
        </div>
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-bold no-underline transition-all duration-200"
          style={{ background: btnBg, color: "#0b1220" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.15)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.filter = "none"; }}
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={12} />
          View on Store
        </a>
      </div>
    </div>
  );
}
