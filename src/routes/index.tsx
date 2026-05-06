import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import TechnologySection from "@/components/TechnologySection";
import EcosystemSection from "@/components/EcosystemSection";
import SecuritySection from "@/components/SecuritySection";
import DashboardSection from "@/components/DashboardSection";
import RoadmapSection from "@/components/RoadmapSection";
import MissionSection from "@/components/MissionSection";
import SocialSection from "@/components/SocialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

export const Route = createFileRoute("/")({
  ssr: false,
  component: Index,
  head: () => ({
    meta: [
      { title: "Aeigis Labs — Ethereum & AI Security Infrastructure" },
      {
        name: "description",
        content:
          "Aeigis Labs provides AI-powered Ethereum security infrastructure, smart contract defense, Layer 2 monitoring, real-time blockchain threat intelligence, and quantum-resistant Web3 cybersecurity systems.",
      },
      { name: "keywords", content: "Ethereum Security, DeFi Security, AI Blockchain Security, Smart Contract Protection, Layer 2 Security, Web3 Cybersecurity, Cross-Chain Security, Quantum Resistant Crypto Security" },
      { property: "og:title", content: "Aeigis Labs — Ethereum & AI Security Infrastructure" },
      { property: "og:description", content: "AI-powered blockchain defense infrastructure for Ethereum, Layer 2 ecosystems, DeFi protocols, and smart contracts." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/aeigis-og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aeigis Labs — Ethereum & AI Security Infrastructure" },
      { name: "twitter:description", content: "Securing The Ethereum Future with AI-powered defense infrastructure." },
      { name: "twitter:image", content: "/images/aeigis-og.jpg" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <TechnologySection />
        <EcosystemSection />
        <SecuritySection />
        <DashboardSection />
        <RoadmapSection />
        <MissionSection />
        <SocialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
