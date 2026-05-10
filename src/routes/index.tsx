import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import LoadingScreen from "@/components/LoadingScreen";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aegis Labs — Scan Before You Trust. Protect Before You Connect." },
      { name: "description", content: "Aegis Shield is the AI-powered security layer built to protect users, builders, and protocols from on-chain threats. Smart contract scanning, wallet risk intelligence, phishing detection, and real-time threat alerts." },
      { property: "og:title", content: "Aegis Labs — Web3 Security Infrastructure" },
      { property: "og:description", content: "Scan Before You Trust. Protect Before You Connect. AI-powered blockchain defense for Web3." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/aeigis-og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aegis Labs — Web3 Security Infrastructure" },
      { name: "twitter:description", content: "Scan Before You Trust. Protect Before You Connect." },
      { name: "twitter:image", content: "/images/aeigis-og.jpg" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <LoadingScreen />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <TrustSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}
