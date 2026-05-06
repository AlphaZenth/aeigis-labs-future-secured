import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  label: string;
}

function Counter({ end, suffix = "", label }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold neon-text">{count.toLocaleString()}{suffix}</div>
      <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{label}</div>
    </div>
  );
}

export default function useAnimatedCounter() {
  return Counter;
}
