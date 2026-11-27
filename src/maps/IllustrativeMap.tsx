import { LocateFixed, Maximize, Minus, Plus, X } from "lucide-react";
import {
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { CSSProperties, KeyboardEvent, ReactNode, Ref } from "react";
import type { DestinationGuide } from "../config/property";
import { categoryIcons, DestinationPopup } from "./DestinationPopup";
import type { MapDestination, MapImageResolver } from "./DestinationPopup";
import { mapPoint, MAX_ZOOM, MIN_ZOOM, ZOOM_STEP } from "./map-camera";
import { useMapCamera } from "./useMapCamera";
import "../styles/illustrative-map.css";

export interface IllustrativeMapHandle {
  focusDestination: (id: string, options?: FocusOptions) => void;
  reset: () => void;
}

interface IllustrativeMapProps {
  attractions: DestinationGuide["attractions"];
  settings: DestinationGuide["map"];
  selectedId: string | null;
  defaultSelectedId?: string | null;
  onSelectionChange: (id: string | null) => void;
  onViewAttraction: (id: string) => void;
  backdrop: ReactNode;
  brandMark: string;
  photographyDisclosure: string;
  resolveImage: MapImageResolver;
  ref?: Ref<IllustrativeMapHandle>;
}

type Direction = "right" | "left" | "above" | "below" | "upper-right";
type Point = { x: number; y: number };
type Box = { left: number; top: number; right: number; bottom: number };

const overlaps = (a: Box, b: Box) =>
  a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;

function placeLabels(
  markers: { id: string; point: Point }[],
  width: number,
  height: number,
  selectedId: string | null,
  compact: boolean,
) {
  const placed = new Map<string, Direction>();
  const occupied = markers.map(({ point: { x, y } }) => ({
    left: x - 22,
    right: x + 22,
    top: y - 22,
    bottom: y + 22,
  }));
  const labelWidth = compact ? 64 : 116;
  const labelHeight = compact ? 33 : 38;
  const priority = [...markers].sort(
    (a, b) => Number(b.id === selectedId) - Number(a.id === selectedId),
  );
  for (const {
    id,
    point: { x, y },
  } of priority) {
    const offsets: [Direction, number, number][] = [
      ["right", x + 25, y - labelHeight / 2],
      ["left", x - 25 - labelWidth, y - labelHeight / 2],
      ["upper-right", x + 25, y - labelHeight - 9],
      ["below", x - labelWidth / 2, y + 25],
      ["above", x - labelWidth / 2, y - 25 - labelHeight],
    ];
    if (compact && id === selectedId) {
      offsets.sort(([a], [b]) => Number(b === "above") - Number(a === "above"));
    }
    for (const [direction, left, top] of offsets) {
      const box = {
        left,
        top,
        right: left + labelWidth,
        bottom: top + labelHeight,
      };
      if (
        left < 2 ||
        top < 2 ||
        box.right > width ||
        box.bottom > height ||
        occupied.some((item) => overlaps(item, box))
      )
        continue;
      placed.set(id, direction);
      occupied.push(box);
      break;
    }
  }
  return placed;
}

const panKeys: Record<string, readonly [number, number]> = {
  ArrowLeft: [-54, 0],
  ArrowRight: [54, 0],
  ArrowUp: [0, -54],
  ArrowDown: [0, 54],
};

function destinationPosition(destination: MapDestination) {
  return mapPoint(
    destination.kind === "property"
      ? destination.entry.position
      : destination.entry.marker.position,
  );
}

export function IllustrativeMap({
  attractions,
  settings,
  selectedId,
  defaultSelectedId = settings.defaultAttractionId,
  onSelectionChange,
  onViewAttraction,
  backdrop,
  brandMark,
  photographyDisclosure,
  resolveImage,
  ref,
}: IllustrativeMapProps) {
  const [expanded, setExpanded] = useState(false);
  const {
    frame,
    size,
    camera,
    overlay,
    reset: resetCamera,
    focus,
    pan,
    zoom,
    touchEnabled,
    setTouchEnabled,
    surface,
    pointerHandlers,
  } = useMapCamera(expanded);

  const dialog = useRef<HTMLDialogElement>(null);
  const launch = useRef<HTMLButtonElement>(null);
  const closeExpanded = useRef<HTMLButtonElement>(null);
  const selector = useRef<HTMLSelectElement>(null);
  const markers = useRef(new Map<string, HTMLButtonElement>());
  const id = useId();
  const destinations: MapDestination[] = [
    ...attractions.map((entry) => ({ kind: "attraction" as const, entry })),
    { kind: "property", entry: settings.propertyMarker },
  ];
  const selected = destinations.find(({ entry }) => entry.id === selectedId);

  function reset() {
    resetCamera();
    onSelectionChange(
      destinations.some(({ entry }) => entry.id === defaultSelectedId)
        ? defaultSelectedId
        : null,
    );
  }

  useImperativeHandle(ref, () => ({
    reset,
    focusDestination(destinationId, options) {
      const destination = destinations.find(
        ({ entry }) => entry.id === destinationId,
      );
      if (!destination) return;
      focus(destinationPosition(destination));
      onSelectionChange(destinationId);
      requestAnimationFrame(() =>
        (markers.current.get(destinationId) ?? selector.current)?.focus(
          options,
        ),
      );
    },
  }));

  useLayoutEffect(() => {
    const modal = dialog.current;
    if (!expanded || !modal) return;
    modal.showModal();
    closeExpanded.current?.focus();
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbar > 0) document.body.style.paddingRight = scrollbar + "px";
    document.body.style.overflow = "hidden";
    return () => {
      if (modal.open) modal.close();
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [expanded]);

  function dismissExpanded() {
    setExpanded(false);
    requestAnimationFrame(() => launch.current?.focus({ preventScroll: true }));
  }

  function closePopup() {
    onSelectionChange(null);
    const target = selectedId && markers.current.get(selectedId);
    (target || selector.current)?.focus({ preventScroll: true });
  }

  function onMapKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const delta = panKeys[event.key];
    if (!delta) return;
    event.preventDefault();
    pan(...delta);
  }

  const projected = destinations.map((destination) => {
    const point = destinationPosition(destination);
    return {
      destination,
      id: destination.entry.id,
      point: {
        x: (point.x - frame.left) / frame.unitsPerPixel,
        y: (point.y - frame.top) / frame.unitsPerPixel,
      },
    };
  });
  const visible = projected.filter(
    ({ point: { x, y } }) =>
      x >= 22 &&
      x <= frame.usableWidth - 22 &&
      y >= 22 &&
      y <= size.height - 22,
  );
  const labels = placeLabels(
    visible,
    frame.usableWidth,
    size.height,
    selectedId,
    size.width < 560,
  );

  const content = (
    <div className="guide-map">
      <div className="guide-map-stage" data-overlay={overlay}>
        <div
          className="guide-map-surface"
          data-touch-drag={touchEnabled}
          ref={surface}
          role="group"
          aria-label="Illustrative destination map"
          aria-describedby={id + "-keys " + id + "-disclosure"}
          tabIndex={0}
          onKeyDown={onMapKeyDown}
          {...pointerHandlers}
        >
          <svg
            className="guide-map-drawing"
            aria-hidden="true"
            viewBox={[frame.left, frame.top, frame.width, frame.height].join(
              " ",
            )}
          >
            {backdrop}
          </svg>
          {visible.map(({ destination, id: markerId, point }) => {
            const { entry } = destination;
            const Icon =
              destination.kind === "attraction"
                ? categoryIcons[destination.entry.categoryIcon]
                : undefined;
            return (
              <button
                key={markerId}
                ref={(button) => {
                  if (button) markers.current.set(markerId, button);
                  else markers.current.delete(markerId);
                }}
                type="button"
                className="guide-map-marker"
                data-kind={destination.kind}
                aria-label={entry.name}
                aria-pressed={markerId === selectedId}
                style={
                  {
                    "--marker-x": point.x + "px",
                    "--marker-y": point.y + "px",
                  } as CSSProperties
                }
                onClick={() => onSelectionChange(markerId)}
              >
                <span className="guide-map-pin">
                  {Icon ? (
                    <Icon aria-hidden="true" />
                  ) : (
                    <img src={brandMark} alt="" />
                  )}
                </span>
                <span
                  className="guide-map-marker-label"
                  data-direction={labels.get(markerId)}
                  aria-hidden="true"
                >
                  {size.width < 560 && destination.kind === "attraction"
                    ? (destination.entry.marker.compactLabel ?? entry.name)
                    : entry.name}
                </span>
              </button>
            );
          })}
        </div>
        <div
          className="guide-map-controls"
          role="group"
          aria-label="Map camera"
        >
          <button
            type="button"
            aria-label="Zoom in"
            disabled={camera.zoom >= MAX_ZOOM}
            onClick={() =>
              zoom(ZOOM_STEP, selected && destinationPosition(selected))
            }
          >
            <Plus aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            disabled={camera.zoom <= MIN_ZOOM}
            onClick={() => zoom(-ZOOM_STEP)}
          >
            <Minus aria-hidden="true" />
          </button>
          <button type="button" aria-label="Reset map" onClick={reset}>
            <LocateFixed aria-hidden="true" />
          </button>
          {expanded ? (
            <button
              type="button"
              ref={closeExpanded}
              onClick={dismissExpanded}
              aria-label="Close expanded map"
            >
              <X aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              ref={launch}
              onClick={() => setExpanded(true)}
              aria-label="Expand map"
            >
              <Maximize aria-hidden="true" />
            </button>
          )}
        </div>
        {selected && (
          <DestinationPopup
            destination={selected}
            headingId={id + "-popup"}
            photoDisclosure={photographyDisclosure}
            resolveImage={resolveImage}
            onClose={closePopup}
            onViewAttraction={(destinationId) => {
              if (expanded) {
                setExpanded(false);
                requestAnimationFrame(() => onViewAttraction(destinationId));
              } else {
                onViewAttraction(destinationId);
              }
            }}
          />
        )}
      </div>
      <p className="guide-map-disclosure" id={id + "-disclosure"}>
        {settings.disclosure}
      </p>
      <div className="guide-map-alternative">
        <label>
          Choose a destination
          <select
            ref={selector}
            value={selected?.entry.id ?? ""}
            onChange={(event) => onSelectionChange(event.target.value || null)}
          >
            <option value="">No destination selected</option>
            {destinations.map(({ entry }) => (
              <option key={entry.id} value={entry.id}>
                {entry.name}
              </option>
            ))}
          </select>
        </label>
        <button
          className="guide-map-touch"
          type="button"
          aria-pressed={touchEnabled}
          onClick={() => setTouchEnabled(!touchEnabled)}
        >
          Touch dragging
        </button>
      </div>
      <p id={id + "-keys"} className="guide-map-instructions">
        Use arrow keys on the focused map to pan. Turn on touch dragging to pan
        with one finger.
      </p>
      <p aria-live="polite" className="sr-only">
        {selected
          ? selected.entry.name + " selected."
          : "No destination selected."}
      </p>
    </div>
  );

  return (
    <>
      {!expanded && content}
      <dialog
        className="guide-map-dialog"
        aria-label="Expanded destination map"
        ref={dialog}
        onCancel={(event) => {
          event.preventDefault();
          dismissExpanded();
        }}
      >
        {expanded && content}
      </dialog>
    </>
  );
}
