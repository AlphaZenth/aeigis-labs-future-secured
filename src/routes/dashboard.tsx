import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollReveal from "@/components/ScrollReveal";
import { Activity, Shield, AlertTriangle, BarChart3, Cpu, Globe, Eye, Wallet, Zap, FileText } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — Aegis Labs" },
      { name: "description", content: "Aegis Shield Command Center. Real-time visibility into wallet risk, contract exposure, token threats, phishing activity, and on-chain security alerts." },
      { property: "og:title", content: "Dashboard — Aegis Labs" },
      { property: "og:description", content: "See the risk. Read the signal. Move safer." },
    ],
  }),
});

const panels = [
  { icon: BarChart3, label: "Contracts Scanned", value: "1,247", status: "Today" },
  { icon: Wallet, label: "Wallets Checked", value: "3,891", status: "Today" },
  { icon: AlertTriangle, label: "Threats Detected", value: "847", status: "Last 24h" },
  { icon: Shield, label: "Tokens Analyzed", value: "12,430", status: "Total" },
  { icon: Activity, label: "Risk Alerts", value: "156", status: "Active" },
  { icon: Eye, label: "Approvals Monitored", value: "8,921", status: "Active" },
  { icon: Globe, label: "Phishing Links Flagged", value: "2,341", status: "Total" },
  { icon: Cpu, label: "AI Risk Reports", value: "4,567", status: "Generated" },
  { icon: Zap, label: "Chains Covered", value: "8", status: "Active" },
  { icon: FileText, label: "System Status", value: "99.99%", status: "Uptime" },
];

function DashboardPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest text-neon uppercase mb-3">Security Dashboard</p>
              <h1 className="text-3xl sm:text-4xl font-bold">Aegis Shield Command Center</h1>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Real-time visibility into wallet risk, contract exposure, token threats, phishing activity, approval permissions, and on-chain security alerts.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-neon/10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground tracking-wider uppercase">All Systems Operational</span>
                </div>
                <span className="text-xs text-muted-foreground font-mono">AEGIS-SHIELD v1.0.0</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {panels.map((p) => (
                  <div key={p.label} className="glow-card rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <p.icon className="h-4 w-4 text-neon" />
                      <span className="text-xs text-muted-foreground">{p.label}</span>
                    </div>
                    <div className="text-xl font-bold text-foreground">{p.value}</div>
                    <div className="text-[10px] text-neon/70 mt-1 tracking-wider uppercase">{p.status}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {["Ethereum Mainnet", "Arbitrum One", "Base", "Optimism"].map((chain, i) => (
                  <div key={chain} className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground w-32 shrink-0">{chain}</span>
                    <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon to-cyan transition-all duration-1000"
                        style={{ width: `${85 - i * 12}%` }}
                      />
                    </div>
                    <span className="text-xs text-neon font-mono w-12 text-right">{85 - i * 12}%</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-lg font-semibold neon-text">See the risk. Read the signal. Move safer.</p>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
