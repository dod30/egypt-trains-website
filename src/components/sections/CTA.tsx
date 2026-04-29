import { useLanguage } from "@/hooks/useLanguage";
import { Smartphone, Apple } from "lucide-react";

export const CTA = () => {
  const { t } = useLanguage();
  return (
    <section id="download" className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero text-primary-foreground p-10 md:p-16 text-center shadow-glow">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-black mb-3 text-balance max-w-2xl mx-auto">{t.cta.title}</h2>
            <p className="text-lg opacity-90 mb-8">{t.cta.subtitle}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-background text-foreground font-bold hover:scale-[1.03] transition-smooth">
                <Smartphone size={18} />
                {t.hero.android}
              </a>
              <button className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/15 text-primary-foreground font-bold border border-white/30" disabled>
                <Apple size={18} />
                {t.hero.ios}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
