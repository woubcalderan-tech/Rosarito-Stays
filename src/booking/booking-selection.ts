import { property } from "../config/site";
import type { Suite } from "../types/content";

export function minimumCheckout(checkIn: string, minimumNights: number) {
  if (!checkIn) return undefined;
  const date = new Date(checkIn);
  date.setUTCDate(date.getUTCDate() + minimumNights);
  return Number.isFinite(date.getTime())
    ? date.toISOString().slice(0, 10)
    : undefined;
}

export function suiteGuestCounts(suite: Suite) {
  const capacity = suite.maximumGuests;
  return property.booking.guestCounts.filter(
    (guests) => capacity === undefined || guests <= capacity,
  );
}

export function suiteEarliestCheckIn() {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: property.location?.timezone ?? "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const today = ["year", "month", "day"]
    .map((part) => parts.find(({ type }) => type === part)?.value)
    .join("-");
  const configured = property.booking.earliestCheckIn;
  return configured && configured > today ? configured : today;
}

function isDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  return minimumCheckout(value, 0) === value;
}

export function validSuiteBooking(
  suite: Suite,
  checkIn: string,
  checkOut: string,
  guests: string,
) {
  if (!isDate(checkIn) || !isDate(checkOut)) return false;
  const rules = property.booking;
  const firstCheckout = minimumCheckout(
    checkIn,
    Math.max(1, rules.minimumNights),
  );
  return (
    checkIn >= suiteEarliestCheckIn() &&
    checkIn <= rules.latestCheckIn &&
    firstCheckout !== undefined &&
    checkOut > checkIn &&
    checkOut >= firstCheckout &&
    checkOut <= rules.latestCheckOut &&
    suiteGuestCounts(suite).map(String).includes(guests)
  );
}
