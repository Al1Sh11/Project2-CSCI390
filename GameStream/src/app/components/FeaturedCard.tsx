import { ExternalLink } from "lucide-react";

interface FeaturedCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  storeUrl: string;
  badge?: string;
  accentColor?: string;
  placeholderBg?: string;
  btnBg?: string;
  btnColor?: string;
}

export function FeaturedCard({
  title,
  price,
  originalPrice,
  image,
  storeUrl,
  badge = "TOP SELLER",
  accentColor = "#ffb703",
  placeholderBg = "linear-gradient(135deg, #2a2a4a, #1a1a2e)",
  btnBg = "#66c0f4",
  btnColor = "#0b1220",
}: FeaturedCardProps) {
  return (
    <div
      className="gs-card-hover relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: `1px solid ${accentColor}40`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = accentColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${accentColor}40`;
      }}
    >
      {/* Badge */}
      {badge && (
        <span
          className="absolute top-2.5 left-2.5 z-10 px-3 py-1.5 rounded-md text-xs font-bold"
          style={{ background: "#ffb703", color: "#1a1a1a" }}
        >
          {badge}
        </span>
      )}

      {/* Image */}
      <div style={{ background: placeholderBg, height: 180, overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-base font-semibold mb-2" style={{ color: "#f5f7ff" }}>
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold" style={{ color: accentColor }}>
            {price}
          </span>
          {originalPrice && (
            <span className="text-sm line-through" style={{ color: "#888" }}>
              {originalPrice}
            </span>
          )}
        </div>
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold no-underline transition-all duration-200"
          style={{ background: btnBg, color: btnColor }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.03)";
            (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLAnchorElement).style.filter = "none";
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={14} />
          Go to Store
        </a>
      </div>
    </div>
  );
}
