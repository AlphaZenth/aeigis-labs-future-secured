import ScrollReveal from "./ScrollReveal";
import heroBg from "@/assets/aeigis-hero-bg.jpg";

export default function MissionSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-xs tracking-widest text-neon uppercase mb-3">Our Mission</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Building A Safer
            <br />
            <span className="neon-text">Decentralized Future</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We believe that true decentralization requires a security-first foundation. Aeigis Labs is committed to creating institutional-grade, future-proof infrastructure that protects every layer of the Ethereum ecosystem — from validators to end users.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Security First", desc: "Every design decision starts with security at its core." },
              { title: "Decentralization", desc: "Preserving the open, permissionless nature of Ethereum." },
              { title: "Future Proof", desc: "Quantum-resistant systems built for the next century." },
            ].map((v) => (
              <div key={v.title} className="glass-panel rounded-xl p-6">
                <h3 className="text-sm font-semibold text-neon mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
