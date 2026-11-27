import type { IllustrativeMapPosition } from "../config/property";

export const MAP_WIDTH = 1200;
export const MAP_HEIGHT = 660;
export const MIN_ZOOM = 1;
export const MAX_ZOOM = 2.5;
export const ZOOM_STEP = 0.25;

export interface Camera {
  x: number;
  y: number;
  zoom: number;
}

export interface MapSize {
  width: number;
  height: number;
}

export interface MapFrame extends MapSize {
  left: number;
  top: number;
  unitsPerPixel: number;
  usableWidth: number;
}

export const initialCamera: Camera = {
  x: MAP_WIDTH / 2,
  y: MAP_HEIGHT / 2,
  zoom: MIN_ZOOM,
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

function clampAxis(value: number, extent: number, limit: number) {
  return extent >= limit
    ? limit / 2
    : clamp(value, extent / 2, limit - extent / 2);
}

export function mapPoint(position: IllustrativeMapPosition) {
  return { x: position.x * MAP_WIDTH, y: position.y * MAP_HEIGHT };
}

export function mapFrame(
  camera: Camera,
  size: MapSize,
  overlay: boolean,
): MapFrame {
  // The fixed overlay rail reserves room even with no selection, so opening a
  // popup never changes the camera. Width and height share one drawing scale.
  const rail = overlay ? Math.min(size.width * 0.31, 380) + 64 : 0;
  const usableWidth = Math.max(size.width - rail, 1);
  const baseScale = Math.max(
    (size.width < 560 ? 780 : 1120) / usableWidth,
    MAP_HEIGHT / size.height,
  );
  const unitsPerPixel = baseScale / camera.zoom;
  const visibleWidth = usableWidth * unitsPerPixel;
  const visibleHeight = size.height * unitsPerPixel;

  return {
    left: clampAxis(camera.x, visibleWidth, MAP_WIDTH) - visibleWidth / 2,
    top: clampAxis(camera.y, visibleHeight, MAP_HEIGHT) - visibleHeight / 2,
    width: size.width * unitsPerPixel,
    height: visibleHeight,
    unitsPerPixel,
    usableWidth,
  };
}

export function cameraCenter(frame: MapFrame) {
  return {
    x: frame.left + (frame.usableWidth * frame.unitsPerPixel) / 2,
    y: frame.top + frame.height / 2,
  };
}

export function moveCamera(
  camera: Camera,
  frame: MapFrame,
  dx: number,
  dy: number,
): Camera {
  const center = cameraCenter(frame);
  return {
    zoom: camera.zoom,
    x: clampAxis(
      center.x + dx * frame.unitsPerPixel,
      frame.usableWidth * frame.unitsPerPixel,
      MAP_WIDTH,
    ),
    y: clampAxis(center.y + dy * frame.unitsPerPixel, frame.height, MAP_HEIGHT),
  };
}

export function zoomCamera(
  camera: Camera,
  frame: MapFrame,
  step: number,
): Camera {
  return {
    ...cameraCenter(frame),
    zoom: clamp(camera.zoom + step, MIN_ZOOM, MAX_ZOOM),
  };
}
