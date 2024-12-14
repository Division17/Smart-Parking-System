import React from 'react';

const VideoBackground = () => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2023/02/09/149878-797491481_large.mp4" type="video/mp4" autoPlay={true} muted/>
      </video>
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Smart Parking Solutions</h2>
        <p className="max-w-2xl">Experience hassle-free parking with our advanced booking system. Save time and ensure your spot is ready when you arrive.</p>
      </div>
    </div>
  );
};

export default VideoBackground;