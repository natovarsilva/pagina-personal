import "./Button.css";
import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "olive", // blue | olive
  appearance = "dark", // dark | light
  to,
}) {
  const className = `button button--${variant} button--${appearance}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}