import type { ReactNode } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { pageTitle } from "../utils/page-title";

export function Container({ children }: { children: ReactNode }) {
  return <div className="container-site">{children}</div>;
}
export function Section({
  children,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  labelledBy: string;
}) {
  return (
    <section className={`section ${className}`} aria-labelledby={labelledBy}>
      <Container>{children}</Container>
    </section>
  );
}
export function ActionLink({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link className={`action action--${variant}`} to={to}>
      {children}
    </Link>
  );
}
export function Metadata({
  title,
  description,
}: {
  title?: string;
  description: string;
}) {
  useEffect(() => {
    document.title = pageTitle(title);
  }, [title]);
  return <meta name="description" content={description} />;
}
