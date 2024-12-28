import React from 'react';
import HeroSection from './HeroSection';
import VideoBackground from './VideoBackground';
import Features from './Features';
import Locations from './Locations';
import Testimonials from './Testimonials';

const FrontLayout = () => {
  return (
    <div className='bg-white dark:bg-gray-900 text-black dark:text-white'>
      <HeroSection />
      <VideoBackground />
      <Features />
      <Locations />
      <Testimonials />
    </div>
  );
};

export default FrontLayout;
