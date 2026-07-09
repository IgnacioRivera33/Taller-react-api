import ProductCard from './ProductCard.jsx';

function ProductList({ products, query, favorites, blocked, onToggleFavorite, onToggleBlocked }) {
  const normalizedQuery = query.toLowerCase().trim();
  const filteredProducts = products.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(normalizedQuery);
    const categoryMatch = product.category.toLowerCase().includes(normalizedQuery);
    const descriptionMatch = product.description.toLowerCase().includes(normalizedQuery);
    return titleMatch || categoryMatch || descriptionMatch;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="empty-state">
        <p>No se encontraron prendas que coincidan con lo que buscabas.</p>
        {query && <p className="empty-hint">Intentalo de nuevo.</p>}
      </div>
    );
  }

  return (
    <div>
      <p className="results-count">{filteredProducts.length} prenda(s) encontrada(s)</p>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            isBlocked={blocked.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
            onToggleBlocked={onToggleBlocked}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
