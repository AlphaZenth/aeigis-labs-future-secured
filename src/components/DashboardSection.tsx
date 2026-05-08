import ScrollReveal from "./ScrollReveal";
import { Activity, Shield, AlertTriangle, BarChart3, Cpu, Globe } from "lucide-react";

const panels = [
  { icon: Activity, label: "Network Activity", value: "2.4M tx/hr", status: "Monitoring" },
  { icon: Shield, label: "Threats Blocked", value: "847", status: "Last 24h" },
  { icon: AlertTriangle, label: "Risk Alerts", value: "12", status: "Active" },
  { icon: BarChart3, label: "Contracts Scanned", value: "1,247", status: "Today" },
  { icon: Cpu, label: "AI Processing", value: "99.8%", status: "Capacity" },
  { icon: Globe, label: "Chains Covered", value: "8", status: "Active" },
];

export default function DashboardSection() {
  return (
    <section id="dashboard" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-neon uppercase mb-3">Security Dashboard</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Command Center</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Real-time visibility into the security posture of the entire Ethereum ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-neon/10">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground tracking-wider uppercase">All Systems Operational</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono">AEGIS-SHIELD v1.0.0</span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
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

            {/* Activity bars */}
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
      </div>
    </section>
  );
}
