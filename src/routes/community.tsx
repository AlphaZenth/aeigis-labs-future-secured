import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollReveal from "@/components/ScrollReveal";

export const Route = createFileRoute("/community")({
  component: CommunityPage,
  head: () => ({
    meta: [
      { title: "Community — Aegis Labs" },
      { name: "description", content: "Join the Shield. Web3 needs defenders. Become one. Join users, builders, researchers, and security contributors." },
      { property: "og:title", content: "Community — Aegis Labs" },
      { property: "og:description", content: "Web3 needs defenders. Become one." },
    ],
  }),
});

const socials = [
  { label: "X / Twitter", href: "https://x.com/AegisLabsEth", icon: "𝕏", desc: "Follow us for real-time updates, threat alerts, and security insights." },
  { label: "Telegram", href: "https://t.me/AegisLabsEth", icon: "✈", desc: "Join the community for discussions, support, and early access." },
  { label: "GitHub", href: "https://github.com/AegisLabs-Security", icon: "⌨", desc: "Explore our open-source tools, SDKs, and security infrastructure." },
  { label: "Whitepaper", href: "/Aegis_Labs_Whitepaper_V0_1.pdf", icon: "📄", desc: "Read the full Aegis Labs whitepaper and security architecture." },
];

function CommunityPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest text-neon uppercase mb-3">Community</p>
              <h1 className="text-3xl sm:text-4xl font-bold">Join The Shield</h1>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Aegis Shield is not just a product. It is a movement to make Web3 safer. Join users, builders, researchers, and security contributors working together to protect the on-chain world.
              </p>
              <p className="mt-4 text-neon font-semibold">Web3 needs defenders. Become one.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socials.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-card rounded-2xl p-6 flex items-start gap-4 group block"
                >
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-neon transition-colors">{s.label}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
