import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/hooks/useLanguage";

const Content = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  return (
    <PageLayout
      title={ar ? "الشروط والأحكام" : "Terms & Conditions"}
      description={
        ar
          ? "الشروط والأحكام الخاصة باستخدام تطبيق مواعيد قطارات مصر."
          : "Terms and conditions for using the Egypt Trains app."
      }
    >
      {ar ? (
        <>
          <p>باستخدامك لتطبيق قطارات مصر فأنت توافق على الشروط التالية.</p>
          <h2 className="text-xl font-bold text-foreground pt-2">استخدام التطبيق</h2>
          <p>التطبيق مقدم لأغراض إعلامية لمساعدتك على متابعة مواعيد القطارات في مصر. نسعى للدقة لكن لا نضمن خلوّ المعلومات من الأخطاء.</p>
          <h2 className="text-xl font-bold text-foreground pt-2">المسؤولية</h2>
          <p>لسنا مسؤولين عن أي تأخير أو تغيير في مواعيد القطارات الفعلية الصادرة عن الهيئة القومية لسكك حديد مصر.</p>
          <h2 className="text-xl font-bold text-foreground pt-2">التعديلات</h2>
          <p>قد نقوم بتحديث هذه الشروط من وقت لآخر، وسيتم نشر أي تغييرات على هذه الصفحة.</p>
        </>
      ) : (
        <>
          <p>By using the Egypt Trains app you agree to the following terms.</p>
          <h2 className="text-xl font-bold text-foreground pt-2">Use of the app</h2>
          <p>The app is provided for informational purposes to help you track Egyptian train schedules. We strive for accuracy but do not guarantee error-free information.</p>
          <h2 className="text-xl font-bold text-foreground pt-2">Liability</h2>
          <p>We are not responsible for any delays or changes in actual train schedules issued by Egyptian National Railways.</p>
          <h2 className="text-xl font-bold text-foreground pt-2">Changes</h2>
          <p>We may update these terms from time to time. Any changes will be posted on this page.</p>
        </>
      )}
    </PageLayout>
  );
};

export default Content;
