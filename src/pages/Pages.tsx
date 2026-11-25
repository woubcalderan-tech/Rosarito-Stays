import { useParams } from "react-router";
import { paths } from "../config/site";
import { en } from "../localization/en";
import { getSuite, listSuites } from "../services/suites";
import { SuiteDetails } from "../suites/SuiteDetails";
import { SuiteSummary } from "../suites/SuiteSummary";
import { ActionLink, Metadata, Section } from "../ui/Content";

export { HomePage } from "./HomePage";

export function AccommodationsPage() {
  return (
    <>
      <Metadata
        title={en.accommodations}
        description="Browse the suites at Rosarito Stays."
      />
      <Section labelledBy="listing-title">
        <p className="eyebrow">{en.accommodations}</p>
        <h1 id="listing-title">Find your stay</h1>
        <div className="short-rule" aria-hidden="true" />
        <div className="suite-grid">
          {listSuites().map((suite) => (
            <SuiteSummary key={suite.slug} suite={suite} />
          ))}
        </div>
      </Section>
    </>
  );
}
export function SuitePage() {
  const suite = getSuite(useParams().slug);
  return suite ? <SuiteDetails suite={suite} /> : <NotFoundPage />;
}
export function PlaceholderPage({
  title,
  description = en.pending,
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <Metadata title={title} description={description} />
      <Section labelledBy="page-title">
        <h1 id="page-title">{title}</h1>
        <p>{description}</p>
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
