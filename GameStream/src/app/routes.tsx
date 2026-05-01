import { createBrowserRouter } from "react-router";
import {
  HomePageLayout,
  SteamLayout,
  XboxLayout,
  PlayStationLayout,
  NintendoLayout,
  EquipmentLayout,
} from "./components/HomeLayout";
import { Home } from "./pages/Home";
import { Steam } from "./pages/Steam";
import { Xbox } from "./pages/Xbox";
import { PlayStation } from "./pages/PlayStation";
import { Nintendo } from "./pages/Nintendo";
import { Equipment } from "./pages/Equipment";
import { Login } from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: HomePageLayout,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "/steam",
    Component: SteamLayout,
    children: [{ index: true, Component: Steam }],
  },
  {
    path: "/xbox",
    Component: XboxLayout,
    children: [{ index: true, Component: Xbox }],
  },
  {
    path: "/playstation",
    Component: PlayStationLayout,
    children: [{ index: true, Component: PlayStation }],
  },
  {
    path: "/nintendo",
    Component: NintendoLayout,
    children: [{ index: true, Component: Nintendo }],
  },
  {
    path: "/equipment",
    Component: EquipmentLayout,
    children: [{ index: true, Component: Equipment }],
  },
]);
