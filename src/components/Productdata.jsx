import React from "react";
import { Link } from "react-router-dom";

function Productdata({ data }) {
  if (!data || data.length === 0) return <p>No recipes found</p>;

  return (
    <ul className="products__list">
      {data.map((product) => (
        <li key={product.id} className="product__item">
          <picture>
            {/* Mobil uchun kichik rasm */}
            <source
              media="(max-width: 500px)"
              srcSet={product.image?.small || "/images/default.png"}
            />
            {/* Desktop uchun katta rasm */}
            <img
              src={product.image?.large || "/images/default.png"}
              alt={product.title}
              width={360}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </picture>

          <h4>{product.title}</h4>
          <p>{product.overview}</p>

          <div className="product__details">
            <p>Servings: {product.servings}</p>
            <p>Prep: {product.prepMinutes} min</p>
            <p>Cook: {product.cookMinutes} min</p>
          </div>

          <Link to={`/singleProduct/${product.id}`} className="product__button">
            View Recipe
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Productdata;
