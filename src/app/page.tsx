import "../styles/globals.css";
import { Hero } from "../components/Hero";
import { Vision } from "../components/Vision";
import { GenesisEmblem } from "../components/GenesisEmblem";
import { NeoWonderland } from "../components/NeoWonderland";
import { CPICoin } from "../components/CPICoin";
import { NeoSilkRoad } from "../components/NeoSilkRoad";
import { EcosystemFlywheel } from "../components/EcosystemFlywheel";
import { Roadmap } from "../components/Roadmap";
import { Community } from "../components/Community";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0C2B] to-[#1a1545]">
      <Hero />
      <Vision />
      <GenesisEmblem />
      <NeoWonderland />
      <CPICoin />
      <NeoSilkRoad />
      <EcosystemFlywheel />
      <Roadmap />
      <Community />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}