import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/hooks/useLanguage";
import { Mail, Twitter, Facebook, Instagram } from "lucide-react";

const Content = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  return (
    <PageLayout
      title={ar ? "تواصل معنا" : "Contact Us"}
      description={
        ar
          ? "تواصل مع فريق مواعيد قطارات مصر للاقتراحات والملاحظات والإبلاغ عن أي مشكلة."
          : "Contact the Egypt Trains team for feedback, suggestions, or to report an issue."
      }
    >
      <p>
        {ar
          ? "يسعدنا تواصلك معنا لأي استفسار، اقتراح، أو ملاحظة. فريقنا بيرد في أقرب وقت."
          : "We'd love to hear from you. For any question, suggestion, or feedback, our team will get back to you shortly."}
      </p>
      <a
        href="mailto:apps@novaeg.net"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition-smooth"
      >
        <Mail size={16} /> apps@novaeg.net
      </a>
      <div className="pt-4">
        <p className="font-semibold text-foreground mb-3">{ar ? "تابعنا" : "Follow us"}</p>
        <div className="flex gap-3">
          {[Twitter, Facebook, Instagram].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:text-primary transition-smooth">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Content;
