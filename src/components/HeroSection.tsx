import { motion } from "framer-motion";
import heroBg from "@/assets/aeigis-hero-bg.jpg";
import ScrollReveal from "./ScrollReveal";
import useAnimatedCounter from "./AnimatedCounter";

const Counter = (() => {
  // We need to call the hook at component level, but our hook returns a component
  return function CounterWrapper(props: { end: number; suffix?: string; label: string }) {
    const C = useAnimatedCounter();
    return <C {...props} />;
  };
})();

const metrics = [
  { end: 500, suffix: "M+", label: "Transactions Protected" },
  { end: 1200, suffix: "+", label: "Contracts Secured" },
  { end: 99, suffix: ".99%", label: "System Uptime" },
  { end: 24, suffix: "/7", label: "AI Monitoring" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-neon animate-pulse-glow" />
            <span className="text-xs tracking-wider text-muted-foreground uppercase">AI-Powered Ethereum Security Infrastructure</span>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Securing The
            <br />
            <span className="neon-text">Ethereum Future</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered blockchain defense infrastructure for Ethereum, Layer 2 ecosystems, DeFi protocols, smart contracts, and next-generation Web3 applications.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#technology" className="neon-btn rounded-xl px-8 py-4 text-sm tracking-wider">
              Explore Technology
            </a>
            <a href="#dashboard" className="neon-btn-outline rounded-xl px-8 py-4 text-sm tracking-wider">
              Launch Dashboard
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="glass-panel rounded-xl p-4">
                <Counter {...m} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
