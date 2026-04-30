import { useLanguage } from "@/hooks/useLanguage";

const APP_STORE_URL = "https://apps.apple.com/us/app/egypt-trains-قطارات-مصر/id6764452718";
// TODO: replace with real Play Store URL once published
const PLAY_STORE_URL = "#";

const AppleLogo = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 384 512" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const GooglePlayLogo = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 512 512" width={size} height={size} aria-hidden="true">
    <path
      d="M325.3 234.3L104.3 13.3 80.6 9.4l225.6 225.6 19.1-1.1z"
      fill="#00d7fe"
    />
    <path
      d="M104.3 13.3 47 73c-11 11-15.7 31.3-3.7 47.5l245.4 245.4 17-43.5L104.3 13.3z"
      fill="#01ffba"
    />
    <path
      d="m305.7 234.7 39.9 39.9 124.4-71.7c11.6-6.7 17.3-15.2 17.6-23.9 0-7.7-4.4-15.4-13.4-21.4l-129-74.3-39.5 151.4z"
      fill="#ffce00"
    />
    <path
      d="m288.6 365.9 17 17 168.7-97.3c11-6.4 16.5-14.8 17.2-23.2-1.5 7.7-7.1 15.3-17.1 21.1l-185.8 82.4z"
      fill="#ff7100"
    />
    <path
      d="M44.3 467.5c2.4 3.2 5.2 6 8.6 8.4 13.8 9.6 32.4 9.5 47.7.5l205.9-118.9-17-17-245 126.9z"
      fill="#ff3946"
    />
    <path
      d="M481.1 235.4c8 6.5 11.7 14.6 11.7 22.6.3-8.7-5.5-17.3-17.6-24l-130.6-74.5-15.4 15.5 151.9 60.4z"
      fill="#fff"
      opacity="0"
    />
  </svg>
);

interface BadgeProps {
  variant?: "light" | "dark";
}

export const AppStoreBadge = ({ variant = "light" }: BadgeProps) => {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const dark = variant === "dark";
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl border transition-smooth hover:scale-[1.03] ${
        dark
          ? "bg-white/15 text-white border-white/30 hover:bg-white/25"
          : "bg-black text-white border-black hover:opacity-90"
      }`}
      aria-label="Download on the App Store"
    >
      <AppleLogo size={28} />
      <span className="text-start leading-tight">
        <span className="block text-[10px] opacity-80">
          {isAr ? "حمّل من" : "Download on the"}
        </span>
        <span className="block text-lg font-semibold tracking-tight">
          App Store
        </span>
      </span>
    </a>
  );
};

export const GooglePlayBadge = ({ variant = "light" }: BadgeProps) => {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const dark = variant === "dark";
  return (
    <a
      href={PLAY_STORE_URL}
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl border transition-smooth hover:scale-[1.03] ${
        dark
          ? "bg-white/15 text-white border-white/30 hover:bg-white/25"
          : "bg-black text-white border-black hover:opacity-90"
      }`}
      aria-label="Get it on Google Play"
    >
      <GooglePlayLogo size={26} />
      <span className="text-start leading-tight">
        <span className="block text-[10px] opacity-80">
          {isAr ? "حمّل من" : "Get it on"}
        </span>
        <span className="block text-lg font-semibold tracking-tight">
          Google Play
        </span>
      </span>
    </a>
  );
};
