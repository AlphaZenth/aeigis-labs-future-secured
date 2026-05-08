import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/aeigis-logo.jpg";

const links = [
  { label: "About", to: "/about" },
  { label: "Technology", to: "/technology" },
  { label: "Security", to: "/security" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Roadmap", to: "/roadmap" },
  { label: "Contact", to: "/contact" },
] as const;

const socials = [
  { label: "X / Twitter", href: "https://x.com/AegisLabsEth" },
  { label: "Telegram", href: "https://t.me/AegisLabsEth" },
  { label: "GitHub", href: "https://github.com/AegisLabs-Security" },
  { label: "Whitepaper", href: "/Aegis_Labs_Whitepaper_V0_1.pdf" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Aegis Labs" className="h-10 w-10 rounded-lg" />
              <span className="text-lg font-bold tracking-wider">
                AEGIS <span className="neon-text">LABS</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Scan Before You Trust. Protect Before You Connect. Building the security layer for Web3.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-neon transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">Community</h4>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-neon transition-colors">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-neon transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-neon transition-colors">Terms of Service</a></li>
              <li><a href="/Aegis_Labs_Whitepaper_V0_1.pdf" target="_blank" className="text-sm text-muted-foreground hover:text-neon transition-colors">Whitepaper</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2025 Aegis Labs. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Scan Before You Trust. Protect Before You Connect.</p>
        </div>
      </div>
    </footer>
  );
}
