import { Link } from "react-router-dom";

function RecipeCard({ meal }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg">{meal.strMeal}</h2>

        <p className="text-gray-600">{meal.strCategory}</p>

        <Link
          to={`/recipe/${meal.idMeal}`}
          className="mt-3 inline-block bg-orange-500 text-white px-4 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;