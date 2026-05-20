import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

function Home() {
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

  const filteredRecipes = recipes?.filter((meal) => {
    const matchesSearch = meal.strMeal
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = selectedCategory
      ? meal.strCategory === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SearchBar search={search} setSearch={setSearch} />

        <Filter
          categories={categories}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes?.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Home;