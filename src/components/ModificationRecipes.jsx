import { useState, useEffect } from "react";

function ModificationRecipes({ recipe, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    difficulty: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title || "",
        difficulty: recipe.difficulty?.toString() || "",
        category: recipe.category || "",
        description: recipe.description || "",
      });
    } else {
      setFormData({
        title: "",
        difficulty: "",
        category: "",
        description: "",
      });
    }
  }, [recipe]);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (!formData.title || !formData.difficulty || !formData.category || !formData.description) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    const newRecipe = {
      ...formData,
      difficulty: parseInt(formData.difficulty, 10),
      id: recipe?.id || null,
    };
    onSave(newRecipe);
  };

  return (
    <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">
        {recipe ? "Modifier la recette" : "Ajouter une nouvelle recette"}
      </h2>
      <input
        type="text"
        id="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Titre"
        className="w-full p-2 border rounded-lg mt-2"
      />
      <select
        id="difficulty"
        value={formData.difficulty}
        onChange={handleInputChange}
        className="w-full p-2 border rounded-lg mt-2"
      >
        <option value="">Difficulté</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        id="category"
        value={formData.category}
        onChange={handleInputChange}
        placeholder="Catégorie"
        className="w-full p-2 border rounded-lg mt-2"
      />
      <textarea
        id="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Description"
        className="w-full p-2 border rounded-lg mt-2 h-24"
      ></textarea>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Enregistrer
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

export default ModificationRecipes;
