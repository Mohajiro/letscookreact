// Composant LigneRecipes reçoit 3 props :
// recipes - la liste des recettes provenant de App.jsx
// onEdit - pour le bouton Modifier
// onDelete - pour le bouton Supprimer

function LigneRecipes({ recipes, onEdit, onDelete }) {
  return (
    <ul className="space-y-4">
      {/* Parcours de la liste des recettes et affichage sous forme de cartes */}
      {recipes.map((recipe) => (
        <li
          key={recipe.id}
          className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 flex flex-col sm:flex-row"
        >
          {/* Image de la recette */}
          <img
            src={recipe.imageUrl || `https://placehold.co/600x400?text=${recipe.title}`}
            alt={recipe.title}
            className="w-full sm:w-32 h-32 object-cover"
          />
          
          {/* Contenu de la carte */}
          <div className="p-4 flex-1">
            <h2 className="text-lg font-bold text-gray-800 mb-2">{recipe.title}</h2>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{recipe.description}</p>
            
            {/* Ligne de difficulté avec des cercles */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${i < recipe.difficulty ? "bg-orange-500" : "bg-gray-300"}`}
                  ></div>
                ))}
              </div>
              
              {/* Boutons Modifier et Supprimer */}
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
