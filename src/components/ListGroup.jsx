import { useState } from "react";
import RecipePopup from "./RecipePopup";

function ListGroup({ recipes, searchQuery, onEdit }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Gerer pop-up

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
          onClick={() => setSelectedRecipe(recipe)} // Ouvrir pop-up
        >
          <img
            src={recipe.imageUrl || "default.jpg"}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-center">{recipe.title}</h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {recipe.description}
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500 text-xs">
                Difficulté: {recipe.difficulty}/5
              </span>
              
            </div>
          </div>
        </div>
      ))}
      {selectedRecipe && (
        <RecipePopup
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)} // Fermer pop-up
        />
      )}
    </div>
  );
}

export default ListGroup;
