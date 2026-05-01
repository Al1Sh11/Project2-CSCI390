import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageLayoutProps {
  background: string;
  activeColor?: string;
  footerAccent?: string;
}

export function PageLayout({ background, activeColor, footerAccent }: PageLayoutProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background,
        backgroundAttachment: "fixed",
        color: "#f5f7ff",
      }}
    >
      <Navbar activeColor={activeColor} />
      <Outlet />
      <Footer accentColor={footerAccent} />
    </div>
  );
}

export function HomePageLayout() {
  return (
    <PageLayout
      background="radial-gradient(circle at 10% 10%, #243b71 0%, transparent 35%), radial-gradient(circle at 90% 20%, #9d4edd 0%, transparent 30%), linear-gradient(120deg, #0b132b, #1c2541)"
      activeColor="#ffb703"
      footerAccent="#ffb703"
    />
  );
}

export function SteamLayout() {
  return (
    <PageLayout
      background="radial-gradient(circle at 10% 10%, #1b2838 0%, transparent 35%), radial-gradient(circle at 90% 20%, #2a475e 0%, transparent 30%), linear-gradient(120deg, #0b132b, #1b2838)"
      activeColor="#66c0f4"
      footerAccent="#66c0f4"
    />
  );
}

export function XboxLayout() {
  return (
    <PageLayout
      background="radial-gradient(circle at 10% 10%, #06451c 0%, transparent 35%), radial-gradient(circle at 90% 20%, #1be36b 0%, transparent 30%), linear-gradient(120deg, #0b132b, #1c2541)"
      activeColor="#1be36b"
      footerAccent="#1be36b"
    />
  );
}

export function PlayStationLayout() {
  return (
    <PageLayout
      background="radial-gradient(circle at 10% 10%, #5cb0ad 0%, transparent 35%), radial-gradient(circle at 90% 20%, #2c64a1 0%, transparent 30%), linear-gradient(120deg, #0b132b, #1c2541)"
      activeColor="#4bb4ff"
      footerAccent="#4bb4ff"
    />
  );
}

export function NintendoLayout() {
  return (
    <PageLayout
      background="radial-gradient(circle at 10% 10%, #e60012 0%, transparent 35%), radial-gradient(circle at 90% 20%, #8b0000 0%, transparent 30%), linear-gradient(120deg, #0b132b, #1c2541)"
      activeColor="#ff4d4d"
      footerAccent="#ff4d4d"
    />
  );
}

export function EquipmentLayout() {
  return (
    <PageLayout
      background="radial-gradient(circle at 10% 10%, #243b71 0%, transparent 35%), radial-gradient(circle at 90% 20%, #9d4edd 0%, transparent 30%), linear-gradient(120deg, #0b132b, #1c2541)"
      activeColor="#9d4edd"
      footerAccent="#9d4edd"
    />
  );
}
