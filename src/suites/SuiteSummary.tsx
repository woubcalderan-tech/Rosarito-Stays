import { suitePath } from "../config/site";
import { en } from "../localization/en";
import type { Suite } from "../types/content";
import { ActionLink } from "../ui/Content";
import { ResponsiveImage } from "../ui/ResponsiveImage";

export function SuiteSummary({ suite }: { suite: Suite }) {
  const image = suite.images?.[0];
  return (
    <article className="suite-summary">
      {image && <ResponsiveImage {...image} />}
      <div className="suite-summary-content">
        <h2>{suite.name}</h2>
        {suite.summary && <p>{suite.summary}</p>}
        <ActionLink variant="secondary" to={suitePath(suite.slug)}>
          {en.viewSuite}
          <span className="sr-only"> — {suite.name}</span>
        </ActionLink>
      </div>
    </article>
  );
}
