import { useLanguage } from "@/hooks/useLanguage";

export const Stats = () => {
  const { t } = useLanguage();
  const items = [
    { n: "602", k: t.stats.trains },
    { n: "575", k: t.stats.stations },
    { n: "12", k: t.stats.types },
    { n: "27", k: t.stats.governorates },
  ];
  return (
    <section className="py-12 md:py-16 border-y border-border bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-hero bg-clip-text text-transparent">
                {item.n}
              </div>
              <div className="mt-2 text-sm md:text-base text-muted-foreground font-medium">
                {item.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
