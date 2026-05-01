import { Link } from "react-router";

interface FooterProps {
  accentColor?: string;
}

export function Footer({ accentColor = "#ffb703" }: FooterProps) {
  const links = [
    { label: "Home", path: "/" },
    { label: "Steam", path: "/steam" },
    { label: "Xbox", path: "/xbox" },
    { label: "PlayStation", path: "/playstation" },
    { label: "Nintendo", path: "/nintendo" },
    { label: "Equipment", path: "/equipment" },
  ];

  return (
    <footer
      className="mx-auto my-10 p-8 rounded-2xl text-center"
      style={{
        width: "min(1100px, 92%)",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex justify-center gap-6 flex-wrap mb-5">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="no-underline font-semibold text-sm transition-colors duration-200"
            style={{ color: "#bfc7e6" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#bfc7e6")}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="text-sm" style={{ color: "#888" }}>
        &copy; 2024 GameStream. All rights reserved. Not affiliated with Steam, Xbox, PlayStation, or Nintendo.
        <br />
        <span className="text-xs opacity-70">Property of Ali Rida El Chaer &amp; Sajid Ghandour.</span>
      </p>
    </footer>
  );
}
