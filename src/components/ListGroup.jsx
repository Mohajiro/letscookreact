import { useState } from "react";
//import des recettes
import recipes from "../data/recettes.json";
//declaration de compenent avec parametre searchQuery pour la recherche qui viens de Header
function ListGroup({ searchQuery }) {
  //Index de element selectionée pour changement de couleur
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // Creation de evenement clique qui affiche dans console title de recette cliqué et change son couleur 
  const handleClick = (event, recipe, id) => {
    console.log(`Clicked recipe: ${recipe.title}`);
    setSelectedIndex(id);
  };
  // Creation de const qvec les recettes filtre en cas de recherche via inpur de Header
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Creation de Liste de reccetes afichées via methode JS maps
  const ListRecipes = filteredRecipes.map((recipe, id) => (
    <li
      key={id}
      className={
        selectedIndex === id
          ? "bg-orange-500 shadow-md rounded-lg overflow-hidden border border-gray-200"
          : "bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
      }
      //Juste pour entrenement la button de changement du bg couleur
      onClick={(event) => handleClick(event, recipe, id)}
    >
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-2">
          {recipe.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {[...Array(recipe.difficulty)].map((_, i) => (
              <span
                key={i}
                className="w-3 h-3 bg-red-500 rounded-full"
              ></span>
            ))}
          </div>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            En savoir plus...
          </a>
        </div>
      </div>
    </li>
  ));



  return (

    //Si longuer de tableau filtredRecipes === 0 ça va afficher 'No items found' si non ça va afficher la liste de recettes
    <>
      {filteredRecipes.length === 0 && <p>No items found</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ListRecipes}
      </ul>
    </>
  );
}

export default ListGroup;
