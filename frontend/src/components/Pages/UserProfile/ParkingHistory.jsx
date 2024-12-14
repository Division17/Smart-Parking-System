import React from 'react'

const ParkingHistory = () => {
  return (
    <>
      <div className='rounded-lg p-8 border-2 border-gray-100 bg-white shadow-xl'>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Parking History</h2>
        </div>
        <div className="container mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr> <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Date </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Place </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Entry Time </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Exit Time </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Total Time </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> Vehicle Number </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 2024-12-13 </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> Downtown </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 08:00 AM </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 12:00 PM </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 4 hrs </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> AB123CD </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 2024-12-14 </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> City Mall </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 09:30 AM </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 11:45 AM </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 2 hrs 15 mins </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> XY456EF </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 2024-12-15 </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> Airport </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 07:00 AM </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 10:30 AM </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 3 hrs 30 mins </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> GH789IJ </td>
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