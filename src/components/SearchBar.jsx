function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <label htmlFor="search">Buscar en la tienda:</label>
        <input
          id="search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Busca por nombre, tipo de prenda, color..."
          autoFocus
        />
      </div>
      {query && <p className="search-hint">Filtrado por: "<strong>{query}</strong>"</p>}
    </div>
  );
}

export default SearchBar;
