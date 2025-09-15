import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/use.Fetch";

function ProductSingle() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes/" + id
  );
  const { data: prodData } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes?limit=3"
  );

  if (error) return <div className="single__error">{error}</div>;
  if (isPending) return <div className="loading">Loading...</div>;

  return (
    <>
      {data && (
        <section className="single  container">
          <div className="single__breadcrumb">
            <span className="single__breadcrumb-text">Recipes / </span>
            {data.title}
          </div>

          <div className="single__container">
            <picture>
              <source media="(max-width: 500px)" srcSet={data.image.small} />
              <img
                className="single__image"
                src={"." + data.image.large}
                width="580"
                height="580"
                alt={data.title}
              />
            </picture>

            <div className="single__details">
              <h1 className="single__title">{data.title}</h1>
              <p className="single__overview">{data.overview}</p>

              <div className="single__servings">
                <p>
                  <img
                    src="/images/icon-servings.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  Servings: {data.servings}
                </p>
                <p>
                  <img
                    src="/images/icon-prep-time.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  <span> Prep: {data.prepMinutes}mins</span>
                </p>
                <p>
                  <img
                    src="/images/icon-cook-time.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  <span> Cook: {data.cookMinutes}mins</span>
                </p>
              </div>

              <h3 className="single__section-title">Ingredients:</h3>
              <ul className="single__list">
                {data.ingredients.map((item, idx) => (
                  <li key={idx} className="single__list-item">
                    <img
                      src="/images/icon-bullet-point.svg"
                      alt=""
                      width="24"
                      height="24"
                    />
                    <span className="single__list-item-text">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="single__section-title">Instructions:</h3>
              <ul className="single__list">
                {data.instructions.map((item, idx) => (
                  <li key={idx} className="single__list-item">
                    <img
                      src="/images/icon-bullet-point.svg"
                      alt=""
                      width="24"
                      height="24"
                    />
                    <span className="single__list-item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="more-recipes container ">
        <div className="more-recipes__container">
          <h3 className="more-recipes__title">More recipes</h3>
          <ul className="more-recipes__list">
            {prodData &&
              prodData.data.map((product) => (
                <li key={product.id} className="more-recipes__item">
                  {console.log(product)}
                  <picture>
                    <source
                      media="(max-width: 500px)"
                      srcSet={"." + product.image.small}
                    />
                    <img
                      className="more-recipes__img"
                      src={"." + product.image.large}
                      width={360}
                      height={300}
                      alt={product.title}
                    />
                  </picture>
                  <h4 className="more-recipes__title">{product.title}</h4>
                  <p className="more-recipes__description">
                    {product.overview}
                  </p>

                  <div className="more-recipes__servings">
                    <p>
                      <img
                        src="/images/icon-servings.svg"
                        alt=""
                        width="20"
                        height="20"
                      />
                      Servings: {data.servings}
                    </p>
                    <p>
                      <img
                        src="/images/icon-prep-time.svg"
                        alt=""
                        width="20"
                        height="20"
                      />
                      <span> Prep: {data.prepMinutes}mins</span>
                    </p>
                    <p>
                      <img
                        src="/images/icon-cook-time.svg"
                        alt=""
                        width="20"
                        height="20"
                      />
                      <span> Cook: {data.cookMinutes}mins</span>
                    </p>
                  </div>

                  <Link
                    to={`/productSingle/${product.id}`}
                    className="more-recipes__button"
                  >
                    View Recipe
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ProductSingle;
