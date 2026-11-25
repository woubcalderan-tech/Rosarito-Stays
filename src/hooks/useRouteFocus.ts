import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export function useRouteFocus() {
  const { pathname } = useLocation();
  const previous = useRef(pathname);
  const main = useRef<HTMLElement>(null);
  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    main.current?.focus({ preventScroll: true });
  }, [pathname]);
  return main;
}
