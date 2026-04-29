import { ReactNode } from "react";

type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { w: number; h: number; r: number; ir: number; pad: number; island: number; islandH: number }> = {
  sm: { w: 200, h: 433, r: 38, ir: 32, pad: 5, island: 70, islandH: 20 },
  md: { w: 250, h: 542, r: 48, ir: 41, pad: 6, island: 88, islandH: 24 },
  lg: { w: 290, h: 628, r: 55, ir: 48, pad: 7, island: 100, islandH: 28 },
};

/**
 * iPhone 17 Pro Max device frame.
 * ~19.5:9 aspect with a titanium-look bezel and a centered Dynamic Island.
 */
export const PhoneFrame = ({
  children,
  className = "",
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  size?: Size;
}) => {
  const s = SIZES[size];
  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{
        width: s.w,
        height: s.h,
        borderRadius: s.r,
        padding: s.pad,
        background:
          "linear-gradient(135deg, #4a4a4f 0%, #2a2a2c 25%, #1a1a1c 50%, #2a2a2c 75%, #3a3a3c 100%)",
        boxShadow:
          "0 30px 60px -15px rgba(0,0,0,0.45), 0 12px 24px -8px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)",
      }}
    >
      {/* Side buttons */}
      <div
        className="absolute -left-[2px] rounded-l-sm bg-neutral-700"
        style={{ top: s.h * 0.175, height: s.h * 0.057, width: 3 }}
      />
      <div
        className="absolute -left-[2px] rounded-l-sm bg-neutral-700"
        style={{ top: s.h * 0.27, height: s.h * 0.076, width: 3 }}
      />
      <div
        className="absolute -left-[2px] rounded-l-sm bg-neutral-700"
        style={{ top: s.h * 0.363, height: s.h * 0.076, width: 3 }}
      />
      <div
        className="absolute -right-[2px] rounded-r-sm bg-neutral-700"
        style={{ top: s.h * 0.255, height: s.h * 0.127, width: 3 }}
      />

      {/* Inner screen */}
      <div
        className="relative h-full w-full overflow-hidden bg-black"
        style={{ borderRadius: s.ir }}
      >
        {children}

        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black z-30 pointer-events-none"
          style={{ top: s.pad + 4, width: s.island, height: s.islandH }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 rounded-full bg-neutral-800"
            style={{ left: s.island * 0.13, width: s.islandH * 0.32, height: s.islandH * 0.32 }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 rounded-full bg-neutral-800"
            style={{ right: s.island * 0.13, width: s.islandH * 0.32, height: s.islandH * 0.32 }}
          />
        </div>
      </div>
    </div>
  );
};
