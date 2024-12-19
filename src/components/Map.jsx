import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MAP_CONFIG } from '../constants/mapConfig';
import { parkingSpots } from '../data/parkingSpots';
import 'leaflet/dist/leaflet.css';

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
        <Marker key={spot.id} position={[spot.lat, spot.lng]}>
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