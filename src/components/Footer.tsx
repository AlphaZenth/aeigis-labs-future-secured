import logoImg from "@/assets/aeigis-logo.jpg";

const links = [
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Security", href: "#security" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "X / Twitter", href: "https://twitter.com" },
  { label: "Telegram", href: "https://t.me" },
  { label: "GitHub", href: "https://github.com" },
  { label: "GitBook", href: "https://gitbook.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Aeigis Labs" className="h-10 w-10 rounded-lg" />
              <span className="text-lg font-bold tracking-wider">
                AEIGIS <span className="neon-text">LABS</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building the next-generation defense layer for Ethereum and the decentralized future.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-neon transition-colors">{l.label}</a>
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
              <li><a href="#" className="text-sm text-muted-foreground hover:text-neon transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Aeigis Labs. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Securing The Ethereum Future</p>
        </div>
      </div>
    </footer>
  );
}
