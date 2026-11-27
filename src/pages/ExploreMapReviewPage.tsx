import { useRef, useState } from "react";
import wave from "../assets/brand/coastal-wave.svg";
import { propertyImage } from "../assets/images/homepage";
import { property } from "../config/site";
import { IllustrativeMap } from "../maps/IllustrativeMap";
import type { IllustrativeMapHandle } from "../maps/IllustrativeMap";
import { RosaritoBackdrop } from "../maps/RosaritoBackdrop";

export function ExploreMapReviewPage() {
  const guide = property.destinationGuide;
  const [selected, setSelected] = useState<string | null>(
    guide?.map.defaultAttractionId ?? null,
  );
  const [requested, setRequested] = useState("");
  const map = useRef<IllustrativeMapHandle>(null);
  if (!guide) return null;

  return (
    <div className="guide-map-review">
      <meta name="robots" content="noindex, nofollow" />
      <h1>{guide.intro.heading} map preview</h1>
      <IllustrativeMap
        ref={map}
        attractions={guide.attractions}
        settings={guide.map}
        selectedId={selected}
        onSelectionChange={setSelected}
        onViewAttraction={setRequested}
        backdrop={<RosaritoBackdrop city={property.location?.city} />}
        brandMark={wave}
        photographyDisclosure={guide.photographyDisclosure}
        resolveImage={propertyImage}
      />
      <section
        className="guide-map-review-test"
        aria-label="Local integration checks"
      >
        <output aria-label="Selected destination ID">
          {selected ?? "none"}
        </output>
        <output aria-label="Requested attraction ID">
          {requested || "none"}
        </output>
        {guide.attractions[0] && (
          <button
            className="action action--secondary"
            type="button"
            onClick={() => {
              const first = guide.attractions[0];
              if (first) map.current?.focusDestination(first.id);
            }}
          >
            Focus {guide.attractions[0].name}
          </button>
        )}
      </section>
    </div>
  );
}
