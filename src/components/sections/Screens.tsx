import { useLanguage } from "@/hooks/useLanguage";
import { PhoneFrame } from "../PhoneFrame";

const SCREENS = [
  "/app-screens/01-home.png",
  "/app-screens/02-results.png",
  "/app-screens/03-details.png",
  "/app-screens/04-live.png",
  "/app-screens/05-favorites.png",
];

export const Screens = () => {
  const { t } = useLanguage();
  return (
    <section id="screens" className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-balance">{t.screens.title}</h2>
          <p className="text-lg text-muted-foreground">{t.screens.subtitle}</p>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:gap-4">
          {SCREENS.map((src, i) => (
            <div key={i} className="snap-center flex-shrink-0 flex flex-col items-center gap-4">
              <PhoneFrame size="sm">
                <img
                  src={src}
                  alt={t.screenLabels[i]}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </PhoneFrame>
              <p className="font-semibold text-sm text-muted-foreground">{t.screenLabels[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
