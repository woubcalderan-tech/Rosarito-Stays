import { Link } from "react-router";
import wave from "../assets/brand/coastal-wave.svg";
import { paths, site } from "../config/site";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      to={paths.home}
      className={footer ? "brand brand--footer" : "brand"}
      aria-label={`${site.name} home`}
    >
      <img src={wave} alt="" width={88} height={28} />
      <span>{site.name}</span>
      <small>Vacation Suites</small>
    </Link>
  );
}
