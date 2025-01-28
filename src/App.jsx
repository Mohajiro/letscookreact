import "./App.css";
import { useState } from "react";
// Import des components
import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModificationRecipes from "./components/ModificationRecipes";
import LigneRecipes from "./components/LigneRecipes";
import initialRecipes from "./data/recettes.json";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // Поисковый запрос
  const [currentView, setCurrentView] = useState("list"); // Текущий вид: список или редактирование
  const [recipes, setRecipes] = useState(initialRecipes); // Общий список рецептов
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Выбранный для редактирования рецепт

  // Сохранение рецепта (новый или обновленный)
  const handleSaveRecipe = (recipe) => {
    if (recipe.id) {
      // Обновление существующего рецепта
      setRecipes((prevRecipes) =>
        prevRecipes.map((r) => (r.id === recipe.id ? recipe : r))
      );
    } else {
      // Добавление нового рецепта
      setRecipes((prevRecipes) => [
        ...prevRecipes,
        { ...recipe, id: Date.now(), imageUrl: "default.jpg" },
      ]);
    }
    setSelectedRecipe(null); // Очистка выбранного рецепта
    setCurrentView("list"); // Возврат к списку
  };

  // Удаление рецепта
  const handleDeleteRecipe = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  // Переход в режим редактирования
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
