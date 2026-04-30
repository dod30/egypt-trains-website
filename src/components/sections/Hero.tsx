import { useLanguage } from "@/hooks/useLanguage";
import { PhoneFrame } from "../PhoneFrame";
import { Smartphone, Apple } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container relative grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
        <div className="animate-fade-up space-y-6 text-center md:text-start">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
            {t.hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-balance">
            {t.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">{t.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="#download" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-hero text-primary-foreground font-bold shadow-glow hover:scale-[1.03] transition-smooth">
              <Smartphone size={18} />
              {t.hero.android}
            </a>
            <a
              href="https://apps.apple.com/us/app/egypt-trains-قطارات-مصر/id6764452718"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-secondary text-foreground font-bold hover:bg-secondary/70 transition-smooth"
            >
              <Apple size={18} />
              {t.hero.ios}
            </a>
          </div>
        </div>
        <div className="flex justify-center animate-float">
          <PhoneFrame>
            <img
              src="/app-screens/hero-home-dark.png"
              alt={t.hero.title}
              className="w-full h-full object-cover object-top"
            />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};
