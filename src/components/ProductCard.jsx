function ProductCard({ product, isFavorite, isBlocked, onToggleFavorite, onToggleBlocked }) {
  return (
    <article 
      className={`product-card ${isBlocked ? 'blocked' : ''}`}
      data-color={product.color}
    >
      <div className="product-media">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-meta">
        <div className="product-header">
          <h2>{product.title}</h2>
          <span className="badge gender-badge">{product.gender}</span>
          {isFavorite && <span className="badge favorite-badge">Favorito</span>}
          {isBlocked && <span className="badge blocked-badge">Bloqueado</span>}
        </div>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.translatedDescription}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <div className="product-actions">
            <button
              type="button"
              className={`action-button favorite ${isFavorite ? 'active' : ''}`}
              onClick={() => onToggleFavorite(product.id)}
              disabled={isBlocked}
            >
              {isFavorite ? 'Favorito' : 'Marcar favorito'}
            </button>
            <button
              type="button"
              className={`action-button block ${isBlocked ? 'active' : ''}`}
              onClick={() => onToggleBlocked(product.id)}
            >
              {isBlocked ? 'Desbloquear' : 'Bloquear'}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
