import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MAP_CONFIG } from '../constants/mapConfig';
import { parkingSpots } from '../data/parkingSpots';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../assets/marker-icon.png';
import L from 'leaflet';

 // Start of Selection
const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [30, 45], // Ajustado el tamaño del icono
  iconAnchor: [15, 45], // Ajustado el punto de anclaje del icono
  popupAnchor: [1, -34],
});

const Map = () => {
  return (
    <MapContainer
      center={MAP_CONFIG.center}
      zoom={MAP_CONFIG.zoom}
      className="w-full h-[500px] rounded-lg shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={MAP_CONFIG.attribution}
      />
      {parkingSpots.map((spot) => (
        <Marker key={spot.id} position={[spot.lat, spot.lng]} icon={customIcon}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{spot.name}</h3>
              <p className="text-sm">Plazas disponibles: {spot.availableSpots}</p>
              <p className="text-sm">Precio/hora: {spot.pricePerHour}€</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;