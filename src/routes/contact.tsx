import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MessageSquare, Github } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Aegis Labs" },
      { name: "description", content: "Get in touch with Aegis Labs. Partner with us to secure the future of Web3." },
      { property: "og:title", content: "Contact — Aegis Labs" },
      { property: "og:description", content: "Protect The Future of Web3. Contact Aegis Labs." },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest text-neon uppercase mb-3">Contact</p>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Protect The Future <span className="neon-text">Of Web3</span>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Secure your protocol, infrastructure, smart contracts, and users with next-generation AI-powered blockchain defense systems.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <ScrollReveal delay={0.1}>
              <a href="https://x.com/AegisLabsEth" target="_blank" rel="noopener noreferrer" className="glow-card rounded-2xl p-6 text-center group block">
                <MessageSquare className="h-8 w-8 text-neon mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-foreground group-hover:text-neon transition-colors">X / Twitter</h3>
                <p className="text-xs text-muted-foreground mt-1">@AegisLabsEth</p>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a href="https://t.me/AegisLabsEth" target="_blank" rel="noopener noreferrer" className="glow-card rounded-2xl p-6 text-center group block">
                <Mail className="h-8 w-8 text-neon mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-foreground group-hover:text-neon transition-colors">Telegram</h3>
                <p className="text-xs text-muted-foreground mt-1">@AegisLabsEth</p>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a href="https://github.com/AegisLabs-Security" target="_blank" rel="noopener noreferrer" className="glow-card rounded-2xl p-6 text-center group block">
                <Github className="h-8 w-8 text-neon mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-foreground group-hover:text-neon transition-colors">GitHub</h3>
                <p className="text-xs text-muted-foreground mt-1">AegisLabs-Security</p>
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center">
              <a href="/Aegis_Labs_Whitepaper_V0_1.pdf" target="_blank" className="neon-btn rounded-xl px-8 py-4 text-sm tracking-wider inline-block">
                Download Whitepaper
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
