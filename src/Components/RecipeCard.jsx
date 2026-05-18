import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="bg-white rounded shadow hover:scale-105 transition p-3">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded"
        />

        <h2 className="font-bold mt-2">
          {recipe.strMeal}
        </h2>

        {recipe.strCategory && (
          <p className="text-gray-500">
            {recipe.strCategory}
          </p>
        )}
      </div>
    </Link>
  );
};

export default RecipeCard;