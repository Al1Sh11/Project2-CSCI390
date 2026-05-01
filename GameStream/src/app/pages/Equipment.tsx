import { useState } from "react";
import { EquipmentCard } from "../components/EquipmentCard";

type EquipmentItem = {
  name: string;
  category: string;
  price: string;
  image: string;
  storeUrl: string;
  group: string;
};

const equipment: EquipmentItem[] = [
  // Controllers
  {
    name: "DualSense Edge Controller",
    category: "PlayStation",
    price: "$199.99",
    image: "https://www.glitched.online/wp-content/uploads/2022/08/06d8a7c076df3b090cf777525e61e9a65174f410-scaled-1.webp",
    storeUrl: "https://www.playstation.com/en-us/accessories/dualsense-edge-wireless-controller/",
    group: "Controllers",
  },
  {
    name: "Xbox Elite Controller Series 2",
    category: "Xbox",
    price: "$179.99",
    image: "https://compass-ssl.xbox.com/assets/c6/08/c608a38e-f60c-4dd3-b9c5-c63d84ac7e24.jpg",
    storeUrl: "https://www.xbox.com/en-US/accessories/controllers/elite-wireless-controller-series-2",
    group: "Controllers",
  },
  {
    name: "Switch Pro Controller",
    category: "Nintendo",
    price: "$69.99",
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/accessories/switch/nintendo-switch-pro-controller/a82f4657-a350-4fef-a3c2-1c07e20edd9d.png",
    storeUrl: "https://www.nintendo.com/us/store/products/nintendo-switch-pro-controller/",
    group: "Controllers",
  },
  // Consoles / Handhelds
  {
    name: "Steam Deck OLED 1TB",
    category: "Steam",
    price: "$649.99",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/steamworks_docs/english/sd_oled_header.png",
    storeUrl: "https://www.steamdeck.com/",
    group: "Consoles",
  },
  // Headsets
  {
    name: "SteelSeries Arctis Nova Pro Wireless",
    category: "Multi-Platform",
    price: "$264.99",
    image: "https://media.steelseriescdn.com/thumbs/catalogue/products/01508-arctis-nova-pro-wireless/05289d7e5c034c4fb8e4e0a59e9c714d.png.500x400_q100_crop-fit_optimize.png",
    storeUrl: "https://www.amazon.com/SteelSeries-Arctis-Wireless-Multi-System-Headset/dp/B0BHKTVDQ4",
    group: "Headsets",
  },
  // Keyboards
  {
    name: "SteelSeries Apex Pro",
    category: "PC · Keyboard",
    price: "$199.99",
    image: "https://media.steelseriescdn.com/thumbs/catalogue/products/01508-apex-pro-tkl-wireless/05289d7e5c034c4fb8e4e0a59e9c714d.png.500x400_q100_crop-fit_optimize.png",
    storeUrl: "https://www.amazon.com/SteelSeries-Apex-Mechanical-Gaming-Keyboard/dp/B07SVJJCP3",
    group: "Keyboards",
  },
  // GPUs
  {
    name: "NVIDIA RTX 5060",
    category: "PC · GPU",
    price: "$549.99",
    image: "https://cdn.mos.cms.futurecdn.net/dSpCAA8gtHhyViqJp59MoN.jpg",
    storeUrl: "https://www.amazon.com/GIGABYTE-GeForce-WINDFORCE-Graphics-GV-N5060WF2OC-8GD/dp/B0F8LDHQ7Y",
    group: "GPU",
  },
  {
    name: "NVIDIA RTX 4050",
    category: "PC · GPU",
    price: "$549.99",
    image: "https://www.custompc.com/wp-content/uploads/2023/08/nvidia-geforce-rtx-4050-release-date-specs-price-rumors.jpg",
    storeUrl: "https://www.amazon.com/rtx-4050/s?k=rtx+4050",
    group: "GPU",
  },
  {
    name: "AMD Radeon RX 7900 XTX",
    category: "PC · GPU",
    price: "$1,334.00",
    image: "https://www.amd.com/content/dam/amd/en/images/products/graphics/rx-7900/rx-7900xtx-product.png",
    storeUrl: "https://www.amazon.com/amd-radeon-rx-7900-xtx/s?k=amd+radeon+rx+7900+xtx",
    group: "GPU",
  },
  {
    name: "AMD Radeon RX 7800 XT",
    category: "PC · GPU",
    price: "$599.99",
    image: "https://www.amd.com/content/dam/amd/en/images/products/graphics/rx-7800/rx-7800-xt-product.png",
    storeUrl: "https://www.amazon.com/rx-7800-xt/s?k=rx+7800+xt",
    group: "GPU",
  },
  // CPUs
  {
    name: "AMD Ryzen 7 9800X3D",
    category: "PC · CPU",
    price: "$449.99",
    image: "https://elchapuzasinformatico.com/wp-content/uploads/2024/10/AMD-Ryzen-7-9800X3D-1.jpg",
    storeUrl: "https://www.amazon.com/AMD-9800X3D-16-Thread-Desktop-Processor/dp/B0DKFMSMYK",
    group: "CPU",
  },
  {
    name: "AMD Ryzen 9 9950X",
    category: "PC · CPU",
    price: "$519.99",
    image: "https://cdn.wccftech.com/wp-content/uploads/2024/07/AMD-Ryzen-9-9900X-12-Core-Zen-5-Desktop-CPU.jpg",
    storeUrl: "https://www.amazon.com/AMD-RyzenTM-9950X-32-Thread-Processor/dp/B0D6NNRBGP",
    group: "CPU",
  },
  {
    name: "AMD Ryzen 5 7600",
    category: "PC · CPU",
    price: "$179.98",
    image: "https://www.notebookcheck.net/fileadmin/Notebooks/AMD/Ryzen_5_7600/ryzen_5_7600.png",
    storeUrl: "https://www.amazon.com/AMD-7600-12-Thread-Unlocked-Processor/dp/B0BMQJWBDM",
    group: "CPU",
  },
  {
    name: "Intel Core i9 13th Gen",
    category: "PC · CPU",
    price: "$589.99",
    image: "https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-11/core-i9-13th-gen-thumbnail.jpg",
    storeUrl: "https://www.amazon.com/Intel-i9-13900K-Desktop-Processor-P-cores/dp/B0BCF54SR1",
    group: "CPU",
  },
  {
    name: "Intel Core i7 11th Gen",
    category: "PC · CPU",
    price: "$205.88",
    image: "https://www.intel.com/content/dam/www/central-libraries/us/en/images/2021-03/core-i7-11th-gen.jpg",
    storeUrl: "https://www.amazon.com/i7-11th-gen/s?k=i7+11th+gen",
    group: "CPU",
  },
  // RAM
  {
    name: "Corsair Vengeance LED 32GB",
    category: "PC · RAM",
    price: "$154.99",
    image: "https://www.corsair.com/medias/sys_master/images/images/h7c/h53/8798802059294/CMU32GX4M2C3200C16B-Gallery-CMU32GX4M2C3200C16B-02.png",
    storeUrl: "https://www.amazon.com/Corsair-VENGEANCE-3200MHz-Compatible-Computer/dp/B081XWLQKS",
    group: "RAM",
  },
  {
    name: "G.Skill Trident Z RGB DC",
    category: "PC · RAM",
    price: "$174.99",
    image: "https://img.gskill.com/product/2/170/170-1.png",
    storeUrl: "https://www.amazon.com/G-SKILL-Trident-CL18-22-22-42-Computer-F4-3600C18D-64GTZR/dp/B087T7DWSN",
    group: "RAM",
  },
  {
    name: "Kingston HyperX Fury 16GB",
    category: "PC · RAM",
    price: "$44.99",
    image: "https://www.kingston.com/dataSheets/HX426C16FB3K2_16_en.pdf",
    storeUrl: "https://www.amazon.com/kingston-hyperx-fury/s?k=kingston+hyperx+fury",
    group: "RAM",
  },
  // Cases
  {
    name: "Corsair 5000D Airflow",
    category: "PC · Case",
    price: "$249.99",
    image: "https://www.corsair.com/medias/sys_master/images/images/h92/hce/9115832049694/CC-9011210-WW-Gallery-Corsair-5000D-AIRFLOW-Tempered-Glass-Mid-Tower-ATX-PC-Case-02.jpg",
    storeUrl: "https://www.amazon.com/CORSAIR-5400-Triple-Chamber-Mid-Tower-Panoramic/dp/B0FJ8SWG15",
    group: "Cases",
  },
  {
    name: "Fractal Meshify 3",
    category: "PC · Case",
    price: "$144.99",
    image: "https://www.fractal-design.com/app/uploads/2024/01/Meshify_3-2.jpg",
    storeUrl: "https://www.amazon.com/Fractal-Design-Meshify-Black-Solid/dp/B0CS3T22P8",
    group: "Cases",
  },
  {
    name: "NZXT H7 Flow",
    category: "PC · Case",
    price: "$99.99",
    image: "https://nzxt.com/assets/cms/34482/1674683808-h7-flow-2024-main-mid-tower-atx-pc-gaming-case.png",
    storeUrl: "https://www.amazon.com/NZXT-Flow-2024-Pre-Installed-CM-H72FB-01/dp/B0CV4R1TWS",
    group: "Cases",
  },
];

