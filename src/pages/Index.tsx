import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { SearchTrains } from "@/components/sections/SearchTrains";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Screens } from "@/components/sections/Screens";
import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { useMeta } from "@/hooks/useMeta";

const HomeMeta = () => {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  useMeta({
    title: isAr
      ? "مواعيد قطارات مصر — جدول قطارات السكة الحديد وأسعار التذاكر"
      : "Egypt Trains — Egyptian National Railways Schedules & Fares",
    bareTitle: true,
    description: isAr
      ? "كل مواعيد قطارات السكة الحديد المصرية: 602 قطار و575 محطة. ابحث بين أي محطتين، شوف الأسعار الرسمية، واضبط تذكير قبل قطارك. مجاني ويعمل بدون نت."
      : "All Egyptian National Railways schedules: 602 trains and 575 stations. Search any route, view official fares, set departure reminders. Free and works offline.",
    canonicalPath: "/",
    locale: isAr ? "ar_EG" : "en_US",
  });
  return null;
};

const Index = () => {
  return (
    <LanguageProvider>
      <HomeMeta />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Stats />
          <SearchTrains />
          <Features />
          <HowItWorks />
          <Screens />
          <Benefits />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
