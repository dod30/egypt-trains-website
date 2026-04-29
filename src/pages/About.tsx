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
      {ar ? (
        <>
          <p>
            <strong className="text-foreground">قطارات مصر</strong> تطبيق وموقع بيوفّر لك كل
            مواعيد قطارات الهيئة القومية لسكك حديد مصر في مكان واحد، بشكل سريع وواضح، عربي
            وإنجليزي، ويعمل من غير إنترنت.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">رسالتنا</h2>
          <p>
            نسهّل حياة المسافرين بالقطار في مصر — سواء كنت طالب جامعة في طريقك للقاهرة، أو
            موظف بيتنقل بين القاهرة وطنطا كل يوم، أو مسافر للأقصر أو أسوان. هدفنا إنك في
            ثواني تعرف ميعاد قطارك، الأسعار، ومحطاتك، بدون ما تضطر تتصل بمحطة أو تفتح
            موقع رسمي بطيء.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">شبكتنا</h2>
          <p>
            بنغطي شبكة السكة الحديد كاملة:
          </p>
          <ul className="list-disc ms-6 space-y-1">
            <li>602 قطار ركاب</li>
            <li>575 محطة في كل محافظات مصر</li>
            <li>12 نوع قطار: VIP بريميوم، تالجو، إسبانى، فرنساوى، روسى، نوم، عادي وغيرها</li>
            <li>كل جداول الأسعار الرسمية للهيئة بالدرجات المختلفة</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground pt-4">إزاي نحدث البيانات</h2>
          <p>
            بياناتنا متستمدة من المصادر الرسمية للهيئة القومية لسكك حديد مصر. كل ما يحصل
            تعديل في الجدول أو الأسعار، بنحدّث قاعدة بياناتنا فوراً، والمستخدمين بياخدوا
            التحديث تلقائياً أول ما يفتحوا التطبيق وهم متصلين بالنت — بدون ما يحتاجوا
            يحدّثوا التطبيق من المتجر.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">الفريق</h2>
          <p>
            التطبيق من إنتاج <strong className="text-foreground">NovaEG</strong>، فريق من
            مطورين مصريين شغوفين بتحسين تجربة المستخدم في الخدمات اليومية. التطبيق مجاني
            بالكامل وبدون إعلانات — هدفنا تقديم أداة مفيدة بدون تعقيد ولا استغلال لبيانات
            المستخدم.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">تواصل معنا</h2>
          <p>
            عندك ملاحظة، اقتراح، أو لقيت بيانات مش صح؟ ابعتلنا على{" "}
            <a className="text-primary hover:underline" href="mailto:apps@novaeg.net">
              apps@novaeg.net
            </a>
            {" "}— بنرد عادةً في خلال 24 ساعة.
          </p>
        </>
      ) : (
        <>
          <p>
            <strong className="text-foreground">Egypt Trains</strong> is an app and website
            that brings every Egyptian National Railways train schedule into one place —
            fast, clear, bilingual, and works offline.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">Our mission</h2>
          <p>
            We make rail travel in Egypt simpler — whether you're a student heading to
            Cairo, a daily commuter between Cairo and Tanta, or a traveler heading to
            Luxor or Aswan. The goal: in seconds, know your train's time, fare, and
            stations, without calling a station or fighting a slow official site.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">Our coverage</h2>
          <p>The full Egyptian railway network:</p>
          <ul className="list-disc ms-6 space-y-1">
            <li>602 passenger trains</li>
            <li>575 stations across every Egyptian governorate</li>
            <li>12 train types: VIP Premium, Talgo, Spanish AC, French AC, Russian AC, Sleeper, Ordinary, and more</li>
            <li>All official ENR fare tables for every class</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground pt-4">How we keep data fresh</h2>
          <p>
            Our data comes from official Egyptian National Railways sources. Whenever a
            schedule or fare changes, we update our database immediately and users get the
            change automatically the next time they open the app online — no app store
            update required.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">The team</h2>
          <p>
            Built by <strong className="text-foreground">NovaEG</strong>, a small team of
            Egyptian developers who care about the daily-use software experience in Egypt.
            The app is completely free, ad-free, and collects no personal data — we just
            wanted a clean, useful tool.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">Get in touch</h2>
          <p>
            Have feedback, an idea, or spotted a wrong schedule? Email us at{" "}
            <a className="text-primary hover:underline" href="mailto:apps@novaeg.net">
              apps@novaeg.net
            </a>
            {" "}— we usually reply within 24 hours.
          </p>
        </>
      )}
    </PageLayout>
  );
};

export default Content;
