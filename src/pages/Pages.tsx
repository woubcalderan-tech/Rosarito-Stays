import type { ReactNode } from "react";
import { useParams, useSearchParams } from "react-router";
import { validSuiteBooking } from "../booking/booking-selection";
import { paths, property } from "../config/site";
import { en } from "../localization/en";
import { getSuite } from "../services/suites";
import { SuiteDetails } from "../suites/SuiteDetails";
import { ActionLink, Metadata, Section } from "../ui/Content";

export { HomePage } from "./HomePage";

export { AccommodationsPage } from "./AccommodationsPage";

export function SuitePage() {
  const suite = getSuite(useParams().slug);
  return suite ? (
    <SuiteDetails key={suite.id} suite={suite} />
  ) : (
    <NotFoundPage />
  );
}
export function BookingPage() {
  const [params] = useSearchParams();
  const suite = getSuite(params.get("suite") ?? undefined);
  const checkIn = params.get("checkIn") ?? "";
  const checkOut = params.get("checkOut") ?? "";
  const guests = params.get("guests") ?? "";
  const hasSelection =
    params.has("checkIn") || params.has("checkOut") || params.has("guests");
  const valid = suite && validSuiteBooking(suite, checkIn, checkOut, guests);
  return (
    <PlaceholderPage title="Booking" description={property.booking.description}>
      {suite && (
        <>
          <p>Selected suite: {suite.name}</p>
          {valid && (
            <p>
              Check-in: {checkIn} · Check-out: {checkOut} · Guests: {guests}
            </p>
          )}
          {!valid && hasSelection && (
            <p>Choose valid dates and a guest count for this suite.</p>
          )}
          <p>{property.booking.description}</p>
        </>
      )}
    </PlaceholderPage>
  );
}

export function ContactPage() {
  const { address, email, telephone } = property.contact ?? {};
  return (
    <PlaceholderPage title="Contact">
      {(address || email || telephone) && (
        <address>
          {address && <p>{address}</p>}
          {email && (
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          )}
          {telephone && (
            <p>
              <a href={`tel:${telephone}`}>{telephone}</a>
            </p>
          )}
        </address>
      )}
    </PlaceholderPage>
  );
}
export function PlaceholderPage({
  title,
  description = en.pending,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <>
      <Metadata title={title} description={description} />
      <Section labelledBy="page-title">
        <h1 id="page-title">{title}</h1>
        {children ?? <p>{description}</p>}
      </Section>
    </>
  );
}
export function NotFoundPage() {
  return (
    <>
      <Metadata
        title="Page not found"
        description="This page could not be found."
      />
      <Section labelledBy="not-found-title">
        <h1 id="not-found-title">Page not found</h1>
        <p>The page you are looking for could not be found.</p>
        <ActionLink to={paths.home} variant="secondary">
          Back to Home
        </ActionLink>
      </Section>
    </>
  );
}
