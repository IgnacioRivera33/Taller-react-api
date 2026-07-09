import { useState, useEffect } from 'react';
import ItemList from './components/ItemList.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Placeholder para futuras peticiones a la API
    setItems([]);
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Listado desde API</h1>
      </header>
      <SearchBar query={query} onQueryChange={setQuery} />
      <ItemList items={items} query={query} />
    </div>
  );
}

export default App;
