import React from 'react';
import { parkingSpots } from '../data/parkingSpots';

const ParkingList = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Aparcamientos en Donostia</h2>
        <div className="space-y-4">
          {parkingSpots.map((spot) => (
            <div key={spot.id} className="border-b pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{spot.name}</h3>
                  <p className="text-sm text-gray-600">{spot.address}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${spot.availableSpots > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {spot.availableSpots} plazas
                  </p>
                  <p className="text-sm">{spot.pricePerHour}€/hora</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingList;