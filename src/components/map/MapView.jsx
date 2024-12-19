import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { parkingSpots } from '../../data/parkingSpots';
import { MAP_CONFIG } from '../../constants/mapConfig';
import 'leaflet/dist/leaflet.css';

// Importar la imagen del marcador
import markerIcon from '../../assets/marker-icon.png'; // Asegúrate de que la ruta sea correcta
import L from 'leaflet';

// Configurar el icono del marcador
const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 41], // tamaño del icono
  iconAnchor: [12, 41], // punto del icono que corresponde a la ubicación del marcador
  popupAnchor: [1, -34], // punto desde el que se abrirá el popup en relación al icono
});

const MapView = () => {
  return (
    <MapContainer
      center={MAP_CONFIG.center}
      zoom={MAP_CONFIG.zoom}
      className="w-full h-[500px] rounded-lg"
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

export default MapView;