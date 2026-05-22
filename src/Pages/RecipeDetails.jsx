import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const navigate = useNavigate();

  const { toggleFavorite, isFavorite } =
    useContext(FavoritesContext);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    setRecipe(res.data.meals[0]);
  };

  if (!recipe) return <h2>Loading...</h2>;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(
        `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
      );
    }
  }

  return (
    <div className="container mx-auto p-4">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-200 px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-full object-cover"
          />

          <div className="p-8">

            <div className="flex justify-between items-center mb-4">
              <h1 className="text-4xl font-bold">
                {recipe.strMeal}
              </h1>

              <button
                onClick={() => toggleFavorite(recipe)}
                className={`px-5 py-2 rounded-lg text-white font-semibold ${
                  isFavorite(recipe.idMeal)
                    ? "bg-red-500"
                    : "bg-orange-500"
                }`}
              >
                {isFavorite(recipe.idMeal)
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </button>
            </div>

            <div className="flex gap-4 mb-6">
              <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full">
                {recipe.strCategory}
              </span>

              <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full">
                {recipe.strArea}
              </span>
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              Ingredients
            </h2>

            <ul className="grid grid-cols-2 gap-2 mb-8">
              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-2 rounded-lg"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-3">
              Instructions
            </h2>

            <p className="text-gray-700 leading-7 mb-8">
              {recipe.strInstructions}
            </p>

            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                className="bg-red-500 text-white px-5 py-3 rounded-lg inline-block"
              >
                Watch Recipe Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;