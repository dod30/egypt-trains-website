import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/hooks/useLanguage";

const Content = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  return (
    <PageLayout
      title={ar ? "سياسة الخصوصية" : "Privacy Policy"}
      description={
        ar
          ? "سياسة خصوصية تطبيق مواعيد قطارات مصر — لا نجمع أي بيانات شخصية ولا نستخدم تحليلات أو إعلانات."
          : "Egypt Trains privacy policy — we do not collect any personal data, do not use analytics or ads."
      }
    >
      {ar ? (
        <>
          <p>
            تطبيق <strong>قطارات مصر</strong> مصمم بحيث لا يجمع أي بيانات شخصية عنك. كل
            تفضيلاتك محفوظة على جهازك فقط، ولا تترك التطبيق إطلاقاً.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">المعلومات التي نجمعها</h2>
          <p>
            <strong>لا نجمع أي بيانات شخصية.</strong> التطبيق لا يطلب تسجيل دخول، ولا
            يستخدم تحليلات (analytics)، ولا إعلانات، ولا يربطك بأي معرّف فريد.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">ما يُحفظ على جهازك</h2>
          <p>
            بعض إعداداتك (المحطات المفضلة، عمليات البحث الأخيرة، اللغة، المظهر، التذكيرات
            المضبوطة) تُحفظ محلياً على جهازك باستخدام التخزين الداخلي للتطبيق. هذه البيانات
            لا تُرسل إلى أي خادم، وتختفي تماماً عند حذف التطبيق.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">جدول المواعيد</h2>
          <p>
            التطبيق يقرأ مواعيد القطارات والأسعار من قاعدة بيانات عامة على Supabase تحتوي
            فقط على بيانات الجدول الرسمي لهيئة السكة الحديد المصرية. هذه القراءة لا تتضمن أي
            بيانات شخصية عنك.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">الإشعارات</h2>
          <p>
            عند ضبط تذكير قبل ميعاد قطار، يستخدم التطبيق الإشعارات المحلية على جهازك
            فقط — لا تُرسل أي رسائل عبر الإنترنت ولا يعلم بها أي طرف خارجي.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">الروابط الخارجية</h2>
          <p>
            زر "احجز تذكرة" يفتح الموقع الرسمي لهيئة السكة الحديد (obs.enr.gov.eg) في
            متصفحك. سياسة خصوصيتنا لا تغطي ما يحدث على المواقع الخارجية.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">الأطفال</h2>
          <p>
            التطبيق مناسب لجميع الأعمار ولا يجمع بيانات من أي شخص بصرف النظر عن عمره.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">التغييرات على هذه السياسة</h2>
          <p>
            قد نحدث هذه السياسة من وقت لآخر. أي تحديث جوهري سننشره على هذه الصفحة مع
            تحديث تاريخ المراجعة.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">التواصل</h2>
          <p>
            لأي استفسار بخصوص الخصوصية، راسلنا على{" "}
            <a className="text-primary hover:underline" href="mailto:apps@novaeg.net">
              apps@novaeg.net
            </a>
            .
          </p>

          <p className="pt-4 text-sm text-muted-foreground">آخر تحديث: 29 أبريل 2026</p>
        </>
      ) : (
        <>
          <p>
            <strong>Egypt Trains</strong> is designed so that we do not collect any
            personal data about you. All your preferences stay on your device and never
            leave the app.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">Information we collect</h2>
          <p>
            <strong>We do not collect any personal data.</strong> The app does not require
            sign-in, does not use analytics, does not show ads, and does not link you to any
            unique identifier.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">What is stored on your device</h2>
          <p>
            Some of your settings (favorite trips, recent searches, language, theme,
            scheduled reminders) are saved locally on your device using the app's internal
            storage. This data is never sent to any server and is removed entirely when you
            uninstall the app.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">Schedule data</h2>
          <p>
            The app reads train schedules and fares from a public Supabase database that
            contains only the official timetable from Egyptian National Railways. This read
            does not include any personal information about you.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">Notifications</h2>
          <p>
            When you set a reminder before a train, the app uses on-device local
            notifications only — no message is sent over the internet and no third party is
            aware of it.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">External links</h2>
          <p>
            The "Book ticket" button opens the official ENR website (obs.enr.gov.eg) in
            your browser. Our privacy policy does not cover what happens on external sites.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">Children</h2>
          <p>
            The app is suitable for all ages and does not collect data from anyone,
            regardless of age.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Any material change will be
            published on this page along with an updated revision date.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-2">Contact</h2>
          <p>
            For any privacy questions, email us at{" "}
            <a className="text-primary hover:underline" href="mailto:apps@novaeg.net">
              apps@novaeg.net
            </a>
            .
          </p>

          <p className="pt-4 text-sm text-muted-foreground">Last updated: April 29, 2026</p>
        </>
      )}
    </PageLayout>
  );
};

export default Content;
