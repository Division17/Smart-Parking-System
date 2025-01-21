import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ParkingInfo() {
    const [parkingLot, setParkingLot] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/user/parkingLotDetails');
                setParkingLot(response.data.parkingLotDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="text-center p-4">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 border-2 border-gray-300 shadow-xl rounded">
                    {parkingLot.map((lot, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4 w-full min-w-full">
                            {console.log(lot)}
                            <h2 className="text-2xl font-bold text-gray-800">{lot.name}</h2>
                            <p className="text-xl text-green-600">{lot.spaceEmpty}</p>
                            <p className="text-xl text-red-600">{lot.spaceOccupied}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ParkingInfo;
