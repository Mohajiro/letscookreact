import { useState } from "react";
import recipes from "../data/recettes.json";

// Попап для отображения деталей рецепта
function RecipePopup({ recipe, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 float-right"
        >
          ✖
        </button>
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>
        <p className="font-semibold mb-2">Catégorie: {recipe.category}</p>
        <p className="font-semibold mb-2">Difficulté: {recipe.difficulty}/5</p>
        <h3 className="text-lg font-semibold mb-2">Ingrédients:</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
        <p className="text-sm text-gray-500 mt-4">
          Date de création: {recipe.date} | Auteur: {recipe.author}
        </p>
      </div>
    </div>
  );
}

function ListGroup({ searchQuery }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe); // Устанавливаем выбранный рецепт
  };

  const closePopup = () => {
    setSelectedRecipe(null); // Закрываем попап
  };

  const ListRecipes = filteredRecipes.map((recipe, id) => (
    <li
      key={id}
      className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
      onClick={() => handleRecipeClick(recipe)} // Открываем попап при клике
    >
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-2">
          {recipe.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {[...Array(recipe.difficulty)].map((_, i) => (
              <span
                key={i}
                className="w-3 h-3 bg-red-500 rounded-full"
              ></span>
            ))}
          </div>
          <span className="text-blue-600 text-sm font-medium">
            Voir plus
          </span>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      {filteredRecipes.length === 0 && <p>No items found</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ListRecipes}
      </ul>
      {selectedRecipe && (
        <RecipePopup recipe={selectedRecipe} onClose={closePopup} />
      )}
    </>
  );
}

export default ListGroup;
