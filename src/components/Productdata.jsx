import { useEffect, useState } from "react";
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
      <ul className="meal-list container">
        {data &&
          data.map((product) => (
            <li key={product.id} className="meal-card ">
              <img
                className="meal-image"
                src={product.image.large}
                alt={product.title}
              />
              <h4 className="meal-title">{product.title}</h4>
              <p className="meal-summary">{product.overview}</p>

              <div className="meal-info">
                <p>
                  <img
                    src="/images/icon-servings.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  Servings: {product.servings}
                </p>
                <p>
                  <img
                    src="/images/icon-prep-time.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <span> Prep: ${product.prepMinutes}mins</span>
                </p>

                <p>
                  <img
                    src="/images/icon-cook-time.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  <span> Cook: {product.cookMinutes}mins</span>
                </p>
              </div>

              <button className="meal-btn">
                <Link to={`/productSingle/${product.id}`}>View Recipe</Link>
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Productdata;
