import { useLanguage } from "@/hooks/useLanguage";
import { Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/icon.png";

export const Footer = () => {
  const { lang, t } = useLanguage();
  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Egypt Trains" className="w-8 h-8" />
              <span className="font-extrabold">{lang === "ar" ? "قطارات مصر" : "Egypt Trains"}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
            <div className="flex gap-3 pt-2">
              {[Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary transition-smooth">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold mb-3 text-sm">{t.footer.product}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-smooth">{t.footer.links.features}</a></li>
              <li><a href="#screens" className="hover:text-foreground transition-smooth">{t.footer.links.screens}</a></li>
              <li><a href="#download" className="hover:text-foreground transition-smooth">{t.footer.links.download}</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-3 text-sm">{t.footer.company}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-smooth">{t.footer.links.about}</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-smooth">{t.footer.links.contact}</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-3 text-sm">{t.footer.legal}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-smooth">{t.footer.links.privacy}</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-smooth">{t.footer.links.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-border text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Egypt Trains. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
