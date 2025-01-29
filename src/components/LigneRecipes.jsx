function LigneRecipes({ recipes, onEdit, onDelete }) {
  return (
    <ul className="space-y-4">
      {recipes.map((recipe) => (
        <li
          key={recipe.id}
          className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 flex flex-col sm:flex-row"
        >
          <img
            src={recipe.imageUrl || "default.jpg"}
            alt={recipe.title}
            className="w-full sm:w-32 h-32 object-cover"
          />
          <div className="p-4 flex-1">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {recipe.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {recipe.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Difficulté: {recipe.difficulty}/5
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(recipe)}
                  className="bg-orange-400 text-white px-3 py-1 rounded-lg text-sm hover:bg-orange-200"
                >
                  Modifier
                </button>
                <button
                  onClick={() => onDelete(recipe.id)}
                  className="bg-orange-400 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LigneRecipes;