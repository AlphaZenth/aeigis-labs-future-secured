import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollReveal from "@/components/ScrollReveal";

export const Route = createFileRoute("/roadmap")({
  component: RoadmapPage,
  head: () => ({
    meta: [
      { title: "Roadmap — Aegis Labs" },
      { name: "description", content: "Aegis Labs development timeline. From Shield Foundation to DAO & Global Security Network." },
      { property: "og:title", content: "Roadmap — Aegis Labs" },
      { property: "og:description", content: "Building the future of Web3 security, phase by phase." },
    ],
  }),
});

const phases = [
  { phase: "Phase 1", title: "Shield Foundation", desc: "Launch brand, website, whitepaper, community, and Aegis Shield security framework." },
  { phase: "Phase 2", title: "Security MVP", desc: "Release contract scanner, wallet checker, token risk engine, phishing detection, and risk scoring." },
  { phase: "Phase 3", title: "AI Risk Intelligence", desc: "Deploy AI risk assistant, AI contract explanation, automated alerts, and security dashboard." },
  { phase: "Phase 4", title: "DeFi & Launch Integration", desc: "Connect Aegis Shield with Aegis Vault, Aegis Launch, and verified ecosystem products." },
  { phase: "Phase 5", title: "Developer Infrastructure", desc: "Release APIs, SDKs, threat intelligence feeds, and protocol security integrations." },
  { phase: "Phase 6", title: "Quantum-Ready Security", desc: "Expand post-quantum research, quantum-resistant encryption frameworks, and future cryptographic readiness." },
  { phase: "Phase 7", title: "DAO & Global Security Network", desc: "Launch community governance, threat reporting, ecosystem grants, and decentralized security coordination." },
];

function RoadmapPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest text-neon uppercase mb-3">Roadmap</p>
              <h1 className="text-3xl sm:text-4xl font-bold">Development Timeline</h1>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/50 via-neon/20 to-transparent" />

            <div className="space-y-12">
              {phases.map((p, i) => (
                <ScrollReveal key={p.phase} delay={i * 0.1}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-neon shadow-lg shadow-neon/50 z-10" />
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <div className="glow-card rounded-2xl p-6">
                        <span className="text-xs text-neon font-mono tracking-wider">{p.phase}</span>
                        <h3 className="text-lg font-semibold text-foreground mt-2">{p.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