const groups = ["All", "Controllers", "Consoles", "Headsets", "Keyboards", "GPU", "CPU", "RAM", "Cases"];

export function Equipment() {
  const [activeGroup, setActiveGroup] = useState("All");

  const filtered =
    activeGroup === "All" ? equipment : equipment.filter((e) => e.group === activeGroup);

  return (
    <main>
      {/* Hero */}
      <section
        className="mx-auto mt-10 px-10 py-16 rounded-2xl text-center"
        style={{
          width: "min(1100px, 92%)",
          background:
            "linear-gradient(135deg, rgba(157,78,221,0.15), rgba(255,183,3,0.1)), rgba(255,255,255,0.03)",
          border: "1px solid rgba(157,78,221,0.3)",
        }}
      >
        <h1 className="mb-4" style={{ color: "#9d4edd", fontSize: "2.5rem", fontWeight: 800 }}>
          Gaming Equipment
        </h1>
        <p className="text-lg" style={{ color: "#bfc7e6" }}>
          Level up your setup with the best controllers, consoles, peripherals, and PC components.
        </p>
      </section>

      {/* Category Filter */}
      <div
        className="mx-auto my-6 px-6 py-4 rounded-2xl flex gap-3 flex-wrap items-center"
        style={{
          width: "min(1100px, 92%)",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span className="text-sm font-semibold" style={{ color: "#bfc7e6" }}>
          Filter:
        </span>
        {groups.map((g) => (
          <button
            key={g}
            onClick={() => setActiveGroup(g)}
            className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 border"
            style={{
              background: activeGroup === g ? "#ffb703" : "rgba(255,255,255,0.05)",
              color: activeGroup === g ? "#1a1a1a" : "#bfc7e6",
              borderColor: activeGroup === g ? "#ffb703" : "rgba(255,255,255,0.15)",
              cursor: "pointer",
            }}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Equipment Grid */}
      <section
        className="mx-auto my-6 p-8 rounded-2xl"
        style={{
          width: "min(1100px, 92%)",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="flex items-center gap-3 mb-6 pb-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <span
            className="inline-grid place-items-center rounded-lg text-sm"
            style={{ width: 32, height: 32, background: "#ffb703", color: "#1a1a1a" }}
          >
            🎮
          </span>
          <h2 className="text-2xl font-bold" style={{ color: "#f5f7ff" }}>
            {activeGroup === "All" ? "All Equipment" : activeGroup}
            <span className="text-base font-normal ml-2" style={{ color: "#bfc7e6" }}>
              ({filtered.length} items)
            </span>
          </h2>
        </div>
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
        >
          {filtered.map((item) => (
            <EquipmentCard key={item.name} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
