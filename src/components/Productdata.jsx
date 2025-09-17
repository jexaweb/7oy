import { Link } from "react-router-dom";

function Productdata({ data = [], selected, cookSelected, search }) {
  const filtered = data.filter((product) => {
    const matchSearch = search
      ? product.title.toLowerCase().includes(search.toLowerCase())
      : true;

    const minut = selected ? product.prepMinutes <= selected : true;

    const minutMax = cookSelected ? product.cookMinutes <= cookSelected : true;

    return matchSearch && minut && minutMax;
  });

  return (
    <ul className="meal-list container">
      {filtered.length === 0 && <p className="malc">Malumot Topilmadi !</p>}
      {filtered.map((product) => (
        <li key={product.id} className="meal-card ">
          <picture>
            <source media="(max-width: 500px)" srcSet={product.image.large} />

            <img
              className="meal-image"
              src={product.image.large}
              alt={product.title}
            />
          </picture>
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
              <span> Prep: {product.prepMinutes}mins</span>
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
  );
}

export default Productdata;
