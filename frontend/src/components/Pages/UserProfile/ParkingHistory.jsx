import { TestTubeDiagonal } from 'lucide-react'
import React from 'react'

let data = {
  date: '2024-12-13',
  place: 'Lucknow',
  Entery_Time: '11:40',
  Exit_time: '3:40',
  Total_time: '4 hrs',
  Vehicle_no: 'UP25C9019'
}
const ParkingHistory = () => {
  return (
    <>
      <div className='rounded-lg p-8 border-2 border-gray-100 my-8 bg-white shadow-xl'>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Parking History</h2>
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {data.date}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {data.place}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {data.Entery_Time}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {data.Exit_time} </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {data.Total_time} </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> {data.Vehicle_no} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ParkingHistory