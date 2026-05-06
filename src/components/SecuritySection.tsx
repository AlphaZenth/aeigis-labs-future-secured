import { Shield, Eye, Wallet, Zap, Radio, Globe, Vote, Layers, Cpu, AlertTriangle, Bot, Server } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Shield, title: "Smart Contract Threat Scanner" },
  { icon: Eye, title: "AI Transaction Monitoring" },
  { icon: Wallet, title: "Wallet Behavior Analytics" },
  { icon: Zap, title: "Flash Loan Attack Detection" },
  { icon: Radio, title: "Oracle Manipulation Detection" },
  { icon: Globe, title: "Cross-Chain Bridge Security" },
  { icon: Vote, title: "Governance Attack Prevention" },
  { icon: Layers, title: "Layer 2 Threat Intelligence" },
  { icon: Cpu, title: "MEV Protection Systems" },
  { icon: AlertTriangle, title: "Real-Time Exploit Mitigation" },
  { icon: Bot, title: "Autonomous Threat Response" },
  { icon: Server, title: "Infrastructure Monitoring" },
];

export default function SecuritySection() {
  return (
    <section id="security" className="relative py-24 section-glow">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-neon uppercase mb-3">Security Stack</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Comprehensive Defense Systems</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.05}>
              <div className="glow-card rounded-xl p-5 group h-full flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-lg bg-neon/10 flex items-center justify-center mb-3 group-hover:bg-neon/20 transition-colors">
                  <f.icon className="h-5 w-5 text-neon" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-foreground leading-tight">{f.title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
