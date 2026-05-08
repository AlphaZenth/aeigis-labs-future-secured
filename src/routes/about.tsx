import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollReveal from "@/components/ScrollReveal";
import shield3d from "@/assets/aeigis-shield-3d.jpg";
import { Brain, Search, ShieldCheck, Lock, Globe, Layers } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Aegis Labs" },
      { name: "description", content: "The First Line of Defense for Web3. Aegis Shield makes Web3 safer by turning complex security data into clear, actionable protection." },
      { property: "og:title", content: "About — Aegis Labs" },
      { property: "og:description", content: "Detect risk early. Understand threats clearly. Act with confidence." },
    ],
  }),
});

const cards = [
  { icon: Brain, label: "AI Security Engine" },
  { icon: Search, label: "DeFi Threat Intelligence" },
  { icon: ShieldCheck, label: "Smart Contract Scanner" },
  { icon: Lock, label: "Quantum Cryptography" },
  { icon: Globe, label: "Cross-Chain Monitoring" },
  { icon: Layers, label: "Autonomous Defense Layer" },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img src={shield3d} alt="Aegis Shield" className="rounded-2xl w-full shadow-2xl shadow-neon/10" />
                <div className="absolute inset-0 rounded-2xl border border-neon/20" />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="text-xs tracking-widest text-neon uppercase mb-3">About Aegis Labs</p>
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">The First Line of Defense for Web3</h1>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Web3 is open, fast, and powerful — but every wallet connection, token approval, smart contract, and DeFi interaction carries risk.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aegis Shield exists to make Web3 safer by turning complex security data into clear, actionable protection.
                </p>
                <p className="text-neon font-semibold mb-8">
                  Detect risk early. Understand threats clearly. Act with confidence.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cards.map((c, i) => (
                  <ScrollReveal key={c.label} delay={i * 0.05}>
                    <div className="glow-card rounded-xl p-3 text-center">
                      <c.icon className="h-5 w-5 text-neon mx-auto mb-2" />
                      <span className="text-xs text-surface-foreground font-medium">{c.label}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
