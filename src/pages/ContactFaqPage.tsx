import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { propertyImage } from "../assets/images/homepage";
import { CompactBookingBanner } from "../booking/CompactBookingBanner";
import type { ContactPageConfig } from "../config/property";
import { property, verifiedContact } from "../config/site";
import { ContactForm } from "../contact/ContactForm";
import { GuestFaq } from "../contact/GuestFaq";
import { useMobileViewport } from "../hooks/useMobileViewport";
import { Metadata } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import { ContactPage } from "./Pages";
import "../styles/contact-faq.css";

function ContactInformation({
  copy,
  mobile,
}: {
  copy: ContactPageConfig["information"];
  mobile: boolean;
}) {
  const { email, telephone, whatsapp } = verifiedContact ?? {};
  const location = property.location;
  const area =
    copy.locationLabel ??
    (location &&
      [location.city, location.region, location.country]
        .filter(Boolean)
        .join(", "));
  const whatsappDigits = whatsapp?.replace(/\D/g, "");
  const channels = [
    {
      label: "Email",
      Icon: Mail,
      value: email,
      href: email && `mailto:${email}`,
    },
    {
      label: "Phone",
      Icon: Phone,
      value: telephone,
      href: telephone && `tel:${telephone.replace(/[^\d+]/g, "")}`,
    },
    {
      label: "WhatsApp",
      Icon: MessageCircle,
      value: whatsapp,
      href: whatsappDigits && `https://wa.me/${whatsappDigits}`,
    },
    { label: "Location", Icon: MapPin, value: area, href: undefined },
  ];

  return (
    <section
      className="contact-information"
      aria-labelledby="contact-information-heading"
    >
      <header className="contact-information-intro">
        <p className="contact-eyebrow">{copy.eyebrow}</p>
        <h2 id="contact-information-heading">{copy.heading}</h2>
        <p>{copy.description}</p>
      </header>
      <div
        className="contact-information-body"
        data-photo={!mobile && !!copy.decorativePhoto}
      >
        <ul className="contact-methods">
          {channels.map(({ label, Icon, value, href }) => (
            <li key={label}>
              <span className="contact-method-icon">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <strong>{label}</strong>
                {href ? (
                  <a href={href}>{value}</a>
                ) : (
                  <span>{value ?? copy.unavailable}</span>
                )}
                {label === "Location" &&
                  area &&
                  property.kind === "fictional-demo" && (
                    <small>Illustrative location</small>
                  )}
              </div>
            </li>
          ))}
        </ul>
        {!mobile && copy.decorativePhoto && (
          <ResponsiveImage
            {...propertyImage(
              copy.decorativePhoto,
              "(width < 64rem) 20vw, min(19vw, 20rem)",
            )}
            position={copy.decorativePhoto.position}
          />
        )}
      </div>
    </section>
  );
}

export function ContactFaqPage() {
  const mobile = useMobileViewport();
  const copy = property.contactPage;
  if (!copy) return <ContactPage />;

  return (
    <div className="contact-page">
      <Metadata title={copy.hero.heading} description={copy.hero.description} />
      <section className="contact-hero" aria-labelledby="contact-page-heading">
        {copy.hero.photo && (
          <ResponsiveImage
            {...propertyImage(
              copy.hero.photo,
              "(width < 48rem) clamp(40rem, 155vw, 54rem), 100vw",
            )}
            position={copy.hero.photo.position}
            priority
          />
        )}
        <div className="contact-hero-copy">
          <h1 id="contact-page-heading">{copy.hero.heading}</h1>
          <p>{copy.hero.description}</p>
        </div>
      </section>

      <div className="contact-content">
        <div className="contact-grid">
          <ContactInformation copy={copy.information} mobile={mobile} />
          <ContactForm copy={copy.form} />
        </div>
        <GuestFaq copy={copy.faq} mobile={mobile} />
      </div>

      <CompactBookingBanner
        heading={copy.bookingBanner.heading}
        description={copy.bookingBanner.description}
        photo={
          copy.bookingBanner.photo &&
          propertyImage(copy.bookingBanner.photo, "min(96vw, 112rem)")
        }
      />
    </div>
  );
}
