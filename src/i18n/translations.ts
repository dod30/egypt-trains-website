export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: { features: "Features", how: "How it works", screens: "Screens", download: "Download" },
    hero: {
      badge: "🚆 602 trains • 575 stations • all of Egypt",
      title: "Know your train time in seconds.",
      subtitle: "The whole Egyptian National Railways network in your pocket — schedules, classes, official fares and one-tap booking, in Arabic and English.",
      android: "Get it on Android",
      ios: "Coming soon on iOS",
    },
    stats: {
      trains: "trains",
      stations: "stations",
      types: "train types",
      governorates: "governorates",
    },
    features: {
      title: "Built for every Egyptian rail traveler",
      subtitle: "Everything you need from your morning commute to an overnight sleeper to Aswan.",
      items: [
        { t: "Full ENR network", d: "All 602 passenger trains and 575 stations across every Egyptian governorate." },
        { t: "Every train class", d: "VIP Premium, Talgo, Spanish AC, French AC, Russian AC, Sleeper — filter to find your fit." },
        { t: "Departure reminders", d: "Get a push notification 15, 30, 60 or 120 minutes before your train leaves." },
        { t: "Official ticket prices", d: "All four published ENR fare tables built in — no more screenshots." },
        { t: "One-tap booking", d: "Jump straight to the official ENR booking site to buy your ticket." },
        { t: "Works offline", d: "The full schedule is bundled locally — no signal needed on the platform." },
        { t: "Arabic-first design", d: "Native RTL layout with English toggle. Eastern Arabic UI, Latin numerals." },
        { t: "Glassmorphic UI", d: "Modern iOS-style interface with dark and light modes that follow your system." },
      ],
    },
    how: {
      title: "Three steps. One smooth ride.",
      steps: [
        { t: "Pick your stations", d: "Choose departure and destination from any of 575 stations." },
        { t: "Browse the trains", d: "See every train on the route with class, time, duration, stops and price." },
        { t: "Book or set a reminder", d: "Open the official booking site, or get a notification before departure." },
      ],
    },
    screens: { title: "A look inside the app", subtitle: "Designed to be the fastest way to catch your train." },
    benefits: {
      title: "Why riders love Egypt Trains",
      items: [
        { t: "Save time", d: "Stop guessing schedules — know exactly when to leave." },
        { t: "All classes, one place", d: "Compare VIP, Talgo, Russian AC and Sleeper in seconds." },
        { t: "Trusted prices", d: "Fares straight from the official ENR price tables." },
        { t: "Always with you", d: "Offline-ready and lightweight — works on any phone." },
      ],
    },
    cta: { title: "Download the app and travel smarter.", subtitle: "Free. Fast. Made for Egypt." },
    footer: {
      tagline: "Egypt train times in your pocket.",
      product: "Product", company: "Company", legal: "Legal",
      links: { features: "Features", screens: "Screens", download: "Download", about: "About", contact: "Contact", privacy: "Privacy Policy", terms: "Terms" },
      rights: "All rights reserved.",
    },
    screenLabels: ["Home", "Search results", "Train details", "Live tracking", "Favorites"],
  },
  ar: {
    nav: { features: "المميزات", how: "كيف يعمل", screens: "الشاشات", download: "حمّل التطبيق" },
    hero: {
      badge: "🚆 602 قطار • 575 محطة • كل مصر",
      title: "اعرف ميعاد قطارك في ثواني.",
      subtitle: "كل شبكة السكة الحديد المصرية في جيبك — مواعيد، درجات، أسعار رسمية وحجز بضغطة واحدة، عربي وإنجليزي.",
      android: "حمّل من Android",
      ios: "قريبًا على iOS",
    },
    stats: {
      trains: "قطار",
      stations: "محطة",
      types: "نوع قطار",
      governorates: "محافظة",
    },
    features: {
      title: "مصمم لكل راكب قطار في مصر",
      subtitle: "كل اللي تحتاجه من قطار الصبح للشغل لقطار النوم لأسوان.",
      items: [
        { t: "شبكة السكة الحديد كاملة", d: "كل 602 قطار ركاب و575 محطة في كل محافظات مصر." },
        { t: "كل أنواع القطارات", d: "VIP بريميوم، تالجو، إسباني مكيف، فرنساوي، روسي مكيف، نوم — فلتر اللي يناسبك." },
        { t: "تذكير قبل القطار", d: "إشعار قبل ميعاد القطار بـ 15 أو 30 أو 60 أو 120 دقيقة." },
        { t: "أسعار رسمية", d: "كل جداول أسعار السكة الحديد الأربعة جوّه التطبيق — مفيش screenshots تاني." },
        { t: "حجز بضغطة واحدة", d: "روح على الموقع الرسمي للحجز فورًا واشتري التذكرة." },
        { t: "يعمل بدون نت", d: "كل المواعيد محفوظة محليًا — مش هتحتاج شبكة على الرصيف." },
        { t: "عربي بالكامل", d: "تصميم RTL أصلي مع زر إنجليزي. واجهة عربية مع أرقام لاتيني." },
        { t: "تصميم جلاسي حديث", d: "واجهة iOS عصرية بـ dark وlight mode بتتبع نظام تليفونك." },
      ],
    },
    how: {
      title: "ثلاث خطوات. رحلة واحدة سلسة.",
      steps: [
        { t: "اختر المحطتين", d: "اختار محطة القيام والوصول من 575 محطة." },
        { t: "تصفح القطارات", d: "شوف كل قطار في المسار: نوعه، ميعاده، مدته، محطاته وسعره." },
        { t: "احجز أو اضبط تذكير", d: "افتح موقع الحجز الرسمي، أو خد إشعار قبل الميعاد." },
      ],
    },
    screens: { title: "نظرة من جوّه التطبيق", subtitle: "صُمم ليكون أسرع طريقة تلحق قطارك." },
    benefits: {
      title: "ليه المسافرين بيحبوا قطارات مصر",
      items: [
        { t: "وفّر وقتك", d: "بطّل تخمين — اعرف بالظبط امتى تخرج." },
        { t: "كل الدرجات في مكان", d: "قارن VIP وتالجو والروسي والنوم في ثواني." },
        { t: "أسعار موثوقة", d: "الأسعار من جداول السكة الحديد الرسمية مباشرة." },
        { t: "دايمًا معاك", d: "يعمل أوفلاين وخفيف — يشتغل على أي تليفون." },
      ],
    },
    cta: { title: "حمّل التطبيق وسافر بذكاء.", subtitle: "مجاني. سريع. مصنوع لمصر." },
    footer: {
      tagline: "مواعيد قطارات مصر في جيبك.",
      product: "المنتج", company: "الشركة", legal: "قانوني",
      links: { features: "المميزات", screens: "الشاشات", download: "تحميل", about: "من نحن", contact: "تواصل", privacy: "سياسة الخصوصية", terms: "الشروط" },
      rights: "جميع الحقوق محفوظة.",
    },
    screenLabels: ["الرئيسية", "نتائج البحث", "تفاصيل القطار", "حالة القطار اللحظية", "المفضلة"],
  },
} as const;
