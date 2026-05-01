import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Steam", path: "/steam" },
  { label: "Xbox", path: "/xbox" },
  { label: "PlayStation", path: "/playstation" },
  { label: "Nintendo", path: "/nintendo" },
  { label: "Equipment", path: "/equipment" },
];

interface NavbarProps {
  activeColor?: string;
}

export function Navbar({ activeColor = "#ffb703" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="gs-navbar sticky top-0 z-50 mx-auto mt-4 px-5 py-3 rounded-2xl flex items-center justify-between gap-5 flex-wrap"
      style={{
        width: "min(1100px, 92%)",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      {/* Brand */}
      <Link to="/" className="flex items-center gap-2 no-underline" style={{ color: "#f5f7ff" }}>
        <span
          className="inline-grid place-items-center rounded-lg font-black text-sm"
          style={{ width: 30, height: 30, background: "#ffb703", color: "#1a1a1a" }}
        >
          G
        </span>
        <span className="font-extrabold tracking-wide text-base" style={{ color: "#f5f7ff" }}>
          GameStream
        </span>
      </Link>

      {/* Hamburger Toggle */}
      <button
        className="md:hidden p-1 rounded"
        style={{ background: "none", border: "none", color: "#f5f7ff", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-3 md:gap-5 items-start md:items-center w-full md:w-auto list-none m-0 p-0 pt-2 md:pt-0`}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="no-underline font-semibold text-sm transition-colors duration-200"
                style={{
                  color: isActive ? activeColor : "#bfc7e6",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "#f5f7ff"; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "#bfc7e6"; }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Login CTA */}
      <Link
        to="/login"
        className="hidden md:inline-block no-underline font-bold text-sm px-4 py-2 rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
        style={{ background: "#ffb703", color: "#161616" }}
      >
        Login
      </Link>
    </nav>
  );
}
