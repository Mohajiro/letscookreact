import "./App.css";

import { useState } from "react";

import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModificationRecipes from "./components/ModificationRecipes";
import LigneRecipes from "./components/LigneRecipes";


function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <Header value={searchQuery} onSearch={setSearchQuery} />
      <main className="container mx-auto px-4 py-8 px-8 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">All recipes</h2>
        <ListGroup searchQuery={searchQuery} />
      </main>
      <Footer />

      <ModificationRecipes />
      <LigneRecipes />
    </div>
  );
}

export default App;
