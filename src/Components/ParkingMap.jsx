import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ParkingMap({ parkings }) {
  return (
    <MapContainer
      center={[43.6047, 1.4442]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {parkings.map((parking) => (
        <Marker
          key={parking.id}
          position={parking.position}
        >
          <Popup>
            <strong>{parking.name}</strong>
            <br />
            {parking.available} places disponibles
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ParkingMap;