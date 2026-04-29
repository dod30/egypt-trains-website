import { ReactNode } from "react";
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { useMeta } from "@/hooks/useMeta";

interface PageLayoutProps {
  /** Visible H1 + base for the document title. */
  title: string;
  /** Per-page meta description. Falls back to a generic one if omitted. */
  description?: string;
  /** Override canonical path. Defaults to current pathname. */
  canonicalPath?: string;
  children: ReactNode;
}

const PageMeta = ({ title, description, canonicalPath }: Omit<PageLayoutProps, "children">) => {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  useMeta({
    title,
    description:
      description ??
      (isAr
        ? "مواعيد قطارات السكة الحديد المصرية وأسعار التذاكر — تطبيق مواعيد قطارات مصر."
        : "Egyptian National Railways schedules and ticket prices — Egypt Trains app."),
    canonicalPath,
    locale: isAr ? "ar_EG" : "en_US",
  });
  return null;
};

export const PageLayout = ({ title, description, canonicalPath, children }: PageLayoutProps) => (
  <LanguageProvider>
    <PageMeta title={title} description={description} canonicalPath={canonicalPath} />
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">{title}</h1>
        <div className="space-y-5 text-muted-foreground leading-relaxed">{children}</div>
      </main>
      <Footer />
    </div>
  </LanguageProvider>
);
