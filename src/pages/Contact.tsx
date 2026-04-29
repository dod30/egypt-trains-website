import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/hooks/useLanguage";
import { Mail, Bug, Lightbulb, Briefcase, Clock } from "lucide-react";

const Content = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const channels = ar
    ? [
        {
          icon: Bug,
          title: "ابلاغ عن خطأ في البيانات",
          desc: "لقيت ميعاد قطار غلط، سعر مش مظبوط، أو محطة ناقصة؟",
          action: "report",
        },
        {
          icon: Lightbulb,
          title: "اقتراح ميزة جديدة",
          desc: "في حاجة تتمنى تكون موجودة في التطبيق؟ يا ريت تحكيلنا.",
          action: "feature",
        },
        {
          icon: Briefcase,
          title: "شراكات وأعمال",
          desc: "للشركات والمؤسسات اللي عاوزة تتكلم عن تكامل أو تعاون.",
          action: "business",
        },
      ]
    : [
        {
          icon: Bug,
          title: "Report a data issue",
          desc: "Spotted a wrong train time, fare, or a missing station?",
          action: "report",
        },
        {
          icon: Lightbulb,
          title: "Suggest a feature",
          desc: "Got an idea for something the app should do? Tell us.",
          action: "feature",
        },
        {
          icon: Briefcase,
          title: "Business & partnerships",
          desc: "For organizations interested in integration or collaboration.",
          action: "business",
        },
      ];

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
          ? "بنحب نسمع منك. سواء عندك سؤال، اقتراح، أو ملاحظة على بيانات معينة — اكتبلنا وهنرد بأسرع وقت ممكن."
          : "We'd love to hear from you. Whether it's a question, an idea, or a correction on the data — drop us a line and we'll get back to you."}
      </p>

      <div className="flex items-center gap-2 text-sm text-foreground/80 pt-2">
        <Clock size={16} className="text-primary" />
        <span>
          {ar
            ? "وقت الرد المتوقع: خلال 24 ساعة في أيام العمل."
            : "Typical response time: within 24 hours on business days."}
        </span>
      </div>

      <div className="pt-4">
        <a
          href="mailto:apps@novaeg.net"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition-smooth"
        >
          <Mail size={16} /> apps@novaeg.net
        </a>
      </div>

      <h2 className="text-xl font-bold text-foreground pt-6">
        {ar ? "بتراسلنا في إيه؟" : "What to write about"}
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {channels.map(({ icon: Icon, title, desc, action }) => {
          const subject = encodeURIComponent(
            ar
              ? action === "report"
                ? "بلاغ عن بيانات في تطبيق قطارات مصر"
                : action === "feature"
                  ? "اقتراح ميزة لتطبيق قطارات مصر"
                  : "استفسار شراكة - قطارات مصر"
              : action === "report"
                ? "Egypt Trains — data report"
                : action === "feature"
                  ? "Egypt Trains — feature request"
                  : "Egypt Trains — partnership inquiry"
          );
          return (
            <a
              key={action}
              href={`mailto:apps@novaeg.net?subject=${subject}`}
              className="block rounded-2xl border border-border p-5 hover:border-primary/50 hover:bg-secondary/30 transition-smooth"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                <Icon size={20} />
              </div>
              <p className="font-bold text-foreground mb-1">{title}</p>
              <p className="text-sm">{desc}</p>
            </a>
          );
        })}
      </div>

      <h2 className="text-xl font-bold text-foreground pt-6">
        {ar ? "حاجة لازم تعرفها قبل ما تبعت" : "Before you write"}
      </h2>
      <ul className="list-disc ms-6 space-y-2">
        <li>
          {ar
            ? "بيانات المواعيد والأسعار صادرة عن الهيئة القومية لسكك حديد مصر — لو في تأخير أو إلغاء، الجهة الرسمية هي مصدر القرار."
            : "Schedule and fare data is sourced from Egyptian National Railways — for delays or cancellations, ENR is the authoritative source."}
        </li>
        <li>
          {ar
            ? "للحجز الفعلي للتذاكر، استخدم زر «احجز تذكرة» داخل التطبيق اللي بيوجّهك للموقع الرسمي للهيئة."
            : "To buy a ticket, use the “Book ticket” button inside the app, which redirects to ENR's official booking site."}
        </li>
        <li>
          {ar
            ? "لو بتبلّغ عن خطأ في بيانات قطار، يا ريت تحط رقم القطار، التاريخ، والمحطتين — ده بيسرّع التصحيح."
            : "If you're reporting a data error, please include the train number, date, and the two stations involved — it speeds up the fix."}
        </li>
      </ul>
    </PageLayout>
  );
};

export default Content;
