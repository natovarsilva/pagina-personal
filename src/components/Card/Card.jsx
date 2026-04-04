import "./Card.css";
import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";

export default function Card({
  id,
  slug,
  image,
  country,
  title,
  author,
  year,
  tags = [],
  size = "lg",
  maxTags = 3,
}) {
  return (
    <Link to={`/place/${slug}`} className="card__link">
      <article className={`card card--${size}`}>
        
        <div className="card__image-wrapper">
          <img src={image} alt={title} className="card__image protected-image"  draggable={false} />
        </div>

        <div className="card__content">
          
          <div>
            <p className="card__country">{country}</p>
            <h3 className="card__title">{title}</h3>
          </div>

          <div className="card__divider" />

          <div className="card__meta">
            <span className="card__author">{author}</span>
            <span className="card__year">{year}</span>
          </div>

          <div className="card__tags">
            {tags.slice(0, maxTags).map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}

            {tags.length > maxTags && (
            <Tag
              size="sm"
              title={tags.join(" • ")}
            >
              +{tags.length - maxTags}
            </Tag>
          )}
          </div>

        </div>

      </article>
    </Link>
  );
}