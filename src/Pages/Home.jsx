import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchRecipes();
    fetchCategories();
  }, []);

  const fetchRecipes = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );

    setRecipes(res.data.meals);
  };

  const fetchCategories = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    setCategories(res.data.categories);
  };

  const filteredRecipes = recipes?.filter((recipe) => {
    const matchesSearch = recipe.strMeal
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      recipe.strCategory === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto p-4">

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <SearchBar search={search} setSearch={setSearch} />

        <Filter
          categories={categories}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
      </div>

      {filteredRecipes?.length === 0 ? (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold">
            No recipes found
          </h2>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRecipes?.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;