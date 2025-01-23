import "./App.css";
import { useState } from "react";
// Import des components
import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModificationRecipes from "./components/ModificationRecipes";
import LigneRecipes from "./components/LigneRecipes";

function App() {
  // useState pour bar de recherche
  const [searchQuery, setSearchQuery] = useState("");
  // useState pour la changement des components ListeGroup vs ModificationRecipes et LigneRecipes
  const [currentView, setCurrentView] = useState("list"); 
  // Retour de la contenue de la page principale
  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        value={searchQuery}
        onSearch={setSearchQuery}
        onAdd={() => setCurrentView("modify")} 
        onLogoClick={() => setCurrentView("list")} 
      />
      <main className="container mx-auto px-4 py-8 px-8 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">All recipes</h2>
        {currentView === "list" && <ListGroup searchQuery={searchQuery} />}
        {currentView === "modify" && (
          <>
            <div className="grid grid-cols-2 gap-6">
            <ModificationRecipes />
            <LigneRecipes />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;