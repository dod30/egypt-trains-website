import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  ArrowLeftRight,
  Clock,
  ExternalLink,
  MapPin,
  Search,
  Star,
  Train as TrainIcon,
  X,
} from "lucide-react";
import {
  findTrains,
  formatDuration,
  formatTime,
  getStationById,
  searchStations,
  stationName,
} from "@/lib/trainSearch";
import { TRAIN_TYPE_META } from "@/data/trainTypes";
import type { ScheduleResult, Station } from "@/data/types";

const ENR_BOOKING = "https://obs.enr.gov.eg/o-city/obs/enr/railway/ar/booktickets";

const TYPE_GRADIENTS: Record<string, string> = {
  vip_premium: "from-fuchsia-500 to-purple-600",
  vip: "from-violet-500 to-purple-600",
  talgo: "from-pink-500 to-rose-500",
  spanish_ac: "from-sky-500 to-cyan-400",
  french_ac: "from-blue-500 to-blue-400",
  russian_ac: "from-cyan-500 to-cyan-400",
  russian_first: "from-cyan-700 to-cyan-500",
  russian: "from-blue-600 to-sky-500",
  improved: "from-lime-600 to-lime-400",
  mix: "from-yellow-600 to-yellow-400",
  sleeper: "from-indigo-700 to-indigo-500",
  ordinary: "from-gray-500 to-gray-400",
};

interface PanelProps {
  initialFromId?: string | null;
  initialToId?: string | null;
  onChange?: (fromId: string | null, toId: string | null) => void;
  /** Show all results without the "+N more, download app" cap. */
  unlimited?: boolean;
}

