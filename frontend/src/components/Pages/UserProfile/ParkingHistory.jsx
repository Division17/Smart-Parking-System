import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ParkingHistory = ({ data }) => {
  const { id } = useParams();
  const [parkingData, setParkingData] = useState([]);
  
  useEffect(() => {
    if (data) {
      setParkingData(data);
    }
  }, [data]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB'); 
  };

  return (
    <>
      <div className='rounded-lg p-8 border-2 border-gray-100 my-8 bg-white shadow-xl'>
        <div className="mb-4 w-full flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Parking History</h2>
          <Link to={`/book/${id}`}>
            <button className='border-2 border-blue-800 font-semibold text-white hover:font-bold hover:ring-1 ring-blue-800 bg-blue-500 font-short rounded-lg px-2 py-1 hover:scale-105 hover:transition-transform'>
              Book Your SPot
            </button>
          </Link>
        </div>
        <div className="container mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Date </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Place </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Entry Time </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Exit Time </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Total Time </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Vehicle Number </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Status </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    parkingData.map((response) => {
                      return (
                        <tr key={response._id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {formatDate(response.date)}</td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {response.place}</td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {response.entryTime}</td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {response.exitTime} </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {response.totalTime} </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {response.vehicleNumber} </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {response.state} </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParkingHistory;
