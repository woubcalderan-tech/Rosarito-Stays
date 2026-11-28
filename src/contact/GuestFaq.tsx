import {
  BedDouble,
  CalendarDays,
  ChevronDown,
  Plane,
  Sprout,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import type { ContactFaqQuestion, ContactPageConfig } from "../config/property";
import { property } from "../config/site";
import { PolicyTime } from "../ui/PolicyTime";

const groupIcons = { calendar: CalendarDays, plane: Plane, bed: BedDouble };
const unconfigured = "This information has not been configured.";

function answerContent(answer: ContactFaqQuestion["answer"]) {
  if ("text" in answer) return answer.text;
  const policies =
    property.guestPolicies?.status === "verified" ||
    property.kind === "fictional-demo"
      ? property.guestPolicies
      : undefined;

  switch (answer.fact) {
    case "stay-times": {
      const { checkInFrom, checkOutBy, quietHours } = policies ?? {};
      if (!checkInFrom && !checkOutBy) return unconfigured;
      return (
        <>
          {checkInFrom && (
            <>
              Check-in is from <PolicyTime value={checkInFrom} />.{" "}
            </>
          )}
          {checkOutBy && (
            <>
              Check-out is by <PolicyTime value={checkOutBy} />.{" "}
            </>
          )}
          {quietHours && (
            <>
              Quiet hours are <PolicyTime value={quietHours.from} />–
              <PolicyTime value={quietHours.until} />.
            </>
          )}
        </>
      );
    }
    case "parking": {
      const parking = policies?.parking;
      if (!parking) return unconfigured;
      return (
        parking.description ??
        (parking.availability === "unavailable"
          ? "Parking is unavailable."
          : `Parking is available ${parking.availability}.`)
      );
    }
    case "wifi": {
      const equipped = property.suites.filter(
        ({ amenities, details }) =>
          amenities?.some(({ id }) => id === "wifi") ||
          details?.extraAmenities?.some(({ id }) => id === "wifi"),
      );
      if (!equipped.length)
        return "Wi-Fi is not listed in the configured suite amenities.";
      const names = new Intl.ListFormat(property.locale).format(
        equipped.map(({ name }) => name),
      );
      return `Wi-Fi is listed for ${names}. Check the amenities for your selected suite.`;
    }
    case "pets": {
      const pets = policies?.pets;
      if (!pets) return unconfigured;
      return {
        allowed: "Pets are welcome.",
        "not-allowed": "The guest policy does not allow pets.",
        "on-request": "Pets are allowed by prior arrangement.",
      }[pets];
    }
    case "occupancy": {
      const capacities = property.suites.flatMap(({ maximumGuests }) =>
        maximumGuests === undefined ? [] : [maximumGuests],
      );
      if (!capacities.length) return unconfigured;
      const minimum = Math.min(...capacities);
      const maximum = Math.max(...capacities);
      const limit =
        minimum === maximum ? `${maximum}` : `${minimum} to ${maximum}`;
      return `Include everyone in the guest count and follow the limit for your selected suite. The configured capacities are ${limit} guests.${policies?.registeredGuestsOnly ? " Only registered guests may stay." : ""}`;
    }
  }
}

function FaqQuestion({
  question,
  prefix,
  open,
  onToggle,
}: {
  question: ContactFaqQuestion;
  prefix: string;
  open: boolean;
  onToggle: () => void;
}) {
  const id = `${prefix}-${question.id}`;
  return (
    <div className="contact-faq-question">
      <h4>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
        >
          {question.question} <ChevronDown aria-hidden="true" />
        </button>
      </h4>
      <div className="contact-faq-answer" id={id} hidden={!open}>
        <p>{answerContent(question.answer)}</p>
        {question.answer.link && (
          <Link to={question.answer.link.to}>{question.answer.link.label}</Link>
        )}
      </div>
    </div>
  );
}

type FaqGroupConfig = ContactPageConfig["faq"]["groups"][number];

function FaqGroup({
  group,
  mobile,
  first = false,
}: {
  group: FaqGroupConfig;
  mobile: boolean;
  first?: boolean;
}) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selection, setSelection] = useState<string | null>();
  const selected =
    selection === undefined && first && !mobile
      ? group.questions[0]?.id
      : selection;
  const id = `faq-${group.id}`;
  const Icon = groupIcons[group.icon];
  const label = (
    <>
      <Icon className="contact-faq-icon" aria-hidden="true" /> {group.heading}
    </>
  );

  return (
    <section className="contact-faq-group" aria-labelledby={`${id}-heading`}>
      <h3 id={`${id}-heading`}>
        {mobile ? (
          <button
            type="button"
            aria-expanded={categoryOpen}
            aria-controls={id}
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            {label}
            <ChevronDown className="contact-faq-chevron" aria-hidden="true" />
          </button>
        ) : (
          label
        )}
      </h3>
      <div
        className="contact-faq-questions"
        id={id}
        hidden={mobile && !categoryOpen}
      >
        {group.questions.map((question) => (
          <FaqQuestion
            key={question.id}
            prefix={id}
            question={question}
            open={question.id === selected}
            onToggle={() =>
              setSelection(selected === question.id ? null : question.id)
            }
          />
        ))}
      </div>
    </section>
  );
}

export function GuestFaq({
  copy,
  mobile,
}: {
  copy: ContactPageConfig["faq"];
  mobile: boolean;
}) {
  const [first, ...remaining] = copy.groups;
  return (
    <section className="contact-faq" aria-labelledby="contact-faq-heading">
      <div className="contact-faq-divider" aria-hidden="true">
        <Sprout />
      </div>
      <h2 id="contact-faq-heading">{copy.heading}</h2>
      <p>{copy.description}</p>
      <div className="contact-faq-columns">
        {first && (
          <FaqGroup key={first.id} group={first} mobile={mobile} first />
        )}
        <div className="contact-faq-secondary">
          {remaining.map((group) => (
            <FaqGroup key={group.id} group={group} mobile={mobile} />
          ))}
        </div>
      </div>
    </section>
  );
}
