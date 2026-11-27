import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { initialCamera, mapFrame, moveCamera, zoomCamera } from "./map-camera";
import type { Camera, MapFrame, MapSize } from "./map-camera";

interface Drag {
  id: number;
  x: number;
  y: number;
  camera: Camera;
  frame: MapFrame;
}

export function useMapCamera(expanded: boolean) {
  const surface = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<MapSize>({ width: 1100, height: 485 });
  const [camera, setCamera] = useState(initialCamera);
  const [touchEnabled, setTouchEnabled] = useState(false);
  const drag = useRef<Drag | null>(null);
  const pendingFrame = useRef<number | null>(null);
  const overlay = size.width >= 840;
  const frame = mapFrame(camera, size, overlay);

  useLayoutEffect(() => {
    const node = surface.current;
    if (!node) return;
    const update = () => {
      const width = node.clientWidth,
        height = node.clientHeight;
      if (width && height) {
        setSize((old) =>
          old.width === width && old.height === height
            ? old
            : { width, height },
        );
      }
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [expanded]);

  useEffect(
    () => () => {
      if (pendingFrame.current !== null)
        cancelAnimationFrame(pendingFrame.current);
    },
    [],
  );

  const reset = () => setCamera(initialCamera);
  const focus = (point: { x: number; y: number }) =>
    setCamera((previous) => ({ ...point, zoom: previous.zoom }));
  const pan = (dx: number, dy: number) =>
    setCamera((previous) =>
      moveCamera(previous, mapFrame(previous, size, overlay), dx, dy),
    );
  const zoom = (step: number, selectedPoint?: { x: number; y: number }) =>
    setCamera((previous) => {
      const previousFrame = mapFrame(previous, size, overlay);
      const next = zoomCamera(previous, previousFrame, step);
      if (step < 0 || !selectedPoint) return next;
      const view = mapFrame(next, size, overlay);
      const padding = 26 * view.unitsPerPixel;
      const right = view.left + view.usableWidth * view.unitsPerPixel;
      const bottom = view.top + view.height;
      if (
        selectedPoint.x < view.left + padding ||
        selectedPoint.x > right - padding ||
        selectedPoint.y < view.top + padding ||
        selectedPoint.y > bottom - padding
      )
        return { ...selectedPoint, zoom: next.zoom };
      return next;
    });

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (
      drag.current ||
      !event.isPrimary ||
      event.button !== 0 ||
      (event.pointerType === "touch" && !touchEnabled) ||
      (event.target instanceof Element && event.target.closest("button"))
    )
      return;

    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      camera,
      frame,
    };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current || current.id !== event.pointerId) return;
    const dx = current.x - event.clientX,
      dy = current.y - event.clientY;
    if (pendingFrame.current !== null)
      cancelAnimationFrame(pendingFrame.current);
    pendingFrame.current = requestAnimationFrame(() => {
      pendingFrame.current = null;
      setCamera(moveCamera(current.camera, current.frame, dx, dy));
    });
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.id !== event.pointerId) return;
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return {
    surface,
    frame,
    size,
    camera,
    overlay,
    reset,
    focus,
    pan,
    zoom,
    touchEnabled,
    setTouchEnabled,
    pointerHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onLostPointerCapture: endDrag,
    },
  };
}
