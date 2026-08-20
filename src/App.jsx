import ParkingMap from "./Components/ParkingMap";
import { useEffect, useState } from "react";
import { fetchParkings } from "./Services/ParkingAPI";
function App() {
  const [parkings, setParkings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadParkings() {
      try {
        const data = await fetchParkings();
        setParkings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadParkings();
  }, []);

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
          {loading && <p>Chargement des parkings...</p>}

          {error && <p>Erreur : {error}</p>}

          {!loading &&
            !error &&
            parkings.map((parking) => (
              <div className="parking-card" key={parking.id}>
                <h2>{parking.name}</h2>
                <p>{parking.available} places disponibles</p>
              </div>
            ))}
        </div>
      </aside>

      <main className="map-container">
        <ParkingMap />
      </main>
    </div>
  );
}

export default App;