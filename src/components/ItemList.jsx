function ItemList({ items, query }) {
  const normalizedQuery = query.toLowerCase();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(normalizedQuery)
  );

  return (
    <div className="item-list">
      {filteredItems.length === 0 ? (
        <p>No hay elementos para mostrar.</p>
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;
