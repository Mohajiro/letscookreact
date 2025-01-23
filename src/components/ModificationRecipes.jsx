import { useState } from "react";
import recipes from "../data/recettes.json"; 

function ModificationRecipes() {
  const [formData, setFormData] = useState({
    title: "",
    difficulty: "",
    category: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault(); 
    const newRecipe = {
      title: formData.title,
      difficulty: parseInt(formData.difficulty, 10),
      category: formData.category,
      description: formData.description,
      imageUrl: "default.jpg", 
    };

    recipes.push(newRecipe); 
    console.log("Updated Recipes:", recipes); 

    setFormData({
      title: "",
      difficulty: "",
      category: "",
      description: "",
    });
  };

  const handleCancel = () => {

    setFormData({
      title: "",
      difficulty: "",
      category: "",
      description: "",
    });
  };

  return (
    <form className="flex flex-col">
      <h2 className="text-xl">Ajouter ou modifier une recette</h2>

      <label htmlFor="title">Titre:</label>
      <input
        type="text"
        id="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Titre de recette"
        required
      />

      <label htmlFor="difficulty">Difficulté (1-5):</label>
      <select
        id="difficulty"
        value={formData.difficulty}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled>
          --Choisissez la difficulté (1-5)--
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <label htmlFor="category">Catégorie:</label>
      <input
        type="text"
        id="category"
        value={formData.category}
        onChange={handleInputChange}
        placeholder="Catégorie de la recette"
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Description de la recette"
        required
      />

      <div className="flex space-x-4 my-3">
        <button
          type="button"
          onClick={handleSave}
          className="p-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600"
        >
          Sauvegarder
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="p-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

export default ModificationRecipes;
