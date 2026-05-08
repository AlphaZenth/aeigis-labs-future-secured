import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollReveal from "@/components/ScrollReveal";
import { Brain, Search, Wallet, Globe, Layers, BarChart3, Zap, Lock, Shield } from "lucide-react";

export const Route = createFileRoute("/technology")({
  component: TechnologyPage,
  head: () => ({
    meta: [
      { title: "Technology — Aegis Labs" },
      { name: "description", content: "AI-Powered Security Intelligence. Smart contract scanning, wallet monitoring, threat detection in one unified engine." },
      { property: "og:title", content: "Technology — Aegis Labs" },
      { property: "og:description", content: "Security intelligence before every interaction." },
    ],
  }),
});

const modules = [
  { icon: Search, title: "Smart Contract Scanner", desc: "Static and dynamic analysis of contract bytecode for risky permissions and exploit indicators." },
  { icon: Shield, title: "Token Risk Engine", desc: "Identify honeypots, blacklist functions, hidden fees, mint permissions, and malicious token patterns." },
  { icon: Wallet, title: "Wallet Risk Intelligence", desc: "Real-time wallet reputation, risk scoring, and suspicious activity analysis." },
  { icon: Globe, title: "Phishing Detection", desc: "Detect malicious links, fake dApps, wallet drainers, and unsafe connection attempts." },
  { icon: Layers, title: "Approval Risk Monitoring", desc: "Find risky token approvals and exposed wallet permissions before they can be abused." },
  { icon: BarChart3, title: "Transaction Simulation", desc: "Preview transaction impact before signing. No blind trust." },
  { icon: Brain, title: "AI Risk Assistant", desc: "AI-powered risk explanations and security intelligence for every interaction." },
  { icon: Zap, title: "Real-Time Threat Alerts", desc: "Automated alerts for emerging threats, exploits, and suspicious on-chain behavior." },
  { icon: Lock, title: "Quantum Encryption", desc: "Post-quantum lattice-based cryptographic defense and future cryptographic readiness." },
];

function TechnologyPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest text-neon uppercase mb-3">Technology Stack</p>
              <h1 className="text-3xl sm:text-4xl font-bold">AI-Powered Security Intelligence</h1>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Aegis Shield combines AI risk analysis, on-chain intelligence, smart contract scanning, wallet monitoring, and threat detection into one unified security engine.
              </p>
              <p className="mt-2 text-neon font-semibold text-sm">Security intelligence before every interaction.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 0.08}>
                <div className="glow-card rounded-2xl p-6 group h-full">
                  <div className="h-12 w-12 rounded-xl bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-colors">
                    <m.icon className="h-6 w-6 text-neon" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
