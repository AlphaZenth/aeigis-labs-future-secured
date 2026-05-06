import ScrollReveal from "./ScrollReveal";

const chains = [
  { name: "Ethereum", color: "from-[#627EEA] to-[#627EEA]/60" },
  { name: "Arbitrum", color: "from-[#28A0F0] to-[#28A0F0]/60" },
  { name: "Optimism", color: "from-[#FF0420] to-[#FF0420]/60" },
  { name: "Base", color: "from-[#0052FF] to-[#0052FF]/60" },
  { name: "Polygon", color: "from-[#8247E5] to-[#8247E5]/60" },
  { name: "zkSync", color: "from-[#4E529A] to-[#4E529A]/60" },
  { name: "Scroll", color: "from-[#FFEEDA] to-[#FFEEDA]/60" },
  { name: "Linea", color: "from-[#61DFFF] to-[#61DFFF]/60" },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-neon uppercase mb-3">Ecosystem Coverage</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Ethereum & Layer 2 Networks</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Unified security infrastructure across the entire Ethereum ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {chains.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.06}>
              <div className="glow-card rounded-2xl p-6 text-center group cursor-default">
                <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${c.color} mx-auto mb-4 flex items-center justify-center text-foreground font-bold text-lg opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {c.name[0]}
                </div>
                <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                <div className="mt-2 h-1 w-8 mx-auto rounded-full bg-neon/30 group-hover:bg-neon/60 transition-colors" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
