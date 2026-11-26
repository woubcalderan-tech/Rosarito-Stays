import { useSyncExternalStore } from "react";

const query = "(width < 48rem)";

function subscribe(listener: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
}

export function useMobileViewport() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
  );
}
