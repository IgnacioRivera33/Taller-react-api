function BlockedList({ products, blocked, onRemoveBlocked }) {
  const blockedProducts = products.filter((product) =>
    blocked.includes(product.id)
  );

  return (
    <aside className="blocked-sidebar">
      <div className="blocked-container">
        <h2>Bloqueados</h2>
        <p className="blocked-count">
          {blockedProducts.length === 0
            ? 'Sin bloqueos'
            : `${blockedProducts.length} articulo(s)`}
        </p>

        {blockedProducts.length === 0 ? (
          <div className="blocked-empty">
            <p>No tienes productos bloqueados.</p>
            <p className="empty-hint">Bloquea productos para que no aparezcan en busquedas.</p>
          </div>
        ) : (
          <div className="blocked-list">
            {blockedProducts.map((product) => (
              <div key={product.id} className="blocked-item">
                <div className="blocked-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="blocked-info">
                  <h3>{product.title}</h3>
                  <button
                    type="button"
                    className="unblock-btn"
                    onClick={() => onRemoveBlocked(product.id)}
                  >
                    Desbloquear
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

export default BlockedList;
