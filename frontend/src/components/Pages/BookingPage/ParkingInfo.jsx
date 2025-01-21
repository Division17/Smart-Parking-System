import React,{useEffect, useState} from 'react';

function ParkingInfo() {
  const [parkingLot, setParkingLot]=useState()

  const emptySpaces = 15;
  const occupiedSpaces = 35;

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800">Parking Information</h2>
      <p className="text-xl text-green-600">Empty Spaces: {emptySpaces}</p>
      <p className="text-xl text-red-600">Occupied Spaces: {occupiedSpaces}</p>
    </div>
  );
}

export default ParkingInfo;
