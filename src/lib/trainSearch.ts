import { STATIONS } from "@/data/stations";
import { TRAINS } from "@/data/trains";
import type { ScheduleResult, Station } from "@/data/types";
import type { Lang } from "@/i18n/translations";

const toMinutes = (t: string): number => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

export const durationMinutes = (dep: string, arr: string): number => {
  const d = toMinutes(dep);
  const a = toMinutes(arr);
  let diff = a - d;
  if (diff < 0) diff += 24 * 60;
  return diff;
};

export function findTrains(fromId: string, toId: string): ScheduleResult[] {
  if (!fromId || !toId || fromId === toId) return [];
  const out: ScheduleResult[] = [];
  for (const train of TRAINS) {
    const fromIdx = train.stops.findIndex((s) => s.stationId === fromId);
    const toIdx = train.stops.findIndex((s) => s.stationId === toId);
    if (fromIdx === -1 || toIdx === -1 || fromIdx >= toIdx) continue;
    const fromStop = train.stops[fromIdx];
    const toStop = train.stops[toIdx];
    if (!fromStop.departure || !toStop.arrival) continue;
    out.push({
      train,
      fromStop,
      toStop,
      durationMinutes: durationMinutes(fromStop.departure, toStop.arrival),
    });
  }
  return out.sort(
    (a, b) => toMinutes(a.fromStop.departure!) - toMinutes(b.fromStop.departure!)
  );
}

export const stationName = (s: Station, lang: Lang) =>
  lang === "ar" ? s.nameAr : s.nameEn;

const norm = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[ً-ٰٟ]/g, "")
    .replace(/[إأآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .trim();

export function searchStations(query: string, exclude?: string): Station[] {
  const q = norm(query);
  const pool = STATIONS.filter((s) => s.id !== exclude);
  if (!q) {
    // Major hubs first
    return [...pool].sort((a, b) => {
      const ma = a.majorHub ? 0 : 1;
      const mb = b.majorHub ? 0 : 1;
      if (ma !== mb) return ma - mb;
      return a.nameAr.localeCompare(b.nameAr);
    });
  }
  return pool.filter(
    (s) => norm(s.nameAr).includes(q) || norm(s.nameEn).includes(q)
  );
}

export function getStationById(id: string): Station | undefined {
  return STATIONS.find((s) => s.id === id);
}

export function formatTime(t: string | null, lang: Lang): string {
  if (!t) return "—";
  const m = /^(\d{1,2}):(\d{2})$/.exec(t.trim());
  if (!m) return t;
  let h = Number(m[1]);
  const mins = m[2];
  const isPm = h >= 12;
  h = h % 12;
  if (h === 0) h = 12;
  const suffix = lang === "ar" ? (isPm ? "م" : "ص") : isPm ? "PM" : "AM";
  return `${h}:${mins} ${suffix}`;
}

export function formatDuration(mins: number, lang: Lang): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const hLabel = lang === "ar" ? "س" : "h";
  const mLabel = lang === "ar" ? "د" : "m";
  const parts: string[] = [];
  if (h > 0) parts.push(`${h}${hLabel}`);
  if (m > 0 || h === 0) parts.push(`${m}${mLabel}`);
  return parts.join(" ");
}
