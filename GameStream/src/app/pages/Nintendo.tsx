import { FeaturedCard } from "../components/FeaturedCard";
import { GameCard } from "../components/GameCard";

const ACCENT = "#ff4d4d";
const PLACEHOLDER_BG = "linear-gradient(135deg, #e60012, #8b0000)";
const SECTION_BORDER = "rgba(230,0,18,0.2)";

const featured = [
  {
    title: "The Legend of Zelda: Tears of the Kingdom",
    price: "$69.99",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000063714/63e3c3cd89a6f7d4491d44fbdaff9e8dd5df4494.png",
    storeUrl:
      "https://www.nintendo.com/us/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/",
  },
  {
    title: "Super Mario Bros. Wonder",
    price: "$59.99",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000069130/ee6b1a94db1cfabfd3b63c7a3c71a3ed6c5e8ebb.png",
    storeUrl: "https://www.nintendo.com/us/store/products/super-mario-bros-wonder-switch/",
  },
  {
    title: "Pokémon Scarlet & Violet",
    price: "$59.99",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000050120/3e1f08c9db1060ce75a63a27f5b7cba78a3bb5c4.png",
    storeUrl: "https://www.nintendo.com/us/store/products/pokemon-scarlet-switch/",
  },
];

const nintendoGames = [
  { title: "Mario Kart 8 Deluxe", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/mario-kart-8-deluxe-switch/" },
  { title: "Super Smash Bros. Ultimate", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/super-smash-bros-ultimate-switch/" },
  { title: "Animal Crossing: New Horizons", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/animal-crossing-new-horizons-switch/" },
  { title: "Splatoon 3", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/splatoon-3-switch/" },
  { title: "Metroid Dread", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/metroid-dread-switch/" },
  { title: "Kirby and the Forgotten Land", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/kirby-and-the-forgotten-land-switch/" },
  { title: "Luigi's Mansion 3", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/luigis-mansion-3-switch/" },
  { title: "Fire Emblem Engage", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/fire-emblem-engage-switch/" },
  { title: "Xenoblade Chronicles 3", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/xenoblade-chronicles-3-switch/" },
  { title: "Bayonetta 2", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/bayonetta-2-switch/" },
  { title: "Ring Fit Adventure", price: "$79.99", storeUrl: "https://www.nintendo.com/us/store/products/ring-fit-adventure-switch/" },
  { title: "Nintendo Switch Sports", price: "$49.99", storeUrl: "https://www.nintendo.com/games/detail/nintendo-switch-sports-switch/" },
  { title: "Super Mario Odyssey", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/super-mario-odyssey-switch/" },
  { title: "Zelda: Breath of the Wild", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/the-legend-of-zelda-breath-of-the-wild-switch/" },
  { title: "Zelda: Link's Awakening", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/the-legend-of-zelda-links-awakening-switch/" },
  { title: "Pokémon Legends: Arceus", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/pokemon-legends-arceus-switch/" },
  { title: "Mario Party Superstars", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/mario-party-superstars-switch/" },
  { title: "Paper Mario: The Origami King", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/paper-mario-the-origami-king-switch/" },
  { title: "Yoshi's Crafted World", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/yoshis-crafted-world-switch/" },
  { title: "Donkey Kong Country: Tropical Freeze", price: "$59.99", storeUrl: "https://www.nintendo.com/us/store/products/donkey-kong-country-tropical-freeze-switch/" },
];

export function Nintendo() {
  return (
    <main>
      {/* Hero */}
      <section
        className="mx-auto mt-10 px-10 py-16 rounded-2xl text-center"
        style={{
          width: "min(1100px, 92%)",
          background: "linear-gradient(135deg, rgba(230,0,18,0.15), rgba(139,0,0,0.3))",
          border: `1px solid rgba(230,0,18,0.3)`,
        }}
      >
        <h1 className="mb-4" style={{ color: ACCENT, fontSize: "2.5rem", fontWeight: 800 }}>
          Nintendo eShop
        </h1>
        <p className="text-lg" style={{ color: "#bfc7e6" }}>
          Explore the world of Nintendo with iconic franchises and indie gems for Switch.
        </p>
      </section>

      {/* Best Sellers */}
      <section
        className="mx-auto my-10 p-8 rounded-2xl"
        style={{
          width: "min(1100px, 92%)",
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${SECTION_BORDER}`,
        }}
      >
        <div className="mb-6 pb-4" style={{ borderBottom: `1px solid rgba(230,0,18,0.3)` }}>
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
              btnBg="#ffb703"
              btnColor="#1a1a1a"
            />
          ))}
        </div>
      </section>

      {/* Nintendo Switch Games */}
      <section
        className="mx-auto my-10 p-8 rounded-2xl"
        style={{
          width: "min(1100px, 92%)",
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${SECTION_BORDER}`,
        }}
      >
        <div className="mb-6 pb-4" style={{ borderBottom: `1px solid rgba(230,0,18,0.3)` }}>
          <h2 className="text-2xl font-bold" style={{ color: ACCENT }}>
            Nintendo Switch Games
          </h2>
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
        >
          {nintendoGames.map((g) => (
            <GameCard
              key={g.title}
              title={g.title}
              platform="Nintendo"
              price={g.price}
              image=""
              storeUrl={g.storeUrl}
              cardBorder={SECTION_BORDER}
              hoverBorder={ACCENT}
              btnBg="#ffb703"
              imgHeight={130}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
