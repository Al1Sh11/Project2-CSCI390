import { ExternalLink } from "lucide-react";

interface EquipmentCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  storeUrl: string;
}

export function EquipmentCard({ name, category, price, image, storeUrl }: EquipmentCardProps) {
  return (
    <div
      className="gs-card-hover rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.25)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      {/* Image */}
      <div
        style={{
          background: "linear-gradient(135deg, #2a2a4a, #1a1a2e)",
          height: 180,
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>

      {/* Info */}
      <div className="p-4">
        {category && (
          <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#9d4edd" }}>
            {category}
          </p>
        )}
        <h3 className="text-sm font-semibold mb-2" style={{ color: "#f5f7ff" }}>
          {name}
        </h3>
        <p className="text-base font-bold mb-3" style={{ color: "#ffb703" }}>
          {price}
        </p>
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-bold no-underline transition-all duration-200"
          style={{ background: "#4bb4ff", color: "#1a1a1a" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#ffc933";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#4bb4ff";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={12} />
          Go to Website
        </a>
      </div>
    </div>
  );
}
