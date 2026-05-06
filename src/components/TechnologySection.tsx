import { Brain, Search, Wallet, Globe, Layers, BarChart3, Zap, Lock, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const modules = [
  { icon: Brain, title: "AI Detection Engine", desc: "Neural network-based anomaly detection across EVM chains" },
  { icon: Search, title: "Smart Contract Scanner", desc: "Static and dynamic analysis of contract bytecode" },
  { icon: Wallet, title: "Wallet Risk Intelligence", desc: "Real-time wallet reputation and risk scoring" },
  { icon: Globe, title: "Cross-Chain Monitoring", desc: "Unified security layer across bridges and rollups" },
  { icon: Layers, title: "Layer 2 Security Engine", desc: "Specialized protection for rollup ecosystems" },
  { icon: BarChart3, title: "Threat Analytics", desc: "Real-time dashboards and predictive threat modeling" },
  { icon: Zap, title: "Autonomous Response", desc: "Automated incident containment and remediation" },
  { icon: Lock, title: "Quantum Encryption", desc: "Post-quantum lattice-based cryptographic defense" },
  { icon: Shield, title: "Infrastructure Defense", desc: "Node, validator, and RPC endpoint protection" },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative py-24 section-glow">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-neon uppercase mb-3">Technology Stack</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Security Architecture</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A modular, AI-first security infrastructure designed for the Ethereum ecosystem.
            </p>
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
      </div>
    </section>
  );
}
