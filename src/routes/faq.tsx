import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — Aegis Labs" },
      { name: "description", content: "Frequently asked questions about Aegis Labs and Aegis Shield — Web3's AI-powered security layer." },
      { property: "og:title", content: "FAQ — Aegis Labs" },
      { property: "og:description", content: "Everything you need to know about Aegis Shield." },
    ],
  }),
});

const faqs = [
  { q: "What is Aegis Shield?", a: "Aegis Shield is the AI-powered security layer of Aegis Labs, built to protect users, builders, and protocols from on-chain threats before they become real losses. It covers smart contract scanning, wallet risk intelligence, phishing detection, approval monitoring, transaction simulation, and real-time threat alerts." },
  { q: "How does the Smart Contract Scanner work?", a: "The scanner analyzes contract bytecode and source code for risky permissions, suspicious functions, upgradeability risks, ownership control, and known exploit indicators using both static and dynamic analysis." },
  { q: "What is the Token Risk Engine?", a: "It identifies honeypots, blacklist functions, hidden fees, mint permissions, liquidity risks, and malicious token patterns to help users avoid unsafe tokens." },
  { q: "How does Wallet Risk Intelligence work?", a: "We analyze wallet exposure, reputation, on-chain history, suspicious activity, and risky interactions to provide a real-time risk score for any wallet address." },
  { q: "What is Aegis Quantum?", a: "Aegis Quantum is our research initiative focused on quantum-resistant encryption and post-quantum cryptographic readiness to future-proof Web3 security." },
  { q: "Is Aegis Shield free to use?", a: "Core security features like contract scanning and wallet checking will be accessible to all users. Advanced features, API access, and enterprise tools will be available through premium tiers." },
  { q: "Which chains does Aegis Shield support?", a: "Aegis Shield currently covers Ethereum, Arbitrum, Optimism, Base, Polygon, zkSync, Scroll, and Linea, with more chains being added." },
  { q: "How can I contribute to the project?", a: "Join our community on Telegram or follow us on X/Twitter. Developers can contribute via our GitHub. We also plan to launch Aegis DAO for community-powered governance and ecosystem protection." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glow-card rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="text-sm font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown className={`h-4 w-4 text-neon shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

function FAQPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest text-neon uppercase mb-3">FAQ</p>
              <h1 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h1>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <FAQItem {...f} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
