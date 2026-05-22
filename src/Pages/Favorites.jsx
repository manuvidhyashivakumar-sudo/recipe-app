import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container mx-auto p-4">

      <h1 className="text-3xl font-bold mb-8">
        Favorite Recipes
      </h1>

      {favorites.length === 0 ? (
        <h2>No favorite recipes added.</h2>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;