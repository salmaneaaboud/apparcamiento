import React from 'react';
import ParkingSpot from './ParkingSpot';
import { parkingSpots } from '../../data/parkingSpots';

const ParkingList = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Parkings en Donostia</h2>
      {parkingSpots.map((spot) => (
        <ParkingSpot key={spot.id} {...spot} />
      ))}
    </div>
  );
};

export default ParkingList;