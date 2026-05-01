import { Link } from "react-router";
import { GameCard } from "../components/GameCard";
import { EquipmentCard } from "../components/EquipmentCard";

const flashDeals = [
  { label: "Flash Deal", text: "Up to 75% off on Steam titles" },
  { label: "Xbox Sale", text: "Game Pass Ultimate - 3 months for $1" },
  { label: "PlayStation Deals", text: "Save 30% on select exclusives" },
  { label: "Nintendo Sale", text: "Indie game discounts up to 50%" },
];

const platforms = [
  {
    key: "steam",
    label: "Browse Steam",
    icon: "S",
    bg: "#1b2838",
    path: "/steam",
    hoverBorder: "#1b2838",
    hoverBg: "rgba(27,40,56,0.5)",
  },
  {
    key: "xbox",
    label: "Browse Xbox",
    icon: "X",
    bg: "#107c10",
    path: "/xbox",
    hoverBorder: "#107c10",
    hoverBg: "rgba(16,124,16,0.3)",
  },
  {
    key: "playstation",
    label: "Browse PlayStation",
    icon: "P",
    bg: "#003791",
    path: "/playstation",
    hoverBorder: "#003791",
    hoverBg: "rgba(0,55,145,0.3)",
  },
  {
    key: "nintendo",
    label: "Browse Nintendo",
    icon: "N",
    bg: "#e60012",
    path: "/nintendo",
    hoverBorder: "#e60012",
    hoverBg: "rgba(230,0,18,0.3)",
  },
];

const bestSellers = [
  {
    title: "Baldur's Gate 3",
    platform: "Steam",
    price: "$59.99",
    discount: "-10%",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
    storeUrl: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
  },
  {
    title: "Marvel's Spider-Man 2",
    platform: "PlayStation",
    price: "$69.99",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/2b735a0e3e1c97d1d08af6e178a38b3b59c9c1e74c8b4e8a.png",
    storeUrl: "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
  },
  {
    title: "Starfield",
    platform: "Xbox",
    price: "$69.99",
    originalPrice: "$79.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg",
    storeUrl: "https://www.xbox.com/en-US/games/starfield",
  },
  {
    title: "Zelda: Tears of the Kingdom",
    platform: "Nintendo",
    price: "$69.99",
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000063714/63e3c3cd89a6f7d4491d44fbdaff9e8dd5df4494.png",
    storeUrl: "https://www.nintendo.com/us/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/",
  },
  {
    title: "Elden Ring",
    platform: "Steam",
    price: "$59.99",
    discount: "-25%",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    storeUrl: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
  },
  {
    title: "God of War Ragnarök",
    platform: "PlayStation",
    price: "$69.99",
    originalPrice: "$79.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/god-of-war-ragnarok/",
  },
  {
    title: "Forza Horizon 5",
    platform: "Xbox",
    price: "$59.99",
    discount: "-40%",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
    storeUrl: "https://www.xbox.com/en-US/games/forza-horizon-5",
  },
  {
    title: "Super Mario Bros. Wonder",
    platform: "Nintendo",
    price: "$59.99",
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000063714/63e3c3cd89a6f7d4491d44fbdaff9e8dd5df4494.png",
    storeUrl: "https://www.nintendo.com/us/store/products/super-mario-bros-wonder-switch/",
  },
];

const featuredEquipment = [
  {
    name: "DualSense Edge Controller",
    category: "PlayStation",
    price: "$199.99",
    image: "https://www.glitched.online/wp-content/uploads/2022/08/06d8a7c076df3b090cf777525e61e9a65174f410-scaled-1.webp",
    storeUrl: "https://www.playstation.com/en-us/accessories/dualsense-edge-wireless-controller/",
  },
  {
    name: "Xbox Elite Controller Series 2",
    category: "Xbox",
    price: "$179.99",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/5679177/da1c7d3b39f70e18ecda7cf9aeff3ef3d4d7a04a.png",
    storeUrl: "https://www.xbox.com/en-US/accessories/controllers/elite-wireless-controller-series-2",
  },
  {
    name: "Switch Pro Controller",
    category: "Nintendo",
    price: "$69.99",
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/accessories/switch/nintendo-switch-pro-controller/a82f4657-a350-4fef-a3c2-1c07e20edd9d.png",
    storeUrl: "https://www.nintendo.com/us/store/products/nintendo-switch-pro-controller/",
  },
  {
    name: "Steam Deck OLED 1TB",
    category: "Steam",
    price: "$649.99",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/steamworks_docs/english/sd_oled_header.png",
    storeUrl: "https://www.steamdeck.com/",
  },
];

