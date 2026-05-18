import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Favorite Recipes
      </h1>

      <div className="grid md:grid-cols-4 gap-5">
        {favorites.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;