import { ArrowRight, Calendar, ChevronDown, UserRound } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";
import { paths, property } from "../config/site";
import { en } from "../localization/en";
import type { Suite } from "../types/content";
import {
  minimumCheckout,
  suiteEarliestCheckIn,
  suiteGuestCounts,
  validSuiteBooking,
} from "./booking-selection";

export function BookingSearch({ suite }: { suite?: Suite }) {
  const navigate = useNavigate();
  const rules = property.booking;
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [error, setError] = useState("");
  const earliestCheckIn = suite
    ? suiteEarliestCheckIn()
    : rules.earliestCheckIn;
  const minCheckout = minimumCheckout(
    checkIn,
    suite ? Math.max(1, rules.minimumNights) : rules.minimumNights,
  );
  const guestCounts = suite ? suiteGuestCounts(suite) : rules.guestCounts;
  const fieldClass = suite ? "suite-booking-field" : "home-booking-field";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (suite && !validSuiteBooking(suite, checkIn, checkOut, guests)) {
      setError("Choose valid dates and a guest count for this suite.");
      return;
    }
    const query = new URLSearchParams();
    if (suite) query.set("suite", suite.slug);
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
      className={suite ? "suite-booking-search" : "home-booking-search"}
      aria-label={suite ? `Plan a stay in ${suite.name}` : "Plan a stay"}
      onSubmit={submit}
    >
      <label className={fieldClass}>
        <Calendar size={19} aria-hidden="true" />
        <span
          className={
            suite ? undefined : checkIn ? "sr-only" : "home-date-placeholder"
          }
        >
          Check-in
        </span>
        <input
          type="date"
          value={checkIn}
          required={Boolean(suite)}
          min={earliestCheckIn}
          max={rules.latestCheckIn}
          data-filled={Boolean(checkIn)}
          onChange={(event) => setCheckIn(event.target.value)}
        />
      </label>
      <label className={fieldClass}>
        <Calendar size={19} aria-hidden="true" />
        <span
          className={
            suite ? undefined : checkOut ? "sr-only" : "home-date-placeholder"
          }
        >
          Check-out
        </span>
        <input
          type="date"
          value={checkOut}
          required={Boolean(suite)}
          max={rules.latestCheckOut}
          min={minCheckout}
          data-filled={Boolean(checkOut)}
          onChange={(event) => setCheckOut(event.target.value)}
        />
      </label>
      <label
        className={
          suite
            ? "suite-booking-field suite-booking-guests"
            : "home-booking-field home-booking-guests"
        }
      >
        <UserRound size={19} aria-hidden="true" />
        <span className={suite ? undefined : "sr-only"}>Guests</span>
        <select
          value={guests}
          required={Boolean(suite)}
          onChange={(event) => setGuests(event.target.value)}
        >
          <option value="">{suite ? "Select guests" : "Guests"}</option>
          {guestCounts.map((count) => (
            <option key={count} value={count}>
              {count} {count === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
        <ChevronDown size={14} aria-hidden="true" />
      </label>
      {error && (
        <p className="suite-booking-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="action action--primary">
        {en.booking}
        {suite && <ArrowRight size={16} aria-hidden="true" />}
      </button>
    </form>
  );
}
