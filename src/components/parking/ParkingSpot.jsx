import React from 'react';
import Card from '../ui/Card';

const ParkingSpot = ({ name, address, availableSpots, totalSpots, pricePerHour }) => {
  const availability = (availableSpots / totalSpots) * 100;
  
  return (
    <Card className="mb-4">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm">{address}</p>
      <div className="mt-2 flex justify-between items-center">
        <div>
          <span className={`font-bold ${availability > 20 ? 'text-green-600' : 'text-red-600'}`}>
            {availableSpots} plazas libres
          </span>
          <div className="text-sm text-gray-500">de {totalSpots} totales</div>
        </div>
        <div className="text-right">
          <span className="text-lg font-bold">{pricePerHour}€</span>
          <div className="text-sm text-gray-500">/hora</div>
        </div>
      </div>
    </Card>
  );
};

export default ParkingSpot;