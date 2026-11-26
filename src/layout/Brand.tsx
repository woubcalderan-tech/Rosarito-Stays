import { Link } from "react-router";
import { paths, property } from "../config/site";

const logos = import.meta.glob<string>("/src/assets/brand/*.svg", {
  query: "?url",
  import: "default",
  eager: true,
});

export function Brand({ footer = false }: { footer?: boolean }) {
  const { name, subtitle, logo } = property.brand;
  return (
    <Link
      to={paths.home}
      className={footer ? "brand brand--footer" : "brand"}
      aria-label={`${name} home`}
    >
      {logo && (
        <img
          src={
            logos[logo] ??
            `${import.meta.env.BASE_URL}${logo.replace(/^\//, "")}`
          }
          alt=""
          width={88}
          height={28}
        />
      )}
      <span>{name}</span>
      <small>{subtitle}</small>
    </Link>
  );
}
