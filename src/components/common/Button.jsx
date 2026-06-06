import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href,
  to,
  variant = "primary",
  className = "",
  icon = true,
  ...props
}) {
  const classes = `btn btn-${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight size={18} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {content}
    </a>
  );
}
