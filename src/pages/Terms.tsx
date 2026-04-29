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
          ? "الشروط والأحكام الخاصة باستخدام تطبيق وموقع مواعيد قطارات مصر."
          : "Terms and conditions for using the Egypt Trains app and website."
      }
    >
      {ar ? (
        <>
          <p>
            باستخدامك لتطبيق <strong>قطارات مصر</strong> أو الموقع{" "}
            <a className="text-primary hover:underline" href="https://egypt-trains.com">
              egypt-trains.com
            </a>
            {" "}فأنت توافق على الشروط والأحكام التالية. لو مش موافق، يا ريت متستخدمش الخدمة.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">1. وصف الخدمة</h2>
          <p>
            قطارات مصر خدمة معلوماتية تعرض مواعيد وأسعار قطارات السكة الحديد المصرية. الخدمة
            مجانية بالكامل ولا تتطلب تسجيل دخول. التطبيق ليس له أي صلة رسمية بالهيئة القومية
            لسكك حديد مصر — هو خدمة مستقلة بتعرض بيانات متاحة بشكل عام.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">2. دقة المعلومات</h2>
          <p>
            نبذل كل جهد ممكن لعرض مواعيد وأسعار صحيحة ومحدّثة، لكن:
          </p>
          <ul className="list-disc ms-6 space-y-1">
            <li>الجدول قابل للتغيير في أي وقت من قِبَل الهيئة القومية لسكك حديد مصر بدون إخطار مسبق.</li>
            <li>قد يحدث تأخير أو إلغاء فعلي لقطار لا يظهر في التطبيق فوراً.</li>
            <li>الأسعار المعروضة هي الأسعار الرسمية المعلنة، وقد تتغير من قِبَل الهيئة.</li>
            <li>نوصي بتأكيد المواعيد من المصدر الرسمي قبل الرحلات الحساسة.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground pt-4">3. حدود المسؤولية</h2>
          <p>
            قطارات مصر <strong>غير مسؤولة</strong> عن:
          </p>
          <ul className="list-disc ms-6 space-y-1">
            <li>تأخير أو إلغاء أي قطار، أو فقدان أي ركوبة، أو ما يترتب على ذلك من خسائر.</li>
            <li>عدم دقة بيانات قد تظهر بسبب تغييرات لم تنعكس على قاعدة بياناتنا بعد.</li>
            <li>عمليات الحجز والدفع التي تتم على المواقع الرسمية للهيئة — هي تخضع لشروطها.</li>
            <li>أي ضرر مباشر أو غير مباشر ناتج عن استخدام التطبيق.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground pt-4">4. مسؤوليات المستخدم</h2>
          <ul className="list-disc ms-6 space-y-1">
            <li>استخدام الخدمة لأغراض شخصية مشروعة فقط.</li>
            <li>عدم محاولة الوصول لقاعدة البيانات بطرق غير مصرّح بها أو إساءة استخدام واجهات البرمجة.</li>
            <li>عدم نسخ أو إعادة توزيع بيانات التطبيق بشكل تجاري بدون إذن خطي مسبق.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground pt-4">5. الروابط الخارجية</h2>
          <p>
            التطبيق يحتوي على روابط للموقع الرسمي للهيئة القومية لسكك حديد مصر (obs.enr.gov.eg)
            لإتمام الحجز. هذه المواقع لها سياسات خصوصية وشروط استخدام منفصلة، ولسنا مسؤولين
            عن محتواها أو خدماتها.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">6. الملكية الفكرية</h2>
          <p>
            تصميم التطبيق والموقع، والكود، والشعارات، والنصوص الأصلية مملوكة لـ NovaEG.
            بيانات مواعيد القطارات والأسعار مأخوذة من المصادر العامة للهيئة القومية لسكك حديد
            مصر، وحقوقها لمالكها الأصلي.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">7. الخصوصية</h2>
          <p>
            استخدامك للخدمة يخضع أيضاً لـ
            {" "}
            <a className="text-primary hover:underline" href="/privacy">سياسة الخصوصية</a>
            {" "}الخاصة بنا، التي توضح إننا لا نجمع أي بيانات شخصية.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">8. تعديل الشروط</h2>
          <p>
            نحتفظ بالحق في تحديث هذه الشروط من وقت لآخر. أي تغييرات جوهرية سننشرها على هذه
            الصفحة مع تحديث تاريخ المراجعة. استمرارك في استخدام التطبيق بعد التحديث يعني
            موافقتك على الشروط الجديدة.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">9. القانون الحاكم</h2>
          <p>
            هذه الشروط تخضع لقوانين جمهورية مصر العربية، وأي نزاع ينشأ عنها يخضع للمحاكم
            المصرية المختصة.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">10. التواصل</h2>
          <p>
            لأي استفسار بخصوص هذه الشروط، راسلنا على{" "}
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
            By using the <strong>Egypt Trains</strong> app or website at{" "}
            <a className="text-primary hover:underline" href="https://egypt-trains.com">
              egypt-trains.com
            </a>
            , you agree to the following terms. If you don't agree, please don't use the
            service.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">1. Description of service</h2>
          <p>
            Egypt Trains is an informational service displaying schedules and fares for
            Egyptian National Railways trains. The service is completely free and does not
            require sign-in. The app has no official affiliation with Egyptian National
            Railways — it is an independent service that surfaces publicly available data.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">2. Accuracy of information</h2>
          <p>We make every effort to display accurate and current schedules and fares, but:</p>
          <ul className="list-disc ms-6 space-y-1">
            <li>The schedule may be changed by Egyptian National Railways at any time without prior notice.</li>
            <li>Actual delays or cancellations may not appear in the app immediately.</li>
            <li>Displayed prices are official published rates and may change.</li>
            <li>For time-critical trips, we recommend confirming schedules from the official source.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground pt-4">3. Limitation of liability</h2>
          <p>Egypt Trains is <strong>not responsible</strong> for:</p>
          <ul className="list-disc ms-6 space-y-1">
            <li>Train delays or cancellations, missed rides, or any losses resulting from them.</li>
            <li>Data inaccuracies caused by changes that haven't yet propagated to our database.</li>
            <li>Booking and payment transactions on ENR's official sites — those are governed by ENR's terms.</li>
            <li>Any direct or indirect damage resulting from use of the app.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground pt-4">4. User responsibilities</h2>
          <ul className="list-disc ms-6 space-y-1">
            <li>Use the service for legitimate personal purposes only.</li>
            <li>Do not attempt to access our database in unauthorized ways or abuse our APIs.</li>
            <li>Do not copy or commercially redistribute app data without prior written permission.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground pt-4">5. External links</h2>
          <p>
            The app contains links to Egyptian National Railways' official site
            (obs.enr.gov.eg) for completing bookings. Those sites have their own privacy
            policies and terms of use, and we are not responsible for their content or
            services.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">6. Intellectual property</h2>
          <p>
            The app and website design, source code, logos, and original copy are owned by
            NovaEG. Train schedule and fare data are sourced from publicly available
            Egyptian National Railways materials, and the rights to that data belong to
            their original owner.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">7. Privacy</h2>
          <p>
            Your use of the service is also subject to our{" "}
            <a className="text-primary hover:underline" href="/privacy">Privacy Policy</a>,
            which clarifies that we do not collect any personal data.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">8. Changes to these terms</h2>
          <p>
            We reserve the right to update these terms from time to time. Any material
            change will be published on this page with an updated revision date. Continued
            use of the app after changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">9. Governing law</h2>
          <p>
            These terms are governed by the laws of the Arab Republic of Egypt, and any
            dispute arising from them is subject to the competent Egyptian courts.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">10. Contact</h2>
          <p>
            For any questions about these terms, email{" "}
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
