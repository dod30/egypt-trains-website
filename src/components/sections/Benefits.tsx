import { useLanguage } from "@/hooks/useLanguage";
import { Timer, Coffee, Map, ShieldCheck } from "lucide-react";

const icons = [Timer, Coffee, Map, ShieldCheck];

export const Benefits = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-balance">{t.benefits.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.benefits.items.map((b, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="p-6 rounded-3xl bg-white/5 backdrop-blur border border-white/10 hover:border-primary/50 transition-smooth">
                <div className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-lg mb-1.5">{b.t}</h3>
                <p className="text-background/70 text-sm">{b.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