const platformBtnColors: Record<string, string> = {
  Steam: "linear-gradient(135deg, #1a9fff, #66c0f4)",
  Xbox: "#1be36b",
  PlayStation: "#4bb4ff",
  Nintendo: "#ffb703",
};

export function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="mx-auto mt-10 px-10 py-16 rounded-2xl text-center"
        style={{
          width: "min(1100px, 92%)",
          background:
            "linear-gradient(135deg, rgba(255,183,3,0.15), rgba(157,78,221,0.15)), rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,183,3,0.2)",
        }}
      >
        <h1
          className="gs-gradient-text mb-4"
          style={{ fontSize: "2.5rem", fontWeight: 800 }}
        >
          All Your Games, One Store
        </h1>
        <p className="text-lg mb-8" style={{ color: "#bfc7e6" }}>
          Browse the best deals and best-selling games from Steam, Xbox, PlayStation, and Nintendo Switch.
        </p>

        {/* Flash Deals */}
        <div className="flex gap-5 justify-center flex-wrap mt-8">
          {flashDeals.map((deal) => (
            <div
              key={deal.label}
              className="px-6 py-4 rounded-xl text-left min-w-[200px]"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "#ffb703" }}
              >
                {deal.label}
              </p>
              <p className="text-sm font-semibold" style={{ color: "#f5f7ff" }}>
                {deal.text}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Selector */}
        <div className="flex gap-4 justify-center flex-wrap mt-10">
          {platforms.map((p) => (
            <Link
              key={p.key}
              to={p.path}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base no-underline transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "2px solid rgba(255,255,255,0.15)",
                color: "#f5f7ff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = p.hoverBorder;
                (e.currentTarget as HTMLAnchorElement).style.background = p.hoverBg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
              }}
            >
              <span
                className="inline-grid place-items-center rounded text-xs font-bold"
                style={{ width: 24, height: 24, background: p.bg }}
              >
                {p.icon}
              </span>
              {p.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section
        className="mx-auto my-10 p-8 rounded-2xl"
        style={{
          width: "min(1100px, 92%)",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="flex items-center justify-between mb-6 pb-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex items-center gap-3 text-2xl font-bold" style={{ color: "#f5f7ff" }}>
            <span
              className="inline-grid place-items-center rounded-lg text-sm font-bold"
              style={{ width: 32, height: 32, background: "#ffb703", color: "#1a1a1a" }}
            >
              🔥
            </span>
            Best Sellers
          </div>
          <Link
            to="/steam"
            className="px-4 py-2 rounded-lg text-sm font-semibold no-underline transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "#bfc7e6",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f5f7ff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#bfc7e6";
            }}
          >
            View All Best Sellers →
          </Link>
        </div>
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          }}
        >
          {bestSellers.map((game) => (
            <GameCard
              key={game.title}
              {...game}
              btnBg={platformBtnColors[game.platform] || "#66c0f4"}
            />
          ))}
        </div>
      </section>

      {/* Featured Equipment */}
      <section
        className="mx-auto my-10 p-8 rounded-2xl"
        style={{
          width: "min(1100px, 92%)",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="flex items-center justify-between mb-6 pb-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex items-center gap-3 text-2xl font-bold" style={{ color: "#f5f7ff" }}>
            <span
              className="inline-grid place-items-center rounded-lg text-sm"
              style={{ width: 32, height: 32, background: "#ffb703", color: "#1a1a1a" }}
            >
              🎮
            </span>
            Featured Equipment
          </div>
          <Link
            to="/equipment"
            className="px-4 py-2 rounded-lg text-sm font-semibold no-underline transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "#bfc7e6",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f5f7ff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#bfc7e6";
            }}
          >
            View All Equipment →
          </Link>
        </div>
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          }}
        >
          {featuredEquipment.map((item) => (
            <EquipmentCard key={item.name} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
