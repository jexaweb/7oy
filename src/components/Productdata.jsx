import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/use.Fetch";

function Productdata({ data, selected, cookSelected, search }) {
  const [info, setInfo] = useState(null);
  const {
    data: filterProduct,
    error,
    isPending,
  } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes?slug=" + search
  );
  return (
    <>
      {/* {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>} */}
      <ul className="products__list">
        {data &&
          data.map((product) => {
            return (
              <li key={product.id} className="product__item">
                <picture>
                  <source
                    media="(max-width: 500px)"
                    srcSet={product.image.small}
                  />
                  <img
                    className="product__list-img"
                    src={product.image.large}
                    width={360}
                    height={300}
                  />
                </picture>
                <h4 className="product__list-title">{product.title}</h4>
                <p className="product__list-description">{product.overview}</p>
                <div className="product__list-servic">
                  <p>
                    <img src="/images/user.svg" alt="" width="20" height="20" />
                    Servings: {product.servings}
                  </p>
                  <p>
                    <img
                      src="/images/Timer.svg"
                      width="20"
                      height="20"
                      alt=""
                    />
                    Prep: {product.prepMinutes}
                  </p>
                  <p>
                    <img
                      src="/images/Food3.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                    Cook: {product.cookMinutes}
                  </p>
                </div>
                <Link
                  to={`/singleProduct/${product.id}`}
                  className="product__list-button"
                >
                  View Recipe
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Productdata;
