import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/aeigis-logo.jpg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Technology", to: "/technology" },
  { label: "Security", to: "/security" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Roadmap", to: "/roadmap" },
  { label: "Community", to: "/community" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel shadow-lg shadow-glow/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoImg} alt="Aegis Labs" className="h-10 w-10 rounded-lg" />
            <span className="text-lg font-bold tracking-wider text-foreground">
              AEGIS <span className="neon-text">LABS</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-neon relative group"
                activeProps={{ className: "px-3 py-2 text-sm text-neon relative group" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-neon transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="neon-btn-outline rounded-lg px-5 py-2.5 text-sm">
              Contact Team
            </Link>
            <Link to="/dashboard" className="neon-btn rounded-lg px-5 py-2.5 text-sm">
              Launch Shield
            </Link>
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

      {mobileOpen && (
        <div className="lg:hidden glass-panel border-t border-border">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-neon rounded-lg hover:bg-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Link to="/contact" className="neon-btn-outline rounded-lg px-5 py-3 text-sm text-center">Contact Team</Link>
              <Link to="/dashboard" className="neon-btn rounded-lg px-5 py-3 text-sm text-center">Launch Shield</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
