import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/aeigis-logo.jpg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Security", href: "#security" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel shadow-lg shadow-glow/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img src={logoImg} alt="Aeigis Labs" className="h-10 w-10 rounded-lg" />
            <span className="text-lg font-bold tracking-wider text-foreground">
              AEIGIS <span className="neon-text">LABS</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-neon relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-neon transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="neon-btn-outline rounded-lg px-5 py-2.5 text-sm">
              Contact Team
            </a>
            <a href="#dashboard" className="neon-btn rounded-lg px-5 py-2.5 text-sm">
              Launch App
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel border-t border-border"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-muted-foreground hover:text-neon rounded-lg hover:bg-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <a href="#contact" className="neon-btn-outline rounded-lg px-5 py-3 text-sm text-center">Contact Team</a>
                <a href="#dashboard" className="neon-btn rounded-lg px-5 py-3 text-sm text-center">Launch App</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
