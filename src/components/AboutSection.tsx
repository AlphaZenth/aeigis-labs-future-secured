import shield3d from "@/assets/aeigis-shield-3d.jpg";
import ScrollReveal from "./ScrollReveal";
import { Brain, Search, ShieldCheck, Lock, Globe, Layers } from "lucide-react";

const cards = [
  { icon: Brain, label: "AI Security Engine" },
  { icon: Search, label: "DeFi Threat Intelligence" },
  { icon: ShieldCheck, label: "Smart Contract Scanner" },
  { icon: Lock, label: "Quantum Cryptography" },
  { icon: Globe, label: "Cross-Chain Monitoring" },
  { icon: Layers, label: "Autonomous Defense Layer" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <img
                src={shield3d}
                alt="Aeigis Shield"
                className="rounded-2xl w-full shadow-2xl shadow-neon/10"
              />
              <div className="absolute inset-0 rounded-2xl border border-neon/20" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-xs tracking-widest text-neon uppercase mb-3">About Aeigis Labs</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Building The Next-Generation Defense Layer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aeigis Labs is building the most advanced security infrastructure for Ethereum, Layer 2 networks, DeFi protocols, smart contracts, and Web3 applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our platform combines AI-powered threat intelligence, real-time blockchain monitoring, quantum-resistant cryptography, and autonomous incident response to create a future-proof security foundation for decentralized systems.
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
      </div>
    </section>
  );
}
