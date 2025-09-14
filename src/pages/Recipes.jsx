import React, { useState, useEffect } from "react";
import Productdata from "../components/Productdata";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://json-api.uz/api/project/recipes/recipes")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recipes");
        return res.json();
      })
      .then((data) => setRecipes(data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(search.toLowerCase())
      )
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or ingredient…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Productdata data={filteredRecipes} />
    </div>
  );
}

export default Recipes;
