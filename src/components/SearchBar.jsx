function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Buscar:</label>
      <input
        id="search"
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Buscar elemento..."
      />
    </div>
  );
}

export default SearchBar;
