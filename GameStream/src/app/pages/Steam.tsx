import { FeaturedCard } from "../components/FeaturedCard";
import { GameCard } from "../components/GameCard";

const ACCENT = "#66c0f4";
const PLACEHOLDER_BG = "linear-gradient(135deg, #2a475e, #1b2838)";
const BTN_BG = "linear-gradient(135deg, #1a9fff, #66c0f4)";

const featured = [
  {
    title: "Baldur's Gate 3",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
    storeUrl: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
  },
  {
    title: "Counter-Strike 2",
    price: "Free to Play",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
    storeUrl: "https://store.steampowered.com/app/730/CounterStrike_2/",
  },
  {
    title: "Elden Ring",
    price: "$59.99",
    originalPrice: "$69.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    storeUrl: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
  },
];

const steamGames = [
  { title: "Hades II", price: "$29.99", discount: "-10%", id: 1145350 },
  { title: "Palworld", price: "$29.99", id: 1623730 },
  { title: "Helldivers 2", price: "$39.99", id: 553850 },
  { title: "Lethal Company", price: "$9.99", id: 1966720 },
  { title: "Sons of the Forest", price: "$29.99", id: 1326470 },
  { title: "Valheim", price: "$19.99", discount: "-25%", id: 892970 },
  { title: "Rust", price: "$39.99", id: 252490 },
  { title: "Terraria", price: "$9.99", discount: "-50%", id: 105600 },
  { title: "GTA V", price: "$29.99", id: 271590 },
  { title: "Red Dead Redemption 2", price: "$39.99", discount: "-33%", id: 1174180 },
  { title: "Cyberpunk 2077", price: "$59.99", id: 1091500 },
  { title: "The Witcher 3", price: "$14.99", discount: "-75%", id: 292030 },
  { title: "Stardew Valley", price: "$14.99", id: 413150 },
  { title: "Dota 2", price: "Free to Play", id: 570 },
  { title: "Apex Legends", price: "Free to Play", id: 1172470 },
  { title: "PUBG: Battlegrounds", price: "Free to Play", id: 578080 },
  { title: "Dark Souls III", price: "$39.99", discount: "-50%", id: 374320 },
  { title: "Sekiro: Shadows Die Twice", price: "$59.99", id: 814380 },
  { title: "Monster Hunter: World", price: "$29.99", discount: "-25%", id: 582010 },
  { title: "Subnautica", price: "$29.99", id: 264710 },
  { title: "Deep Rock Galactic", price: "$17.99", discount: "-40%", id: 548430 },
  { title: "V Rising", price: "$34.99", id: 1604030 },
  { title: "RimWorld", price: "$34.99", id: 294100 },
  { title: "Satisfactory", price: "$35.00", id: 526870 },
];

function steamImg(id: number) {
  return `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`;
}

export function Steam() {
  return (
    <main>
      {/* Hero */}
      <section
        className="mx-auto mt-10 px-10 py-16 rounded-2xl text-center"
        style={{
          width: "min(1100px, 92%)",
          background: "linear-gradient(135deg, rgba(102,192,244,0.15), rgba(27,40,56,0.5))",
          border: `1px solid rgba(102,192,244,0.3)`,
        }}
      >
        <h1 className="mb-4" style={{ color: ACCENT, fontSize: "2.5rem", fontWeight: 800 }}>
          Steam Store
        </h1>
        <p className="text-lg" style={{ color: "#bfc7e6" }}>
          Discover thousands of PC games, from AAA blockbusters to indie gems. Special deals updated daily.
        </p>
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
          className="mb-6 pb-4"
          style={{ borderBottom: `1px solid rgba(102,192,244,0.3)` }}
        >
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
              btnBg={BTN_BG}
              btnColor="#0b1220"
            />
          ))}
        </div>
      </section>

      {/* Popular Games */}
      <section
        className="mx-auto my-10 p-8 rounded-2xl"
        style={{
          width: "min(1100px, 92%)",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="mb-6 pb-4"
          style={{ borderBottom: `1px solid rgba(102,192,244,0.3)` }}
        >
          <h2 className="text-2xl font-bold" style={{ color: ACCENT }}>
            Popular Steam Games
          </h2>
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
        >
          {steamGames.map((g) => (
            <GameCard
              key={g.title}
              title={g.title}
              platform="Steam"
              price={g.price}
              discount={g.discount}
              image={steamImg(g.id)}
              storeUrl={`https://store.steampowered.com/app/${g.id}/`}
              cardBorder="rgba(102,192,244,0.1)"
              hoverBorder="rgba(102,192,244,0.4)"
              btnBg={BTN_BG}
              imgHeight={130}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
