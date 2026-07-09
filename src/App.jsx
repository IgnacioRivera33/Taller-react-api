import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import FavoritesList from './components/FavoritesList.jsx';
import BlockedList from './components/BlockedList.jsx';
import { processProducts } from './utils/productProcessor.js';

const API_URL = 'https://fakestoreapi.com/products';
const FAVORITES_KEY = 'tienda-ropa-favorites';
const BLOCKED_KEY = 'tienda-ropa-blocked';

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    } catch {
      return [];
    }
  });
  const [blocked, setBlocked] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(BLOCKED_KEY)) || [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo cargar la lista de productos.');
        }
        return response.json();
      })
      .then((data) => {
        const clothingProducts = data.filter((product) =>
          product.category === "men's clothing" || product.category === "women's clothing"
        );
        const processedProducts = processProducts(clothingProducts);
        setProducts(processedProducts);
      })
      .catch((fetchError) => setError(fetchError.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(BLOCKED_KEY, JSON.stringify(blocked));
  }, [blocked]);

  const handleToggleFavorite = (productId) => {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const handleToggleBlocked = (productId) => {
    setBlocked((current) => {
      if (current.includes(productId)) {
        return current.filter((id) => id !== productId);
      } else {
        setFavorites((favs) =>
          favs.filter((id) => id !== productId)
        );
        return [...current, productId];
      }
    });
  };

  return (
    <div className="app-container">
      <header>
        <h1>Tienda de Ropa</h1>
        <p>Explora nuestra colección de ropa para hombre y mujer.</p>
      </header>
      <SearchBar query={query} onQueryChange={setQuery} />
      <div className="main-layout">
        <main className="main-content">
          {loading && <p>Cargando productos...</p>}
          {error && <p className="error-message">{error}</p>}
          {!loading && !error && (
            <ProductList
              products={products}
              query={query}
              favorites={favorites}
              blocked={blocked}
              onToggleFavorite={handleToggleFavorite}
              onToggleBlocked={handleToggleBlocked}
            />
          )}
        </main>
        <aside className="sidebars">
          <FavoritesList
            products={products}
            favorites={favorites}
            onRemoveFavorite={handleToggleFavorite}
          />
          <BlockedList
            products={products}
            blocked={blocked}
            onRemoveBlocked={handleToggleBlocked}
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
