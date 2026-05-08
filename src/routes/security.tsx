import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollReveal from "@/components/ScrollReveal";
import { Shield, Eye, Wallet, Zap, Radio, Globe, Vote, Layers, Cpu, AlertTriangle, Bot, Server } from "lucide-react";

export const Route = createFileRoute("/security")({
  component: SecurityPage,
  head: () => ({
    meta: [
      { title: "Security — Aegis Labs" },
      { name: "description", content: "Built to Detect Web3 Threats Before They Hit. Contract protection, token risk detection, wallet defense, phishing protection, approval monitoring, transaction simulation." },
      { property: "og:title", content: "Security — Aegis Labs" },
      { property: "og:description", content: "No blind trust. No unsafe clicks. No unprotected connections." },
    ],
  }),
});

const protectionLayers = [
  { icon: Shield, title: "Contract Protection", desc: "Scan smart contracts for risky permissions, suspicious functions, upgradeability risks, ownership control, and exploit indicators." },
  { icon: AlertTriangle, title: "Token Risk Detection", desc: "Identify honeypots, blacklist functions, hidden fees, mint permissions, liquidity risks, and malicious token patterns." },
  { icon: Wallet, title: "Wallet Defense", desc: "Analyze wallet exposure, reputation, suspicious activity, and risky interactions." },
  { icon: Globe, title: "Phishing Protection", desc: "Detect malicious links, fake dApps, wallet drainers, and unsafe connection attempts." },
  { icon: Eye, title: "Approval Monitoring", desc: "Find risky token approvals and exposed wallet permissions before they can be abused." },
  { icon: Zap, title: "Transaction Simulation", desc: "Preview transaction impact before signing. See exactly what will happen." },
];

function SecurityPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest text-neon uppercase mb-3">Security Stack</p>
              <h1 className="text-3xl sm:text-4xl font-bold">Built to Detect Web3 Threats Before They Hit</h1>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Aegis Shield helps identify risky contracts, malicious tokens, suspicious wallets, phishing links, dangerous approvals, and abnormal on-chain behavior.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {protectionLayers.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <div className="glow-card rounded-2xl p-6 group h-full">
                  <div className="h-12 w-12 rounded-xl bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-colors">
                    <f.icon className="h-6 w-6 text-neon" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <p className="text-lg font-semibold neon-text">No blind trust. No unsafe clicks. No unprotected connections.</p>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