export const TrainSearchPanel = ({
  initialFromId = null,
  initialToId = null,
  onChange,
  unlimited = false,
}: PanelProps) => {
  const { lang, dir } = useLanguage();
  const isRtl = dir === "rtl";
  const isAr = lang === "ar";

  const [fromId, setFromId] = useState<string | null>(initialFromId);
  const [toId, setToId] = useState<string | null>(initialToId);
  const [pickerRole, setPickerRole] = useState<"from" | "to" | null>(null);
  const [didSearch, setDidSearch] = useState(!!(initialFromId && initialToId));

  // Keep state in sync with prop changes (e.g. URL params change)
  useEffect(() => {
    setFromId(initialFromId);
    setToId(initialToId);
    if (initialFromId && initialToId) setDidSearch(true);
  }, [initialFromId, initialToId]);

  const from = fromId ? getStationById(fromId) : null;
  const to = toId ? getStationById(toId) : null;

  const results = useMemo<ScheduleResult[]>(() => {
    if (!fromId || !toId) return [];
    return findTrains(fromId, toId);
  }, [fromId, toId]);

  const swap = () => {
    const newFrom = toId;
    const newTo = fromId;
    setFromId(newFrom);
    setToId(newTo);
    onChange?.(newFrom, newTo);
  };

  const updateFrom = (id: string) => {
    setFromId(id);
    onChange?.(id, toId);
  };
  const updateTo = (id: string) => {
    setToId(id);
    onChange?.(fromId, id);
  };

  const visibleResults = unlimited ? results : results.slice(0, 30);
  const cappedExtra = !unlimited && results.length > 30 ? results.length - 30 : 0;

  return (
    <>
      <div className="relative rounded-3xl bg-card border border-border shadow-soft p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-3 items-stretch">
          <FieldButton
            label={isAr ? "من" : "From"}
            icon="dot"
            station={from}
            lang={lang}
            placeholder={isAr ? "اختر المحطة" : "Pick station"}
            onClick={() => setPickerRole("from")}
          />
          <button
            onClick={swap}
            aria-label={isAr ? "تبديل" : "Swap"}
            className="self-center md:self-auto p-3 rounded-full bg-gradient-hero text-primary-foreground shadow-glow hover:scale-110 transition-smooth"
          >
            <ArrowLeftRight size={18} className={isRtl ? "rotate-180" : ""} />
          </button>
          <FieldButton
            label={isAr ? "إلى" : "To"}
            icon="pin"
            station={to}
            lang={lang}
            placeholder={isAr ? "اختر المحطة" : "Pick station"}
            onClick={() => setPickerRole("to")}
          />
        </div>

        <button
          disabled={!fromId || !toId}
          onClick={() => setDidSearch(true)}
          className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-hero text-primary-foreground font-bold shadow-glow disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed hover:scale-[1.02] transition-smooth"
        >
          <Search size={18} />
          {isAr ? "بحث عن القطارات" : "Search trains"}
        </button>
      </div>

      {didSearch && fromId && toId && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-sm text-muted-foreground">
              {results.length} {isAr ? "قطار" : results.length === 1 ? "train" : "trains"}
            </span>
            <a
              href={ENR_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
            >
              {isAr ? "احجز من الموقع الرسمي" : "Book on ENR"}
              <ExternalLink size={14} />
            </a>
          </div>

          {results.length === 0 ? (
            <div className="rounded-2xl bg-card border border-border p-10 text-center">
              <TrainIcon size={36} className="mx-auto text-muted-foreground mb-3" />
              <p className="font-medium">
                {isAr
                  ? "لا توجد قطارات مباشرة على هذا المسار."
                  : "No direct trains on this route."}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {visibleResults.map((r) => (
                <ResultCard key={r.train.number + r.fromStop.stationId} result={r} />
              ))}
              {cappedExtra > 0 && (
                <p className="text-center text-sm text-muted-foreground pt-2">
                  {isAr
                    ? `+ ${cappedExtra} قطار أكتر — حمّل التطبيق لتشوفهم كلهم`
                    : `+ ${cappedExtra} more — download the app to see them all`}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {pickerRole && (
        <StationPicker
          excludeId={pickerRole === "from" ? toId ?? undefined : fromId ?? undefined}
          onClose={() => setPickerRole(null)}
          onPick={(s) => {
            if (pickerRole === "from") updateFrom(s.id);
            else updateTo(s.id);
            setPickerRole(null);
          }}
          title={pickerRole === "from" ? (isAr ? "من" : "From") : isAr ? "إلى" : "To"}
        />
      )}
    </>
  );
};

/** Compact section used on the home page — full search lives at /search. */
export const SearchTrains = () => {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section id="search" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-balance">
            {isAr ? "ابحث عن قطار" : "Search trains"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isAr
              ? "اعرف ميعاد القطار من على الموقع — مجاني وبدون تثبيت."
              : "Find your train right here — free, no install required."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <TrainSearchPanel />
        </div>
        <div className="text-center mt-6">
          <a
            href="/search"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
          >
            {isAr ? "افتح صفحة البحث الكاملة ←" : "Open the full search page →"}
          </a>
        </div>
      </div>
    </section>
  );
};

function FieldButton({
  label,
  icon,
  station,
  lang,
  placeholder,
  onClick,
}: {
  label: string;
  icon: "dot" | "pin";
  station: Station | null;
  lang: "ar" | "en";
  placeholder: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex-1 text-start p-4 rounded-2xl bg-secondary/50 border border-border hover:border-primary/40 hover:bg-secondary transition-smooth"
    >
      <div className="flex items-center gap-3">
        {icon === "dot" ? (
          <Star size={18} className="text-primary shrink-0" fill="currentColor" />
        ) : (
          <MapPin size={18} className="text-primary shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <div className="text-xs text-muted-foreground">{label}</div>
          <div className="font-bold truncate">
            {station ? stationName(station, lang) : placeholder}
          </div>
        </div>
      </div>
    </button>
  );
}

function ResultCard({ result }: { result: ScheduleResult }) {
  const { lang, dir } = useLanguage();
  const isRtl = dir === "rtl";
  const { train, fromStop, toStop, durationMinutes } = result;
  const fromS = getStationById(fromStop.stationId);
  const toS = getStationById(toStop.stationId);
  const meta = TRAIN_TYPE_META[train.type];
  const gradient = TYPE_GRADIENTS[train.type] ?? TYPE_GRADIENTS.ordinary;
  const stops = train.stops.length - 2;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-glow hover:border-primary/30 transition-smooth">
      <div
        className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b ${gradient} ${
          isRtl ? "right-0" : "left-0"
        }`}
      />
      <div className="p-5 ps-6">
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-br ${gradient}`}
          >
            {lang === "ar" ? meta.ar : meta.en}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[11px] font-bold text-muted-foreground bg-secondary border border-border inline-flex items-center gap-1">
            <TrainIcon size={11} /> {train.number}
          </span>
          <div className="flex-1" />
          {train.notes && (
            <span className="text-[11px] text-muted-foreground italic">{train.notes}</span>
          )}
        </div>

        <div className="grid grid-cols-3 items-center">
          <div className={isRtl ? "text-right" : "text-left"}>
            <div className="text-xs text-muted-foreground mb-1">
              {lang === "ar" ? "المغادرة" : "Departure"}
            </div>
            <div className="text-2xl font-black">
              {formatTime(fromStop.departure, lang)}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {fromS && stationName(fromS, lang)}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary border border-border text-[11px] font-bold text-muted-foreground">
              <Clock size={10} /> {formatDuration(durationMinutes, lang)}
            </div>
            <div className={`my-2 h-px w-full bg-gradient-to-r ${gradient}`} />
            <div className="text-[11px] text-muted-foreground">
              {stops > 0
                ? `${stops} ${lang === "ar" ? "محطة" : "stops"}`
                : lang === "ar"
                ? "مباشر"
                : "Direct"}
            </div>
          </div>

          <div className={isRtl ? "text-left" : "text-right"}>
            <div className="text-xs text-muted-foreground mb-1">
              {lang === "ar" ? "الوصول" : "Arrival"}
            </div>
            <div className="text-2xl font-black">
              {formatTime(toStop.arrival, lang)}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {toS && stationName(toS, lang)}
            </div>
          </div>
        </div>

        {train.fares.length > 0 && (
          <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-2">
            {train.fares.slice(0, 4).map((f) => (
              <span
                key={f.classKey}
                className="text-[11px] px-2 py-1 rounded-full bg-secondary border border-border font-medium"
              >
                {f.priceEGP} {lang === "ar" ? "ج.م" : "EGP"}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StationPicker({
  title,
  excludeId,
  onPick,
  onClose,
}: {
  title: string;
  excludeId?: string;
  onPick: (s: Station) => void;
  onClose: () => void;
}) {
  const { lang, dir } = useLanguage();
  const isRtl = dir === "rtl";
  const [query, setQuery] = useState("");
  const list = useMemo(() => searchStations(query, excludeId), [query, excludeId]);

  return (
    <div
      className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
    >
      <div
        className="w-full md:max-w-lg bg-background rounded-t-3xl md:rounded-3xl shadow-glow flex flex-col max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h3 className="font-black text-lg">{title}</h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-secondary hover:bg-secondary/70 flex items-center justify-center"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-5 pb-3">
          <div className="relative">
            <Search
              size={16}
              className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground ${
                isRtl ? "right-4" : "left-4"
              }`}
            />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={lang === "ar" ? "ابحث عن محطة..." : "Search station..."}
              className={`w-full py-3 rounded-2xl bg-secondary border border-border focus:border-primary/40 focus:outline-none transition-smooth ${
                isRtl ? "pr-11 pl-4 text-right" : "pl-11 pr-4 text-left"
              }`}
              dir={isRtl ? "rtl" : "ltr"}
            />
          </div>
        </div>
        <div className="overflow-y-auto px-3 pb-5">
          {list.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              {lang === "ar" ? "لا توجد نتائج" : "No results"}
            </div>
          ) : (
            list.slice(0, 80).map((s) => (
              <button
                key={s.id}
                onClick={() => onPick(s)}
                className={`w-full p-3 rounded-xl hover:bg-secondary flex items-center gap-3 transition-smooth ${
                  isRtl ? "flex-row-reverse text-right" : "text-left"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    s.majorHub
                      ? "bg-gradient-hero text-white"
                      : "bg-secondary border border-border text-muted-foreground"
                  }`}
                >
                  <TrainIcon size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold truncate">{stationName(s, lang)}</div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
