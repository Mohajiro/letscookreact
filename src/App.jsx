import "./App.css";
import { useEffect, useState } from "react";
// Import des components
import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModificationRecipes from "./components/ModificationRecipes";
import LigneRecipes from "./components/LigneRecipes";
import initialRecipes from "./data/recettes.json";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // Recherche
  const [currentView, setCurrentView] = useState("list"); // Vue actuelle
  const [recipes, setRecipes] = useState([]); // Liste des recettes
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Recette sélectionnée

  // **1. Charger les recettes depuis localStorage au premier rendu**
  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    } else {
      setRecipes(initialRecipes);
      localStorage.setItem("recipes", JSON.stringify(initialRecipes));
    }
  }, []);

  // **2. Sauvegarder automatiquement les recettes dans localStorage lorsqu'elles changent**
  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);

  // **3. Ajouter ou modifier une recette**
  const handleSaveRecipe = (recipe) => {
    setRecipes((prevRecipes) =>
      recipe.id
        ? prevRecipes.map((r) => (r.id === recipe.id ? recipe : r)) // Modifier une recette existante
        : [
            ...prevRecipes,
            {
              ...recipe,
              id: Date.now(),
              imageUrl: `https://placehold.co/600x400?text=${recipe.title}`,
              ingredients: recipe.ingredients || [], // Ajoute une liste vide si manquante
              instructions: recipe.instructions || [], // Ajoute une liste vide si manquante
            },
          ]
    );
  
    setSelectedRecipe(null);
    setCurrentView("list");
  };  

  // **4. Supprimer une recette**
  const handleDeleteRecipe = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  // **5. Activer le mode modification**
  const handleEditRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentView("modify");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        value={searchQuery}
        onSearch={setSearchQuery}
        onAdd={() => {
          setSelectedRecipe(null);
          setCurrentView("modify");
        }}
        onLogoClick={() => setCurrentView("list")}
      />

      <main className="container mx-auto px-4 py-8 px-8 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">All Recipes</h2>
        {currentView === "list" && (
          <ListGroup
            recipes={recipes}
            searchQuery={searchQuery}
            onEdit={handleEditRecipe}
          />
        )}
        {currentView === "modify" && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ModificationRecipes
              recipe={selectedRecipe}
              onSave={handleSaveRecipe}
              onCancel={() => setCurrentView("list")}
            />
            <LigneRecipes
              recipes={recipes}
              onEdit={handleEditRecipe}
              onDelete={handleDeleteRecipe}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
