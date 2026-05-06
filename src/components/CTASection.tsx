import ScrollReveal from "./ScrollReveal";
import heroBg from "@/assets/aeigis-hero-bg.jpg";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Protect The Future
            <br />
            <span className="neon-text">Of Ethereum</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Secure your protocol, infrastructure, smart contracts, and users with next-generation AI-powered blockchain defense systems.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#dashboard" className="neon-btn rounded-xl px-8 py-4 text-sm tracking-wider">Launch App</a>
            <a href="#" className="neon-btn-outline rounded-xl px-8 py-4 text-sm tracking-wider">Contact Team</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
