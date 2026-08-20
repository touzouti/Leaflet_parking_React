import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ParkingMap() {
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
    </MapContainer>
  );
}

export default ParkingMap;