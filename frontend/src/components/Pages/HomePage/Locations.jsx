import React from 'react';
import { MapPin } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: "Near India Gate, Delhi",
      image: "https://images.unsplash.com/photo-1678966432189-d58296e45ad2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      spots: "70+ spots available"
    },
    {
      name: "Near Ghanta Ghar, Bareilly",
      image: "https://images.unsplash.com/photo-1696338556385-bc60d18d5055?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      spots: "50+ spots available"
    },
    {
      name: "Cyber City, Gurugram",
      image: "https://images.unsplash.com/photo-1688139885160-bb49f176ae2e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      spots: "100+ spots available"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Popular Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center text-white mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <h3 className="text-xl font-semibold">{location.name}</h3>
                  </div>
                  <p className="text-indigo-200">{location.spots}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;