import type { PropertyConfig } from "./property.ts";

export const demoBooking = {
  mode: "demo",
  guestCounts: [1, 2, 3, 4, 5, 6, 7, 8],
  latestCheckIn: "9999-12-30",
  latestCheckOut: "9999-12-31",
  minimumNights: 1,
  description: "Online booking is planned for a future phase.",
} satisfies PropertyConfig["booking"];
