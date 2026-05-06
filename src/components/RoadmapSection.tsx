import ScrollReveal from "./ScrollReveal";

const phases = [
  { phase: "Phase 1", title: "Core Infrastructure Launch", desc: "Foundation of the Aeigis security platform and initial Ethereum mainnet integration." },
  { phase: "Phase 2", title: "AI Threat Intelligence", desc: "Deployment of neural network-based threat detection and behavioral analysis models." },
  { phase: "Phase 3", title: "Ethereum & L2 Expansion", desc: "Full integration with Arbitrum, Optimism, Base, Polygon, and emerging rollups." },
  { phase: "Phase 4", title: "Cross-Chain Security", desc: "Unified security layer across bridges, interoperability protocols, and multi-chain DeFi." },
  { phase: "Phase 5", title: "Quantum-Resistant Cryptography", desc: "Implementation of post-quantum lattice-based cryptographic defense systems." },
  { phase: "Phase 6", title: "Institutional Security Suite", desc: "Enterprise-grade compliance, auditing, and institutional custody security tools." },
  { phase: "Phase 7", title: "Global Web3 Defense Network", desc: "Decentralized security mesh network protecting the entire Web3 ecosystem." },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 section-glow">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-neon uppercase mb-3">Roadmap</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Development Timeline</h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/50 via-neon/20 to-transparent" />

          <div className="space-y-12">
            {phases.map((p, i) => (
              <ScrollReveal key={p.phase} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-neon shadow-lg shadow-neon/50 z-10" />

                  {/* Content */}
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
      </div>
    </section>
  );
}
