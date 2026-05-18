import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchRecipeById } from "../services/api";

const RecipeDetails = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      const data = await fetchRecipeById(id);
      setRecipe(data);
    };

    getRecipe();
  }, [id]);

  if (!recipe) return <h2>Loading...</h2>;

  return (
    <div className="p-5">
      <Link
        to="/"
        className="text-blue-500"
      >
        ← Back
      </Link>

      <div className="mt-5">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full max-w-md rounded"
        />

        <h1 className="text-3xl font-bold mt-4">
          {recipe.strMeal}
        </h1>

        <p className="mt-2">
          Category: {recipe.strCategory}
        </p>

        <h2 className="text-2xl mt-5 mb-2">
          Instructions
        </h2>

        <p>{recipe.strInstructions}</p>

        {recipe.strYoutube && (
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="text-red-500 block mt-4"
          >
            Watch Video
          </a>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;