import ProductCard from './ProductCard.jsx';

function ProductList({ products, query, favorites, blocked, onToggleFavorite, onToggleBlocked }) {
  const normalizedQuery = query.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(normalizedQuery) ||
    product.category.toLowerCase().includes(normalizedQuery)
  );

  if (filteredProducts.length === 0) {
    return <p>No se encontraron productos para la búsqueda actual.</p>;
  }

  return (
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
  );
}

export default ProductList;
