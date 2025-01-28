import { useEffect, useRef } from "react";

function RecipePopup({ recipe, onClose }) {
  const popupRef = useRef(null);

  // Fermeture de pop-up
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute text-xl top-1 right-1 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <img
          src={recipe.imageUrl || "default.jpg"}
          alt={recipe.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
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

export default RecipePopup;
