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
  const [searchQuery, setSearchQuery] = useState(""); // Request de recherche
  const [currentView, setCurrentView] = useState("list"); // Le vue actuelle
  const [recipes, setRecipes] = useState(initialRecipes); // Liste des recettes
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Recette selectioné pour la modification
  const [localStorageData, setLocalStorageData] = useState(initialRecipes);
  console.log(recipes);
  const variable = [];
  if (localStorage.getItem('recipes') === null) {
    localStorage.setItem('recipes', JSON.stringify(initialRecipes));
  } 

  useEffect(() => {
    let tempLocalStorageData = recipes;
    localStorage.setItem('recipes', JSON.stringify(recipes));
    setLocalStorageData(tempLocalStorageData);
  }, [recipes]);

  // Sauvgarde des recettes nouveau ou modifié
  const handleSaveRecipe = (recipe) => {
 
    if (recipe.id) {
      // Mis en jour du recette existant
      setRecipes((prevRecipes) =>
        prevRecipes.map((r) => (r.id === recipe.id ? recipe : r))
      );
    } else {
      // Ajutement du nouveau recette
      setRecipes((prevRecipes) => [
        ...prevRecipes,
        { ...recipe, id: Date.now(), imageUrl: `https://placehold.co/600x400?text=${recipe.title}` },
      ]);
    }
    setSelectedRecipe(null); // Netoyage de recette selectioné
    setCurrentView("list"); // Retour vers la liste
  };

  // Suprimmation du recette
  const handleDeleteRecipe = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  // Entre dans la mode de modification
  const handleEditRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentView("modify");
  };
  // Retour de contenue de page
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
          <div className="grid grid-cols-2 gap-6">
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
