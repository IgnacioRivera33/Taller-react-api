function FavoritesList({ products, favorites, onRemoveFavorite }) {
  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <aside className="favorites-sidebar">
      <div className="favorites-container">
        <h2>Mis Favoritos</h2>
        <p className="favorites-count">
          {favoriteProducts.length === 0
            ? 'Sin favoritos'
            : `${favoriteProducts.length} articulo(s)`}
        </p>

        {favoriteProducts.length === 0 ? (
          <div className="favorites-empty">
            <p>Aun no tienes productos marcados como favoritos.</p>
            <p className="empty-hint">Marca productos como favorito para verlos aqui.</p>
          </div>
        ) : (
          <div className="favorites-list">
            {favoriteProducts.map((product) => (
              <div key={product.id} className="favorite-item">
                <div className="favorite-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="favorite-info">
                  <h3>{product.title}</h3>
                  <p className="favorite-price">${product.price.toFixed(2)}</p>
                  <button
                    type="button"
                    className="remove-favorite-btn"
                    onClick={() => onRemoveFavorite(product.id)}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default FavoritesList;
