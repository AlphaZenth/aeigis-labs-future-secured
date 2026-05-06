import { useState, useRef, useEffect } from "react";
import heroBg from "@/assets/aeigis-hero-bg.jpg";

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold neon-text">{count.toLocaleString()}{suffix}</div>
      <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{label}</div>
    </div>
  );
}

const metrics = [
  { end: 500, suffix: "M+", label: "Transactions Protected" },
  { end: 1200, suffix: "+", label: "Contracts Secured" },
  { end: 99, suffix: ".99%", label: "System Uptime" },
  { end: 24, suffix: "/7", label: "AI Monitoring" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <div className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="h-2 w-2 rounded-full bg-neon animate-pulse" />
          <span className="text-xs tracking-wider text-muted-foreground uppercase">AI-Powered Ethereum Security Infrastructure</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Securing The
          <br />
          <span className="neon-text">Ethereum Future</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.5s" }}>
          AI-powered blockchain defense infrastructure for Ethereum, Layer 2 ecosystems, DeFi protocols, smart contracts, and next-generation Web3 applications.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <a href="#technology" className="neon-btn rounded-xl px-8 py-4 text-sm tracking-wider">
            Explore Technology
          </a>
          <a href="#dashboard" className="neon-btn-outline rounded-xl px-8 py-4 text-sm tracking-wider">
            Launch Dashboard
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: "0.9s" }}>
          {metrics.map((m) => (
            <div key={m.label} className="glass-panel rounded-xl p-4">
              <Counter {...m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
