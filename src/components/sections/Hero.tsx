import { useLanguage } from "@/hooks/useLanguage";
import { PhoneFrame } from "../PhoneFrame";
import { AppStoreBadge, GooglePlayBadge } from "../StoreBadges";

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
            <AppStoreBadge variant="light" />
            <GooglePlayBadge variant="light" />
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
