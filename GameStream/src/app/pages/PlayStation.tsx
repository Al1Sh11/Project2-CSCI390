import { FeaturedCard } from "../components/FeaturedCard";
import { GameCard } from "../components/GameCard";

const ACCENT = "#4bb4ff";
const PLACEHOLDER_BG = "linear-gradient(135deg, #003791, #0049b7)";
const SECTION_BG = "rgba(37,168,239,0.08)";
const SECTION_BORDER = "rgba(89,171,238,0.3)";

const featured = [
  {
    title: "ASTRO BOT",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/none/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/astro-bot/",
  },
  {
    title: "Ghost of Yōtei",
    price: "$69.99",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202407/1517/b6b0c9f18254827b4f1ee2a3a1a12e42f0fb14a1ba2be5b3.png",
    storeUrl: "https://www.playstation.com/en-us/games/ghost-of-yotei/",
  },
  {
    title: "Death Stranding 2: On the Beach",
    price: "$69.99",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202312/0614/0f25b5cd9cbc8e4a8e4be4cc6efc6cb6d32b9e7c849c74ab.png",
    storeUrl: "https://www.playstation.com/en-us/games/death-stranding-2-on-the-beach/",
  },
];

const psGames = [
  {
    title: "Helldivers 2",
    price: "$39.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/helldivers-2/",
  },
  {
    title: "Horizon Forbidden West",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/horizon-forbidden-west/",
  },
  {
    title: "The Last of Us Part I",
    price: "$49.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/the-last-of-us-part-i/",
  },
  {
    title: "Ratchet & Clank: Rift Apart",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1895840/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/ratchet-and-clank-rift-apart/",
  },
  {
    title: "God of War Ragnarök",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/god-of-war-ragnarok/",
  },
  {
    title: "Marvel's Spider-Man 2",
    price: "$69.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2528590/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
  },
  {
    title: "Stellar Blade",
    price: "$69.99",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202310/2501/1e2e83ccf76d4e86e3caa7b80c3543fd2cf9a8bbb4aadf5a.png",
    storeUrl: "https://www.playstation.com/en-us/games/stellar-blade/",
  },
  {
    title: "Gran Turismo 7",
    price: "$29.99",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202109/2918/3ULFKP58P7AXHBH26ZCuR3tZ.png",
    storeUrl: "https://www.playstation.com/en-us/games/gran-turismo-7/",
  },
  {
    title: "Days Gone Remastered",
    price: "$49.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1259420/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/days-gone/",
  },
  {
    title: "Demon's Souls",
    price: "$59.99",
    image: "https://image.api.playstation.com/vulcan/img/rnd/202010/0618/VByNEMSwmO83FsS2gnbCzqFI.png",
    storeUrl: "https://www.playstation.com/en-us/games/demons-souls/",
  },
  {
    title: "Marvel's Spider-Man: Miles Morales",
    price: "$49.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/marvels-spider-man-miles-morales/",
  },
  {
    title: "Returnal",
    price: "$49.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1649240/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/returnal/",
  },
  {
    title: "Rise of the Ronin",
    price: "$69.99",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202309/2108/b40c3dc8f99c57c9cdddf6d9b5d97f3cde0b6b9a1f26c7ac.png",
    storeUrl: "https://www.playstation.com/en-us/games/rise-of-the-ronin/",
  },
  {
    title: "Ghost of Tsushima Director's Cut",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/ghost-of-tsushima/",
  },
  {
    title: "Final Fantasy XVI",
    price: "$49.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2515020/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
  },
  {
    title: "UNCHARTED Legacy Collection",
    price: "$49.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1659420/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/uncharted-legacy-of-thieves-collection/",
  },
  {
    title: "Until Dawn",
    price: "$59.99",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2172010/header.jpg",
    storeUrl: "https://www.playstation.com/en-us/games/until-dawn/",
  },
];

export function PlayStation() {
  return (
    <main>
      {/* Hero */}
      <section
        className="mx-auto mt-10 px-10 py-16 rounded-2xl text-center"
        style={{
          width: "min(1100px, 92%)",
          background: "linear-gradient(135deg, rgba(37,168,239,0.15), rgba(54,196,214,0.3))",
          border: `1px solid ${SECTION_BORDER}`,
        }}
      >
        <h1 className="mb-4" style={{ color: ACCENT, fontSize: "2.5rem", fontWeight: 800 }}>
          PlayStation eShop
        </h1>
        <p className="text-lg" style={{ color: "#bfc7e6" }}>
          Dive into the world of PlayStation with blockbuster titles and unforgettable gaming experiences.
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

      {/* PlayStation Games */}
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
            PlayStation Games
          </h2>
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
        >
          {psGames.map((g) => (
            <GameCard
              key={g.title}
              title={g.title}
              platform="PlayStation"
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
