import { Calendar, ChevronDown, UserRound } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";
import { paths } from "../config/site";
import { en } from "../localization/en";

export function BookingSearch() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const dayAfterCheckIn = checkIn ? new Date(checkIn) : undefined;
  dayAfterCheckIn?.setUTCDate(dayAfterCheckIn.getUTCDate() + 1);
  const minCheckout =
    dayAfterCheckIn && Number.isFinite(dayAfterCheckIn.getTime())
      ? dayAfterCheckIn.toISOString().slice(0, 10)
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
          max="9999-12-30"
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
          max="9999-12-31"
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
          {Array.from({ length: 8 }, (_, index) => index + 1).map((count) => (
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
