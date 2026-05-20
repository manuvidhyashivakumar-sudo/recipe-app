import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Favorite Recipes
      </h1>

      {favorites.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;