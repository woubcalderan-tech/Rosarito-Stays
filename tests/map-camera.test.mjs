import assert from "node:assert/strict";
import test from "node:test";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
  MAX_ZOOM,
  MIN_ZOOM,
  ZOOM_STEP,
  initialCamera,
  mapFrame,
  mapPoint,
  moveCamera,
  zoomCamera,
} from "../src/maps/map-camera.ts";

test("normalized points and uniformly scaled SVG frames use one coordinate space", () => {
  assert.deepEqual(mapPoint({ x: 0.5, y: 0.25 }), {
    x: MAP_WIDTH / 2,
    y: MAP_HEIGHT / 4,
  });
  const size = { width: 1180, height: 480 };
  const full = mapFrame(initialCamera, size, false);
  const withOverlay = mapFrame(initialCamera, size, true);
  const ratio = size.width / size.height;
  assert(Math.abs(full.width / full.height - ratio) < 1e-10);
  assert(Math.abs(withOverlay.width / withOverlay.height - ratio) < 1e-10);
  assert(withOverlay.usableWidth < full.usableWidth);
});

test("zoom is incremental and never exceeds its configured limits", () => {
  const frame = mapFrame(initialCamera, { width: 920, height: 460 }, true);
  assert.equal(zoomCamera(initialCamera, frame, -ZOOM_STEP).zoom, MIN_ZOOM);
  assert.equal(
    zoomCamera(initialCamera, frame, ZOOM_STEP).zoom,
    MIN_ZOOM + ZOOM_STEP,
  );
  assert.equal(zoomCamera(initialCamera, frame, 200).zoom, MAX_ZOOM);
});

test("panning stays inside the drawable map at maximum zoom", () => {
  const size = { width: 390, height: 355 };
  const camera = { ...initialCamera, zoom: MAX_ZOOM };
  const frame = mapFrame(camera, size, false);
  const northwest = mapFrame(
    moveCamera(camera, frame, -9999, -9999),
    size,
    false,
  );
  const southeast = mapFrame(
    moveCamera(camera, frame, 9999, 9999),
    size,
    false,
  );
  assert.equal(northwest.left, 0);
  assert.equal(northwest.top, 0);
  assert.equal(southeast.left + southeast.width, MAP_WIDTH);
  assert.equal(southeast.top + southeast.height, MAP_HEIGHT);
});
