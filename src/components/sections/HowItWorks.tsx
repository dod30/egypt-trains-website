import { useLanguage } from "@/hooks/useLanguage";

export const HowItWorks = () => {
  const { t } = useLanguage();
  return (
    <section id="how" className="py-20 md:py-28 bg-secondary/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-balance">{t.how.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {t.how.steps.map((s, i) => (
            <div key={i} className="relative bg-background rounded-3xl p-8 shadow-soft">
              <div className="absolute -top-5 start-8 w-12 h-12 rounded-2xl bg-gradient-hero text-primary-foreground font-black flex items-center justify-center shadow-glow text-lg">
                {i + 1}
              </div>
              <h3 className="font-bold text-xl mb-2 mt-3">{s.t}</h3>
              <p className="text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
