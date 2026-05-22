import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          {recipe.strMeal}
        </h2>

        <p className="text-gray-600 mb-4">
          {recipe.strCategory}
        </p>

        <Link
          to={`/recipe/${recipe.idMeal}`}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;