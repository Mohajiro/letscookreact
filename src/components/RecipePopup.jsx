import { useEffect, useRef } from "react";

/**
 * Composant `RecipePopup` qui affiche une recette en détail sous forme de pop-up.
 * 
 * @param {Object} recipe - L'objet contenant les détails de la recette.
 * @param {Function} onClose - Fonction permettant de fermer la fenêtre modale.
 */
function RecipePopup({ recipe, onClose }) {
  const popupRef = useRef(null); // Référence pour détecter les clics en dehors du pop-up

  /**
   * Effet qui écoute les clics en dehors du pop-up et le ferme si nécessaire.
   */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Ferme le pop-up si on clique en dehors
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    // Arrière-plan semi-transparent qui couvre toute la fenêtre
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Fenêtre modale qui contient les détails de la recette */}
      <div ref={popupRef} className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full relative">
        
        {/* Bouton pour fermer le pop-up */}
        <button
          onClick={onClose}
          className="absolute text-xl top-1 right-1 text-gray-500 hover:text-gray-700"
        >
          X
        </button>

        {/* Image de la recette */}
        <img
          src={recipe.imageUrl || "default.jpg"} // Image par défaut si aucune n'est fournie
          alt={recipe.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

        {/* Titre de la recette */}
        <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>

        {/* Description de la recette */}
        <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>

        {/* Informations complémentaires */}
        <p className="font-semibold mb-2">Catégorie: {recipe.category}</p>
        <p className="font-semibold mb-2">Difficulté: {recipe.difficulty}/5</p>

        {/* Liste des ingrédients */}
        <h3 className="text-lg font-semibold mb-2">Ingrédients:</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* Instructions de préparation */}
        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>

        {/* Date de création et auteur */}
        <p className="text-sm text-gray-500 mt-4">
          Date de création: {recipe.date} | Auteur: {recipe.author}
        </p>
      </div>
    </div>
  );
}

export default RecipePopup;
