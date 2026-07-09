import { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import FavoritesList from './components/FavoritesList.jsx';
import BlockedList from './components/BlockedList.jsx';
import Statistics from './components/Statistics.jsx';
import Credits from './components/Credits.jsx';
import { processProducts } from './utils/productProcessor.js';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { useFetch } from './hooks/useFetch.js';

const API_URL = 'https://fakestoreapi.com/products';
const FAVORITES_KEY = 'tienda-ropa-favorites';
const BLOCKED_KEY = 'tienda-ropa-blocked';

function App() {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useLocalStorage(FAVORITES_KEY, []);
  const [blocked, setBlocked] = useLocalStorage(BLOCKED_KEY, []);
  
  const { data: rawProducts, loading, error } = useFetch(API_URL);
  
  const products = rawProducts
    .filter((product) =>
      product.category === "men's clothing" || product.category === "women's clothing"
    )
    .map((product) => processProducts([product])[0]);

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
    <div className="app-wrapper">
      <div className="app-container">
        <header>
          <h1>Tienda de Ropa</h1>
          <p>Explora nuestra colección de ropa para hombre y mujer.</p>
        </header>
        <SearchBar query={query} onQueryChange={setQuery} />
        <div className="main-layout">
          <main className="main-content">
            {loading && (
              <div className="loading-container">
                <div className="spinner"></div>
                <p>Cargando productos de nuestra tienda...</p>
              </div>
            )}
            {error && (
              <div className="error-container">
                <p className="error-icon">!</p>
                <p className="error-title">Error al cargar productos</p>
                <p className="error-message">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="retry-button"
                >
                  Intentar de nuevo
                </button>
              </div>
            )}
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
            <Statistics
              totalProducts={products.length}
              favoritesCount={favorites.length}
              blockedCount={blocked.length}
            />
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
      <Credits />
    </div>
  );
}

export default App;
