import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

function RecipeDetails() {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    setMeal(res.data.meals[0]);
  };

  if (!meal) return <h2 className="p-6">Loading...</h2>;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Link to="/" className="text-orange-500">
        ← Back
      </Link>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full md:h-[500px] object-cover rounded-lg mt-4"
      />

      <div className="mt-6">
        <h1 className="text-4xl font-bold">{meal.strMeal}</h1>

        <p className="mt-2 text-lg">
          Category: {meal.strCategory}
        </p>

        <button
          onClick={() => addFavorite(meal)}
          className="bg-red-500 text-white px-5 py-2 rounded mt-4"
        >
          Add to Favorites
        </button>

        <h2 className="text-2xl font-bold mt-6 mb-3">
          Ingredients
        </h2>

        <ul className="list-disc pl-6">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-3">
          Instructions
        </h2>

        <p className="leading-8">{meal.strInstructions}</p>

        {meal.strYoutube && (
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 bg-orange-500 text-white px-5 py-3 rounded"
          >
            Watch Video
          </a>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;