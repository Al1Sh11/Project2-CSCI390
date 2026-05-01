import { FeaturedCard } from "../components/FeaturedCard";
import { GameCard } from "../components/GameCard";

const ACCENT = "#1be36b";
const PLACEHOLDER_BG = "linear-gradient(135deg, #107c10, #0e5c0e)";
const SECTION_BG = "rgba(4,83,16,0.08)";
const SECTION_BORDER = "rgba(88,228,151,0.18)";

const featured = [
  {
    title: "Halo Infinite",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/halo-infinite/9NP1P1WFS0LB",
  },
  {
    title: "Forza Horizon 5",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/forza-horizon-5/9NKX70L8NG0S",
  },
  {
    title: "Starfield",
    price: "$69.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/starfield/9NCCH3J0X1SP",
  },
];

const xboxGames = [
  {
    title: "Minecraft",
    price: "$29.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/minecraft/9MVXMVT8ZKWC",
  },
  {
    title: "Gears 5",
    price: "$29.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1097840/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/gears-5/9P3J32FCX7MB",
  },
  {
    title: "Microsoft Flight Simulator",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/microsoft-flight-simulator/9NM4T0T0C4XJ",
  },
  {
    title: "Sea of Thieves",
    price: "$39.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/sea-of-thieves/9P2N57MC619K",
  },
  {
    title: "Grounded",
    price: "$29.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/962130/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/grounded/9P8PGV0ML4T8",
  },
  {
    title: "Psychonauts 2",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/607080/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/psychonauts-2/9P3J5W8W8Z0M",
  },
  {
    title: "Hi-Fi Rush",
    price: "$29.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817230/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/hi-fi-rush/9N1P4X5C8J3K",
  },
  {
    title: "Pentiment",
    price: "$19.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1929870/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/pentiment/9N7D3Q6F2L1K",
  },
  {
    title: "Hellblade II: Senua's Saga",
    price: "$49.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2461850/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/hellblade-ii/9P5P4X6C8J2K",
  },
  {
    title: "Avowed",
    price: "$69.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2457220/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/avowed/9P3Q5R7T9V2X",
  },
  {
    title: "Indiana Jones and the Great Circle",
    price: "$69.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2677660/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/indiana-jones/9N8P6M4K2J1H",
  },
  {
    title: "Halo: Master Chief Collection",
    price: "$39.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/976730/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/halo-the-master-chief-collection/9MT8PTGVHX2P",
  },
  {
    title: "Ori and the Will of the Wisps",
    price: "$29.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/ori-and-the-will-of-the-wisps/9P3J32FC9B1M",
  },
  {
    title: "Ori and the Blind Forest",
    price: "$19.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/387290/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/ori-and-the-blind-forest/9P5P4X6C8J2K",
  },
  {
    title: "Sunset Overdrive",
    price: "$19.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/847370/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/sunset-overdrive/9NBLGGH4MRHX",
  },
  {
    title: "State of Decay 2",
    price: "$29.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/495420/header.jpg",
    storeUrl: "https://www.xbox.com/en-us/games/store/state-of-decay-2/BQ1T6L3LGP0H",
  },
];

export function Xbox() {
  return (
    <main>
      {/* Hero */}
      <section
        className="mx-auto mt-10 px-10 py-16 rounded-2xl text-center"
        style={{
          width: "min(1100px, 92%)",
          background: `linear-gradient(135deg, ${SECTION_BG}, rgba(29,155,88,0.3))`,
          border: `1px solid ${SECTION_BORDER}`,
        }}
      >
        <h1 className="mb-4" style={{ color: ACCENT, fontSize: "2.5rem", fontWeight: 800 }}>
          Xbox Store
        </h1>
        <p className="text-lg" style={{ color: "#bfc7e6" }}>
          Discover the latest Xbox games, from exclusive blockbusters to indie favorites.
        </p>
      </section>

      {/* Best Sellers */}
      <section
        className="mx-auto my-10 p-8 rounded-2xl"
        style={{
          width: "min(1100px, 92%)",
          background: SECTION_BG,
          border: `1px solid ${SECTION_BORDER}`,
        }}
      >
        <div className="mb-6 pb-4" style={{ borderBottom: `1px solid ${SECTION_BORDER}` }}>
          <h2 className="text-2xl font-bold" style={{ color: ACCENT }}>
            Best Sellers
          </h2>
        </div>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {featured.map((g) => (
            <FeaturedCard
              key={g.title}
              {...g}
              accentColor={ACCENT}
              placeholderBg={PLACEHOLDER_BG}
              btnBg={ACCENT}
              btnColor="#1a1a1a"
            />
          ))}
        </div>
      </section>

      {/* Xbox Games */}
      <section
        className="mx-auto my-10 p-8 rounded-2xl"
        style={{
          width: "min(1100px, 92%)",
          background: SECTION_BG,
          border: `1px solid ${SECTION_BORDER}`,
        }}
      >
        <div className="mb-6 pb-4" style={{ borderBottom: `1px solid ${SECTION_BORDER}` }}>
          <h2 className="text-2xl font-bold" style={{ color: ACCENT }}>
            Xbox Games
          </h2>
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
        >
          {xboxGames.map((g) => (
            <GameCard
              key={g.title}
              title={g.title}
              platform="Xbox"
              price={g.price}
              image={g.image}
              storeUrl={g.storeUrl}
              cardBorder={SECTION_BORDER}
              hoverBorder={ACCENT}
              btnBg={ACCENT}
              imgHeight={130}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
