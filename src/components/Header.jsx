// Import d'icon de profile
import profileIcon from "../assets/user.png";

// Function d'element avec 4 Props: 
// value - value de l'input de recherche
// onSearch - fonction appelée lorsque l'utilisateur tape dans la barre de recherche.
// onAdd - Fonction appelée lorsqu'on clique sur le bouton d'ajout (icône de profil).
// onLogoClick - Fonction appelée lorsqu'on clique sur le logo "Let's Cook".
function Header({ value, onSearch, onAdd, onLogoClick }) {
  return (
    <header className="bg-orange-200">
      {/* Logo principal cliquable qui ramène à la page d'accueil */}
      <h1
        className="text-3xl font-bold flex py-3 justify-center text-white bg-red-600 w-full cursor-pointer"
        onClick={onLogoClick} 
      >
        Let's Cook
      </h1>
      <div className="container mx-auto py-3 px-2 flex items-center relative px-8 md:px-12 lg:px-20">
        <input
          type="text"
          value={value}
          placeholder="Recherche"
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white"
          onChange={(event) => onSearch(event.target.value)} // Met à jour la valeur de recherche à chaque frappe
        />
        <button
          className="ml-auto p-2 bg-white rounded-lg shadow-md hover:border-black"
          onClick={onAdd} // Au clic, exécute la fonction onAdd
        >
          <img src={profileIcon} alt="Profile" width={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
