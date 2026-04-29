import { useLanguage } from "@/hooks/useLanguage";
import {
  Network,
  Filter,
  BellRing,
  Wallet,
  ExternalLink,
  WifiOff,
  Languages,
  Sparkles,
} from "lucide-react";

const icons = [Network, Filter, BellRing, Wallet, ExternalLink, WifiOff, Languages, Sparkles];

export const Features = () => {
  const { t } = useLanguage();
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-balance">{t.features.title}</h2>
          <p className="text-lg text-muted-foreground">{t.features.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.features.items.map((f, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <div
                key={i}
                className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-smooth"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="font-bold text-lg mb-1.5">{f.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
