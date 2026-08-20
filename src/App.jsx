function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>Parking Toulouse</h1>

        <input
          type="text"
          className="search-box"
          placeholder="Rechercher un parking..."
        />

        <div className="controls">
          <button>Trier par distance</button>
          <button>Trier par places</button>
          <button>Simulation</button>
        </div>

        <div className="parking-list">
          <div className="parking-card">
            <h2>Parking exemple</h2>
            <p>120 places disponibles</p>
            <p>2,4 km</p>
          </div>
        </div>
      </aside>

      <main className="map-placeholder">
        <p>La carte Leaflet arrivera ici 🗺️</p>
      </main>
    </div>
  );
}

export default App;