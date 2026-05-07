import ScrollReveal from "./ScrollReveal";
import ethereumLogo from "@/assets/chains/ethereum.png";
import arbitrumLogo from "@/assets/chains/arbitrum.png";
import optimismLogo from "@/assets/chains/optimism.png";
import baseLogo from "@/assets/chains/base.png";
import polygonLogo from "@/assets/chains/polygon.png";
import zksyncLogo from "@/assets/chains/zksync.png";
import scrollLogo from "@/assets/chains/scroll.png";
import lineaLogo from "@/assets/chains/linea.png";

const chains = [
  { name: "Ethereum", logo: ethereumLogo },
  { name: "Arbitrum", logo: arbitrumLogo },
  { name: "Optimism", logo: optimismLogo },
  { name: "Base", logo: baseLogo },
  { name: "Polygon", logo: polygonLogo },
  { name: "zkSync", logo: zksyncLogo },
  { name: "Scroll", logo: scrollLogo },
  { name: "Linea", logo: lineaLogo },
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
                <div className="h-14 w-14 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img src={c.logo} alt={`${c.name} logo`} loading="lazy" width={48} height={48} className="w-12 h-12 object-contain" />
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
