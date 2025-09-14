import React, { useState } from "react";
import Productdata from "../components/Productdata";

import { useFetch } from "../hooks/use.Fetch";

function Recipes() {
  let url = "https://json-api.uz/api/project/recipes/recipes";

  const { data, isPending, error } = useFetch(url);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [cookOpen, setCookOpen] = useState(false);
  const [cookSelected, setCookSelected] = useState("");
  const [search, setSearch] = useState("");

  // select 1
  function select1() {
    setSelected("");
    setIsOpen(false);
  }
  // select 2
  function select2() {
    setCookOpen(false);
    setCookSelected("");
  }

  return (
    <>
      {/* hero */}
      <section className="hero">
        <div className="hero__container container">
          <h1 className="hero__title title-text">
            Explore our simple, healthy recipes
          </h1>
          <p className="hero__description">
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </p>
        </div>
      </section>
      {/* products */}
      <section className="products">
        <div className="products__container container">
          <div className="dropdown__container">
            <div className="dropdown__wrapper">
              <div className="dropdown">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="dropdown-btn"
                >
                  {`${selected && selected + " minutes"}` || "Max Prep Time"}
                </button>
                {isOpen && (
                  <div className="dropdown-menu">
                    {[0, 5, 10].map((time) => (
                      <label key={time} className="dropdown-option">
                        <input
                          className="custom-radio"
                          type="radio"
                          name="time"
                          value={time}
                          checked={selected === time}
                          onChange={() => setSelected(time)}
                        />
                        {`${time} minutes`}
                      </label>
                    ))}
                    <button onClick={select1} className="clear-btn">
                      Clear
                    </button>
                  </div>
                )}
              </div>
              <div className="dropdown">
                <button
                  onClick={() => setCookOpen(!cookOpen)}
                  className="dropdown-btn"
                >
                  {cookSelected !== ""
                    ? `${cookSelected} minutes`
                    : "Max Cook Time"}
                </button>
                {cookOpen && (
                  <div className="dropdown-menu">
                    {[0, 5, 10, 15, 20].map((time) => (
                      <label key={time} className="dropdown-option">
                        <input
                          className="custom-radio"
                          type="radio"
                          name="cook"
                          value={time}
                          checked={cookSelected === time}
                          onChange={() => setCookSelected(time)}
                        />
                        {`${time} minutes`}
                      </label>
                    ))}
                    <button onClick={select2} className="clear-btn">
                      Clear
                    </button>
                  </div>
                )}
              </div>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="product__find-input"
              type="text"
              name="find"
              placeholder="Search by name or ingredient…"
            />
          </div>
          {isPending && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}
          {data && (
            <Productdata
              data={data.data}
              selected={selected}
              cookSelected={cookSelected}
              search={search}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default Recipes;
