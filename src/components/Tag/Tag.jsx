import "./Tag.css";

function Tag({ children, variant = "blue", size = "md" }) {
  return (
    <span className={`tag tag--${variant} tag--${size} overline`}>
      {children}
    </span>
  );
}

export default Tag;