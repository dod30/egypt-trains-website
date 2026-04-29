import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/hooks/useLanguage";

const Content = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  return (
    <PageLayout
      title={ar ? "من نحن" : "About Us"}
      description={
        ar
          ? "تطبيق قطارات مصر — مواعيد كل قطارات السكة الحديد المصرية وأسعار التذاكر في مكان واحد، مجاناً وبدون نت."
          : "Egypt Trains — all Egyptian National Railways schedules and ticket prices in one place, free and offline."
      }
    >
      <p>
        {ar
          ? "قطارات مصر تطبيق بسيط وسريع يساعدك تعرف مواعيد القطارات في مصر لحظة بلحظة، من غير تعقيد ومن غير انتظار."
          : "Egypt Trains is a simple, fast app that helps you know Egyptian train schedules in real-time — no clutter, no waiting."}
      </p>
      <p>
        {ar
          ? "هدفنا إننا نوفر وقتك ونخلي رحلتك اليومية أسهل، سواء كنت طالب، موظف، أو مسافر بين المحافظات."
          : "Our mission is to save your time and make your daily commute easier — whether you're a student, employee, or intercity traveler."}
      </p>
      <p>
        {ar
          ? "بنشتغل باستمرار على تحسين التطبيق وإضافة مميزات جديدة بناءً على ملاحظات المستخدمين."
          : "We continuously improve the app and add new features based on user feedback."}
      </p>
    </PageLayout>
  );
};

export default Content;
