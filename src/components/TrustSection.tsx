import { Shield, Eye, Lock, Activity, Globe, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: Eye, title: "AI Threat Detection", desc: "Machine learning models analyzing blockchain transactions in real-time" },
  { icon: Shield, title: "Smart Contract Defense", desc: "Automated vulnerability scanning and exploit prevention systems" },
  { icon: Lock, title: "Quantum-Resistant Encryption", desc: "Post-quantum cryptographic protocols for future-proof security" },
  { icon: Activity, title: "Real-Time Monitoring", desc: "24/7 automated surveillance across all Web3 networks" },
  { icon: Globe, title: "Cross-Chain Security", desc: "Unified protection across L1, L2, and cross-chain bridges" },
  { icon: Zap, title: "Autonomous Response", desc: "AI-driven incident response with zero human intervention delay" },
];

export default function TrustSection() {
  return (
    <section className="relative py-24 section-glow">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-neon uppercase mb-3">Trust Infrastructure</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Enterprise-Grade Security</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glow-card rounded-2xl p-6 h-full">
                <div className="h-12 w-12 rounded-xl bg-neon/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-neon" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
