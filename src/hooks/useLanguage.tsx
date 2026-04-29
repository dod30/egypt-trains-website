import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Lang } from "@/i18n/translations";

type Ctx = { lang: Lang; t: typeof translations.en; dir: "rtl" | "ltr"; setLang: (l: Lang) => void; toggle: () => void };
const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || "ar");

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] as typeof translations.en, dir: lang === "ar" ? "rtl" : "ltr", setLang, toggle: () => setLang(lang === "en" ? "ar" : "en") }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
