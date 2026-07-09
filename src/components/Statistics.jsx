function Statistics({ totalProducts, favoritesCount, blockedCount }) {
  return (
    <div className="statistics-container">
      <div className="stats-header">
        <h2>Marcados como favorito/bloqueado</h2>
      </div>
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-value">{totalProducts}</div>
          <div className="stat-label">Productos Totales</div>
        </div>
        <div className="stat-card favorites">
          <div className="stat-value">{favoritesCount}</div>
          <div className="stat-label">Favoritos</div>
        </div>
        <div className="stat-card blocked">
          <div className="stat-value">{blockedCount}</div>
          <div className="stat-label">Bloqueados</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
