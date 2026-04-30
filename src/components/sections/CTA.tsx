import { useLanguage } from "@/hooks/useLanguage";
import { AppStoreBadge, GooglePlayBadge } from "../StoreBadges";

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
              <AppStoreBadge variant="dark" />
              <GooglePlayBadge variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
