function Credits() {
  const teamMembers = ['Equipo de Desarrollo Web'];

  return (
    <footer className="credits-footer">
      <div className="credits-container">
        <p className="credits-title">Taller de Desarrollo Web - Aplicacion React API</p>
        <div className="credits-team">
          <p>Desarrollado por:</p>
          <ul className="team-members">
            {teamMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
        <p className="credits-info">
          Sistema responsivo para gestion de favoritos y bloqueos de productos de ropa con integracion a API publica
        </p>
        <p className="credits-tech">
          Construido con React, Vite, Hooks personalizados y CSS responsivo
        </p>
      </div>
    </footer>
  );
}

export default Credits;
