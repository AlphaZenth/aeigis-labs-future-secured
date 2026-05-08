import ScrollReveal from "./ScrollReveal";

const socials = [
  { label: "X / Twitter", href: "https://x.com/AegisLabsEth", icon: "𝕏" },
  { label: "Telegram", href: "https://t.me/AegisLabsEth", icon: "✈" },
  { label: "GitHub", href: "https://github.com/AegisLabs-Security", icon: "⌨" },
  { label: "Whitepaper", href: "/Aegis_Labs_Whitepaper_V0_1.pdf", icon: "📄" },
];

export default function SocialSection() {
  return (
    <section className="relative py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-xs tracking-widest text-neon uppercase mb-3">Community</p>
            <h2 className="text-2xl font-bold">Join The Shield</h2>
            <p className="mt-2 text-muted-foreground text-sm max-w-lg mx-auto">
              Aegis Shield is not just a product. It is a movement to make Web3 safer. Join users, builders, researchers, and security contributors.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card rounded-xl px-6 py-4 flex items-center gap-3 group"
              >
                <span className="text-lg">{s.icon}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-neon transition-colors">{s.label}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
