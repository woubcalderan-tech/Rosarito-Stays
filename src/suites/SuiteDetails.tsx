import { Link } from "react-router";
import { BookingLink } from "../booking/BookingLink";
import { paths, site } from "../config/site";
import { en } from "../localization/en";
import type { Suite } from "../types/content";
import { Metadata, Section } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";

export function SuiteDetails({ suite }: { suite: Suite }) {
  const image = suite.images?.[0];
  return (
    <>
      <Metadata
        title={suite.name}
        description={`Explore ${suite.name} at ${site.name}.`}
      />
      <Section labelledBy="suite-title">
        <div
          className={
            image ? "suite-details suite-details--with-image" : "suite-details"
          }
        >
          <div className="suite-intro">
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumbs">
                <li>
                  <Link to={paths.home}>Home</Link>
                </li>
                <li>
                  <Link to={paths.accommodations}>{en.accommodations}</Link>
                </li>
                <li aria-current="page">{suite.name}</li>
              </ol>
            </nav>
            <h1 id="suite-title">{suite.name}</h1>
            <p>{suite.summary ?? en.pending}</p>
          </div>
          {image && (
            <div className="suite-photo">
              <ResponsiveImage {...image} priority />
            </div>
          )}
          <div className="suite-actions">
            <BookingLink />
          </div>
        </div>
      </Section>
    </>
  );
}
