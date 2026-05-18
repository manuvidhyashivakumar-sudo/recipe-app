import { useEffect, useState } from "react";
import {
  fetchRecipes,
  searchRecipes,
  fetchCategories,
  filterByCategory,
} from "../services/api";

import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadRecipes();
    loadCategories();
  }, []);

  const loadRecipes = async () => {
    const data = await fetchRecipes();
    setRecipes(data);
  };

  const loadCategories = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (search) {
        const data = await searchRecipes(search);
        setRecipes(data || []);
      } else {
        loadRecipes();
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);

  const handleCategory = async (category) => {
    if (!category) {
      loadRecipes();
      return;
    }

    const data = await filterByCategory(category);
    setRecipes(data);
  };

  return (
    <div className="p-5">
      <div className="flex gap-4 mb-5">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          categories={categories}
          onSelect={handleCategory}
        />
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
        {recipes?.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;