import { Calendar, ChevronDown, UserRound } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";
import { paths, property } from "../config/site";
import { en } from "../localization/en";

export function BookingSearch() {
  const navigate = useNavigate();
  const rules = property.booking;
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const firstCheckout = checkIn ? new Date(checkIn) : undefined;
  firstCheckout?.setUTCDate(firstCheckout.getUTCDate() + rules.minimumNights);
  const minCheckout =
    firstCheckout && Number.isFinite(firstCheckout.getTime())
      ? firstCheckout.toISOString().slice(0, 10)
      : undefined;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = new URLSearchParams();
    if (checkIn) query.set("checkIn", checkIn);
    if (checkOut) query.set("checkOut", checkOut);
    if (guests) query.set("guests", guests);
    const search = query.toString();
    void navigate({
      pathname: paths.booking,
      search: search ? `?${search}` : "",
    });
  }

  return (
    <form
      className="home-booking-search"
      aria-label="Plan a stay"
      onSubmit={submit}
    >
      <label className="home-booking-field">
        <Calendar size={19} aria-hidden="true" />
        <span className={checkIn ? "sr-only" : "home-date-placeholder"}>
          Check-in
        </span>
        <input
          type="date"
          value={checkIn}
          min={rules.earliestCheckIn}
          max={rules.latestCheckIn}
          data-filled={Boolean(checkIn)}
          onChange={(event) => setCheckIn(event.target.value)}
        />
      </label>
      <label className="home-booking-field">
        <Calendar size={19} aria-hidden="true" />
        <span className={checkOut ? "sr-only" : "home-date-placeholder"}>
          Check-out
        </span>
        <input
          type="date"
          value={checkOut}
          max={rules.latestCheckOut}
          min={minCheckout}
          data-filled={Boolean(checkOut)}
          onChange={(event) => setCheckOut(event.target.value)}
        />
      </label>
      <label className="home-booking-field home-booking-guests">
        <UserRound size={19} aria-hidden="true" />
        <span className="sr-only">Guests</span>
        <select
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
        >
          <option value="">Guests</option>
          {rules.guestCounts.map((count) => (
            <option key={count} value={count}>
              {count} {count === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
        <ChevronDown size={14} aria-hidden="true" />
      </label>
      <button type="submit" className="action action--primary">
        {en.booking}
      </button>
    </form>
  );
}
