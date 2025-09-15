import React, { useState } from "react";
import { useFetch } from "../hooks/use.Fetch";
import Productdata from "../components/Productdata";
import { AiOutlineSearch } from "react-icons/ai";

function Recipes() {
  let url = "https://json-api.uz/api/project/recipes/recipes";

  const { data, isPending, error } = useFetch(url);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [cookOpen, setCookOpen] = useState(false);
  const [cookSelected, setCookSelected] = useState("");
  const [search, setSearch] = useState("");

  function select1() {
    setSelected("");
    setIsOpen(false);
  }

  function select2() {
    setCookOpen(false);
    setCookSelected("");
  }

  return (
    <>
      <section className="intro-box container">
        <div className="intro-container ">
          <h1 className="intro-heading title-text">
            Explore our simple, healthy recipes
          </h1>
          <p className="intro-text">
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste <br /> amazing. Use the search bar to find a recipe by
            name or ingredient, or simply scroll <br />
            the list and let something delicious catch your eye.
          </p>
        </div>
      </section>
      <section className="meal-section  ">
        <div className="filter-panel container">
          <div className="filter-controls">
            <div className="select-box">
              <button onClick={() => setIsOpen(!isOpen)} className="select-btn">
                {selected ? `${selected} minutes` : "Max Prep Time"}
              </button>
              {isOpen && (
                <div className="select-menu">
                  {[0, 5, 10].map((time) => (
                    <label key={time} className="select-option">
                      <input
                        type="radio"
                        name="time"
                        value={time}
                        checked={selected === time}
                        onChange={() => setSelected(time)}
                      />
                      {time} minutes
                    </label>
                  ))}
                  <button onClick={select1} className="select-reset">
                    Clear
                  </button>
                </div>
              )}
            </div>

            <div className="select-box">
              <button
                onClick={() => setCookOpen(!cookOpen)}
                className="select-btn"
              >
                {cookSelected !== ""
                  ? `${cookSelected} minutes`
                  : "Max Cook Time"}
              </button>
              {cookOpen && (
                <div className="select-menu">
                  {[0, 5, 10, 15, 20].map((time) => (
                    <label key={time} className="select-option">
                      <input
                        type="radio"
                        name="cook"
                        value={time}
                        checked={cookSelected === time}
                        onChange={() => setCookSelected(time)}
                      />
                      {time} minutes
                    </label>
                  ))}
                  <button onClick={select2} className="select-reset">
                    Clear
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="search-wrapper" style={{ position: "relative" }}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
              type="text"
              name="find"
              placeholder="Search by name or ingredient…"
              style={{}}
            />
            <AiOutlineSearch
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#999",
                fontSize: "2.4rem",
              }}
            />
          </div>
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
      </section>
    </>
  );
}

export default Recipes;
