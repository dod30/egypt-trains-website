import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { TrainSearchPanel } from "@/components/sections/SearchTrains";
import { useMeta } from "@/hooks/useMeta";
import { getStationById, stationName } from "@/lib/trainSearch";
import { ChevronLeft, ChevronRight } from "lucide-react";

const POPULAR_ROUTES: { from: string; to: string }[] = [
  { from: "S0", to: "S1" }, // Cairo → Alexandria
  { from: "S0", to: "S21" }, // Cairo → Aswan
  { from: "S0", to: "S20" }, // Cairo → Luxor
  { from: "S0", to: "S8" }, // Cairo → Port Said
  { from: "S1", to: "S22" }, // Alex → Matrouh
  { from: "S0", to: "S22" }, // Cairo → Matrouh
];

const SearchInner = () => {
  const { lang, dir } = useLanguage();
  const isAr = lang === "ar";
  const [params, setParams] = useSearchParams();
  const fromId = params.get("from");
  const toId = params.get("to");

  const fromStation = fromId ? getStationById(fromId) : null;
  const toStation = toId ? getStationById(toId) : null;

  const titleAr = useMemo(() => {
    if (fromStation && toStation)
      return `قطارات من ${stationName(fromStation, "ar")} إلى ${stationName(toStation, "ar")} — مواعيد وأسعار`;
    return "ابحث عن قطارات السكة الحديد المصرية — مواعيد كل القطارات";
  }, [fromStation, toStation]);

  const titleEn = useMemo(() => {
    if (fromStation && toStation)
      return `Trains from ${stationName(fromStation, "en")} to ${stationName(toStation, "en")} — schedules & prices`;
    return "Egypt Trains Search — All ENR Train Schedules & Prices";
  }, [fromStation, toStation]);

  const descAr = useMemo(() => {
    if (fromStation && toStation)
      return `كل مواعيد قطارات السكة الحديد المصرية من ${stationName(fromStation, "ar")} إلى ${stationName(toStation, "ar")}: المغادرة، الوصول، المدة، الدرجات والأسعار. ابحث مجانًا واحجز من الموقع الرسمي.`;
    return "ابحث في كل خطوط السكة الحديد المصرية: 602 قطار، 575 محطة. مواعيد، أسعار، درجات وحجز رسمي. عربي + إنجليزي.";
  }, [fromStation, toStation]);

  const descEn = useMemo(() => {
    if (fromStation && toStation)
      return `All Egyptian National Railways trains from ${stationName(fromStation, "en")} to ${stationName(toStation, "en")}: departure, arrival, duration, classes and fares. Free search, official booking link.`;
    return "Search the entire Egyptian railway network: 602 trains, 575 stations. Schedules, prices, classes and official booking. Arabic + English.";
  }, [fromStation, toStation]);

  const canonicalPath = useMemo(() => {
    if (fromId && toId) return `/search?from=${fromId}&to=${toId}`;
    return "/search";
  }, [fromId, toId]);

  const jsonLd = useMemo(() => {
    if (fromStation && toStation) {
      return {
        "@context": "https://schema.org",
        "@type": "TrainTrip",
        name: `${stationName(fromStation, "en")} to ${stationName(toStation, "en")}`,
        departureStation: {
          "@type": "TrainStation",
          name: stationName(fromStation, "en"),
          address: { "@type": "PostalAddress", addressCountry: "EG" },
        },
        arrivalStation: {
          "@type": "TrainStation",
          name: stationName(toStation, "en"),
          address: { "@type": "PostalAddress", addressCountry: "EG" },
        },
        provider: {
          "@type": "Organization",
          name: "Egyptian National Railways",
          url: "https://enr.gov.eg",
        },
      };
    }
    return {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Egypt Trains",
      applicationCategory: "TravelApplication",
      operatingSystem: "Web, Android",
      description: descEn,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    };
  }, [fromStation, toStation, descEn]);

  useMeta({
    title: isAr ? titleAr : titleEn,
    description: isAr ? descAr : descEn,
    canonicalPath,
    locale: isAr ? "ar_EG" : "en_US",
    jsonLd,
  });

  const handleChange = (newFrom: string | null, newTo: string | null) => {
    const next = new URLSearchParams();
    if (newFrom) next.set("from", newFrom);
    if (newTo) next.set("to", newTo);
    setParams(next, { replace: false });
  };

  // H1 + intro change based on whether a route is picked
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-10 pb-16">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol
              className={`flex items-center gap-1 text-sm text-muted-foreground ${
                dir === "rtl" ? "flex-row-reverse" : ""
              }`}
            >
              <li>
                <Link to="/" className="hover:text-foreground">
                  {isAr ? "الرئيسية" : "Home"}
                </Link>
              </li>
              {dir === "rtl" ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
              <li className="font-medium text-foreground">
                {isAr ? "ابحث عن قطار" : "Search trains"}
              </li>
              {fromStation && toStation && (
                <>
                  {dir === "rtl" ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                  <li className="font-medium text-foreground truncate max-w-[60%]">
                    {stationName(fromStation, lang)} → {stationName(toStation, lang)}
                  </li>
                </>
              )}
            </ol>
          </nav>

          <header className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl md:text-5xl font-black mb-4 text-balance">
              {fromStation && toStation
                ? isAr
                  ? `قطارات من ${stationName(fromStation, "ar")} إلى ${stationName(toStation, "ar")}`
                  : `Trains from ${stationName(fromStation, "en")} to ${stationName(toStation, "en")}`
                : isAr
                ? "ابحث عن قطار في مصر"
                : "Search Egypt trains"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {fromStation && toStation
                ? isAr
                  ? "كل القطارات المتاحة على هذا المسار — المواعيد، المدة، الدرجات والأسعار."
                  : "Every train available on this route — times, duration, classes and prices."
                : isAr
                ? "اعرف ميعاد قطارك من خلال البحث بين أي محطتين في مصر."
                : "Find your train schedule between any two stations in Egypt."}
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <TrainSearchPanel
              initialFromId={fromId}
              initialToId={toId}
              onChange={handleChange}
              unlimited
            />
          </div>

          {/* Popular routes — useful for SEO and discovery */}
          {!fromStation && !toStation && (
            <section className="max-w-3xl mx-auto mt-14">
              <h2 className="text-xl font-bold mb-4">
                {isAr ? "أشهر المسارات" : "Popular routes"}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {POPULAR_ROUTES.map(({ from, to }) => {
                  const f = getStationById(from);
                  const t = getStationById(to);
                  if (!f || !t) return null;
                  return (
                    <Link
                      key={`${from}-${to}`}
                      to={`/search?from=${from}&to=${to}`}
                      className="p-4 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-smooth"
                    >
                      <div className="font-bold">
                        {stationName(f, lang)} →{" "}
                        <span className="text-primary">{stationName(t, lang)}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Search = () => (
  <LanguageProvider>
    <SearchInner />
  </LanguageProvider>
);

export default Search;
