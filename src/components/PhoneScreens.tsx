import { Search, Heart, Home as HomeIcon, User, Train, Clock, MapPin, ArrowRight, Star } from "lucide-react";

const StatusBar = () => (
  <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[10px] font-semibold text-foreground">
    <span>9:41</span>
    <span className="flex gap-1">●●● 5G</span>
  </div>
);

const BottomNav = ({ active = 0 }: { active?: number }) => {
  const items = [HomeIcon, Search, Heart, User];
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-around py-3 bg-white border-t border-border">
      {items.map((Icon, i) => (
        <Icon key={i} size={20} className={i === active ? "text-primary" : "text-muted-foreground"} strokeWidth={2.2} />
      ))}
    </div>
  );
};

export const ScreenHome = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-hero px-5 pt-2 pb-6 rounded-b-3xl">
      <StatusBar />
      <div className="flex justify-between items-center mt-2 text-primary-foreground">
        <div>
          <p className="text-xs opacity-80">Hello 👋</p>
          <p className="font-bold">Egypt Trains</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-white/20" />
      </div>
      <div className="mt-5 bg-white rounded-2xl p-3 shadow-soft space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <MapPin size={14} className="text-primary" />
          <span className="text-muted-foreground">From</span>
          <span className="font-semibold ml-auto">Cairo</span>
        </div>
        <div className="border-t border-border" />
        <div className="flex items-center gap-2 text-xs">
          <MapPin size={14} className="text-primary" />
          <span className="text-muted-foreground">To</span>
          <span className="font-semibold ml-auto">Alexandria</span>
        </div>
      </div>
    </div>
    <div className="px-5 py-4 flex-1">
      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Popular routes</p>
      {[["Cairo", "Mansoura"], ["Giza", "Luxor"], ["Alex", "Tanta"]].map(([a, b], i) => (
        <div key={i} className="flex items-center gap-2 py-2.5 border-b border-border text-xs">
          <Train size={14} className="text-primary" />
          <span className="font-semibold">{a}</span>
          <ArrowRight size={12} className="text-muted-foreground" />
          <span className="font-semibold">{b}</span>
          <span className="ml-auto text-muted-foreground">2h 30m</span>
        </div>
      ))}
    </div>
    <BottomNav active={0} />
  </div>
);

export const ScreenSearch = () => (
  <div className="h-full flex flex-col bg-white">
    <StatusBar />
    <div className="px-5 py-3">
      <p className="text-xs text-muted-foreground">Cairo → Alexandria</p>
      <p className="font-bold text-sm">12 trains today</p>
    </div>
    <div className="px-5 space-y-2 flex-1 overflow-hidden">
      {[
        { time: "07:00", arr: "09:30", price: "120", type: "Express" },
        { time: "08:15", arr: "11:00", price: "85", type: "Standard" },
        { time: "10:30", arr: "13:15", price: "120", type: "Express" },
        { time: "12:45", arr: "15:30", price: "85", type: "Standard" },
        { time: "15:00", arr: "17:30", price: "150", type: "VIP" },
      ].map((t, i) => (
        <div key={i} className="rounded-xl border border-border p-2.5 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold">{t.time}</span>
              <ArrowRight size={10} className="text-muted-foreground" />
              <span className="font-bold">{t.arr}</span>
            </div>
            <span className="text-primary font-bold">{t.price} EGP</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">{t.type}</p>
        </div>
      ))}
    </div>
    <BottomNav active={1} />
  </div>
);

export const ScreenDetails = () => (
  <div className="h-full flex flex-col bg-white">
    <StatusBar />
    <div className="px-5 py-3">
      <p className="text-[10px] text-muted-foreground">Train #935</p>
      <p className="font-bold">Express Service</p>
    </div>
    <div className="px-5 flex-1">
      <div className="rounded-xl bg-gradient-hero text-primary-foreground p-3 mb-3">
        <div className="flex justify-between items-center text-xs">
          <div>
            <p className="opacity-80 text-[10px]">Departs</p>
            <p className="font-bold text-base">07:00</p>
            <p className="opacity-80 text-[10px]">Cairo</p>
          </div>
          <Train size={20} />
          <div className="text-right">
            <p className="opacity-80 text-[10px]">Arrives</p>
            <p className="font-bold text-base">09:30</p>
            <p className="opacity-80 text-[10px]">Alex</p>
          </div>
        </div>
      </div>
      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Stops</p>
      {["Cairo Ramses", "Benha", "Tanta", "Damanhour", "Alexandria"].map((s, i) => (
        <div key={i} className="flex items-center gap-2 py-1.5 text-xs">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span>{s}</span>
          <span className="ml-auto text-muted-foreground text-[10px]">
            {["07:00", "07:35", "08:10", "08:45", "09:30"][i]}
          </span>
        </div>
      ))}
    </div>
    <BottomNav active={1} />
  </div>
);

export const ScreenFavorites = () => (
  <div className="h-full flex flex-col bg-white">
    <StatusBar />
    <div className="px-5 py-3">
      <p className="font-bold text-base">Favorites</p>
      <p className="text-xs text-muted-foreground">Your saved routes</p>
    </div>
    <div className="px-5 space-y-2 flex-1">
      {[
        ["Cairo", "Alexandria", "Daily commute"],
        ["Giza", "Luxor", "Weekend trip"],
        ["Cairo", "Mansoura", "Family visit"],
        ["Alex", "Tanta", "Work"],
      ].map(([a, b, note], i) => (
        <div key={i} className="rounded-xl border border-border p-2.5">
          <div className="flex items-center gap-2 text-xs">
            <Heart size={14} className="text-primary fill-primary" />
            <span className="font-bold">{a}</span>
            <ArrowRight size={10} className="text-muted-foreground" />
            <span className="font-bold">{b}</span>
            <Star size={12} className="ml-auto text-primary fill-primary" />
          </div>
          <p className="text-[10px] text-muted-foreground mt-1 ml-6">{note}</p>
        </div>
      ))}
    </div>
    <BottomNav active={2} />
  </div>
);

export const ScreenHero = () => (
  <div className="h-full flex flex-col bg-white">
    <div className="bg-gradient-hero px-5 pt-3 pb-8 rounded-b-3xl text-primary-foreground">
      <StatusBar />
      <div className="mt-3">
        <p className="text-[10px] opacity-80">Next train to</p>
        <p className="font-extrabold text-xl">Alexandria</p>
        <div className="flex items-baseline gap-2 mt-2">
          <Clock size={14} />
          <span className="text-3xl font-black tracking-tight">07:00</span>
          <span className="text-xs opacity-80">in 12 min</span>
        </div>
      </div>
    </div>
    <div className="px-5 py-4 flex-1 space-y-2">
      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Live trains</p>
      {[
        { t: "07:00", d: "Cairo → Alex", s: "On time" },
        { t: "07:35", d: "Cairo → Tanta", s: "On time" },
        { t: "08:10", d: "Cairo → Mansoura", s: "+5 min" },
        { t: "08:45", d: "Giza → Luxor", s: "On time" },
      ].map((x, i) => (
        <div key={i} className="flex items-center gap-3 py-2 border-b border-border">
          <span className="font-bold text-sm">{x.t}</span>
          <span className="text-xs flex-1">{x.d}</span>
          <span className={`text-[10px] font-semibold ${x.s === "On time" ? "text-emerald-600" : "text-primary"}`}>{x.s}</span>
        </div>
      ))}
    </div>
    <BottomNav active={0} />
  </div>
);
