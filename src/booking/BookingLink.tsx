import { paths } from "../config/site";
import { en } from "../localization/en";
import { ActionLink } from "../ui/Content";
export function BookingLink({
  variant,
}: {
  variant?: "primary" | "secondary";
}) {
  return (
    <ActionLink to={paths.booking} variant={variant}>
      {en.booking}
    </ActionLink>
  );
}
