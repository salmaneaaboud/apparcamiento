import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { parkingSpots } from '../../data/parkingSpots';
import { MAP_CONFIG } from '../../constants/mapConfig';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
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

export default MapView;