import { property } from "../config/site";

export function PolicyTime({ value }: { value: string }) {
  const [hour, minute] = value.split(":").map(Number);
  const time = new Intl.DateTimeFormat(property.locale, {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(Date.UTC(2000, 0, 1, hour, minute));
  return <time dateTime={value}>{time}</time>;
}
