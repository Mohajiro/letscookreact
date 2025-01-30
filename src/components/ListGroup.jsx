import { useState } from "react";
import RecipePopup from "./RecipePopup";

/**
 * Composant `ListGroup` qui affiche une liste de recettes et permet d'ouvrir un pop-up pour voir les détails.
 * 
 * @param {Array} recipes - Liste des recettes à afficher.
 * @param {string} searchQuery - Texte de recherche pour filtrer les recettes.
 */
function ListGroup({ recipes, searchQuery }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Gérer le pop-up

  // Filtrer les recettes selon la recherche (insensible à la casse)
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Parcours des recettes filtrées et affichage sous forme de cartes */}
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between"
          onClick={() => setSelectedRecipe(recipe)} // Ouvrir le pop-up
        >
          {/* Image du plat */}
          <img
            src={recipe.imageUrl || `https://placehold.co/600x400?text=${recipe.title}`}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />

          {/* Contenu de la carte */}
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-lg font-bold text-center">{recipe.title}</h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-grow">
              {recipe.description}
            </p>

            <br></br>
            <div className="mt-auto flex justify-center items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i < recipe.difficulty ? "bg-orange-500" : "bg-gray-300"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Pop-up qui s'affiche lorsqu'une recette est sélectionnée */}
      {selectedRecipe && (
        <RecipePopup
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)} // Fermer le pop-up
        />
      )}
    </div>
  );
}

export default ListGroup;
