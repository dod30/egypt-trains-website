import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Languages, Train } from "lucide-react";
import logo from "@/assets/icon.png";

export const Header = () => {
  const { lang, t, toggle } = useLanguage();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-smooth">
          <img src={logo} alt="Egypt Trains" className="w-12 h-12" />
          <span className="font-extrabold tracking-tight text-lg">{lang === "ar" ? "قطارات مصر" : "Egypt Trains"}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/search" className="text-muted-foreground hover:text-foreground transition-smooth">{lang === "ar" ? "ابحث" : "Search"}</Link>
          <a href="/#features" className="text-muted-foreground hover:text-foreground transition-smooth">{t.nav.features}</a>
          <a href="/#how" className="text-muted-foreground hover:text-foreground transition-smooth">{t.nav.how}</a>
          <a href="/#screens" className="text-muted-foreground hover:text-foreground transition-smooth">{t.nav.screens}</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold bg-secondary hover:bg-secondary/70 transition-smooth"
            aria-label="Switch language"
          >
            <Languages size={14} />
            {lang === "en" ? "العربية" : "English"}
          </button>
          <a href="#download" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-foreground text-background hover:opacity-90 transition-smooth">
            <Train size={14} />
            {t.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
};
