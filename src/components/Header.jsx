function Header({ value, onSearch }) {
    return (
      <header className="bg-orange-200 shadow-md">
        <h1 className="text-3xl font-bold flex py-3 justify-center text-white bg-red-600 w-full">
          Let's Cook
        </h1>
        <div className="container mx-auto py-3 px-2 flex items-center relative">
          <input
            type="text"
            value={value}
            placeholder="Recherche"
            className="absolute left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-orange-400"
            onChange={(event) => onSearch(event.target.value)}
          />
          <button className="ml-auto px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600">
            add+
          </button>
        </div>
      </header>
    );
  }
  
  export default Header;
  