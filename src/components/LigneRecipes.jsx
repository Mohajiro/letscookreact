import allRecipes from "../data/recettes.json";

function LigneRecipes() {
  const ligneRecipes = allRecipes.map((recipe, id) => (
    <li
      key={id}
      className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
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
          <a
            href="#"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            En savoir plus...
          </a>
        </div>
      </div>
    </li>
  ));

  return <ul className="space-y-4">{ligneRecipes}</ul>;
}

export default LigneRecipes;
