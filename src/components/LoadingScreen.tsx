import { useEffect, useState } from "react";

export default function LoadingScreen({ minDuration = 1800 }: { minDuration?: number }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / minDuration) * 100, 100);
      // Ease-out for a more cinematic feel
      const eased = 100 - Math.pow(1 - pct / 100, 2.2) * 100;
      setProgress(eased);
      if (elapsed < minDuration) {
        raf = requestAnimationFrame(tick);
      } else {
        setFadeOut(true);
        setTimeout(() => setHidden(true), 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [minDuration]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={fadeOut}
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-neon/10 blur-[140px] pointer-events-none" />

      {/* Scan line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-70 animate-scan-line" />

      <div className="relative z-10 flex flex-col items-center" style={{ perspective: "1200px" }}>
        {/* 3D rotating shield */}
        <div
          className="relative"
          style={{
            width: 200,
            height: 200,
            transformStyle: "preserve-3d",
            animation: "shieldSpin 6s linear infinite",
          }}
        >
          {/* Outer ring */}
          <div
            className="absolute inset-0 rounded-full border border-neon/40"
            style={{ transform: "rotateX(70deg)", boxShadow: "0 0 40px var(--color-glow)" }}
          />
          {/* Mid ring */}
          <div
            className="absolute inset-4 rounded-full border border-cyan/50"
            style={{ transform: "rotateX(70deg) rotateZ(45deg)" }}
          />
          {/* Vertical ring */}
          <div
            className="absolute inset-2 rounded-full border border-neon/60"
            style={{ transform: "rotateY(70deg)" }}
          />
          {/* Diagonal ring */}
          <div
            className="absolute inset-6 rounded-full border border-cyan/40"
            style={{ transform: "rotateY(60deg) rotateZ(60deg)" }}
          />

          {/* Hex core */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              width="110"
              height="110"
              viewBox="0 0 100 100"
              className="drop-shadow-[0_0_20px_var(--color-glow)]"
              style={{ animation: "hexPulse 2.4s ease-in-out infinite" }}
            >
              <defs>
                <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.78 0.18 200)" />
                  <stop offset="100%" stopColor="oklch(0.7 0.18 220)" />
                </linearGradient>
              </defs>
              <polygon
                points="50,5 90,27 90,73 50,95 10,73 10,27"
                fill="none"
                stroke="url(#hexGrad)"
                strokeWidth="2"
              />
              <polygon
                points="50,18 78,33 78,67 50,82 22,67 22,33"
                fill="none"
                stroke="url(#hexGrad)"
                strokeWidth="1"
                opacity="0.6"
              />
              <path
                d="M50 30 L65 38 V55 C65 64 58 70 50 73 C42 70 35 64 35 55 V38 Z"
                fill="url(#hexGrad)"
                opacity="0.9"
              />
              <path
                d="M44 52 L48 56 L57 46"
                stroke="oklch(0.08 0.02 250)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Wordmark */}
        <div className="mt-10 text-center">
          <div className="text-2xl sm:text-3xl font-bold tracking-[0.35em] neon-text">
            AEGIS LABS
          </div>
          <div className="mt-2 text-[10px] sm:text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Securing The Ethereum Future
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-64 sm:w-80">
          <div className="h-[2px] w-full bg-border/60 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-neon to-cyan transition-[width] duration-100 ease-out"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 12px var(--color-glow)",
              }}
            />
          </div>
          <div className="mt-3 flex justify-between text-[10px] tracking-widest uppercase text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
              Initializing Shield
            </span>
            <span className="text-neon">{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shieldSpin {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }
        @keyframes hexPulse {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
