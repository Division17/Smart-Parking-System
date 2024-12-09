import React from 'react'
import HeroSection from './HeroSection'
import VideoBackground from './VideoBackground'
import Features from './Features'
import Locations from './Locations'
import Testimonials from './Testimonials'
const FrontLayout = () => {
  return (
<>
  <HeroSection></HeroSection>
  <VideoBackground></VideoBackground>
  <Features></Features>
  <Locations></Locations>
  <Testimonials></Testimonials>
</>
  )
}

export default FrontLayout