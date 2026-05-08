import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollReveal from "@/components/ScrollReveal";
import { Brain, Shield, Vault, Rocket, Cpu, Lock, Users } from "lucide-react";

export const Route = createFileRoute("/ecosystem")({
  component: EcosystemPage,
  head: () => ({
    meta: [
      { title: "Ecosystem — Aegis Labs" },
      { name: "description", content: "The Security Gateway of Aegis Labs. One ecosystem. One mission. Guard the future of Web3." },
      { property: "og:title", content: "Ecosystem — Aegis Labs" },
      { property: "og:description", content: "One ecosystem. One mission. Guard the future of Web3." },
    ],
  }),
});

const products = [
  { icon: Brain, title: "Aegis AI", desc: "AI-powered risk explanations and security intelligence." },
  { icon: Shield, title: "Aegis Audit", desc: "Smart contract audits, protocol reviews, and verification standards." },
  { icon: Vault, title: "Aegis Vault", desc: "Security-first DeFi, staking, and risk-rated vaults." },
  { icon: Rocket, title: "Aegis Launch", desc: "Verified launches for projects that meet stronger security standards." },
  { icon: Cpu, title: "Aegis Core", desc: "APIs, SDKs, and security infrastructure for builders." },
  { icon: Lock, title: "Aegis Quantum", desc: "Quantum-resistant encryption research and post-quantum security readiness." },
  { icon: Users, title: "Aegis DAO", desc: "Community-powered governance, reporting, and ecosystem protection." },
];

function EcosystemPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest text-neon uppercase mb-3">Ecosystem</p>
              <h1 className="text-3xl sm:text-4xl font-bold">The Security Gateway of Aegis Labs</h1>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Aegis Shield is the protection layer powering the wider Aegis Labs ecosystem. It connects with:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="glow-card rounded-2xl p-6 group h-full">
                  <div className="h-12 w-12 rounded-xl bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-colors">
                    <p.icon className="h-6 w-6 text-neon" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <p className="text-lg font-semibold neon-text">One ecosystem. One mission. Guard the future of Web3.</p>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
