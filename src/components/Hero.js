import React from 'react';
import TerryDavisPNG from '../assets/davis-bg.png';
import HeroBG from '../assets/bg.png';
import Slide from 'react-reveal/Slide';

function Hero() {
  return (
    <div className="dark-bg h-screen w-screen flex justify-center items-center" style={{backgroundImage: `url(${HeroBG})`, backgroundSize: "cover"}}>
      <div className="flex justify-center items-center absolute bottom-0">
        <Slide bottom duration={900}>
          <img src={TerryDavisPNG} alt="Terry Davis" className="lg:w-full w-full z-10 select-none" />
        </Slide>
        <Slide bottom duration={1200}>
          <div className="w-72 lg:w-96 h-32 rounded-t-full darkless-bg absolute bottom-0"></div>
        </Slide>
      </div>
      <div className="z-20 mb-40">
        <Slide left duration={1500}>
          <h1 className="bebas text-5xl lg:text-6xl font-bold tracking-wider text-white">
            Terry Andrew Davis
          </h1>
        </Slide>
        <Slide left duration={1700}>
          <hr className="border-red-500 w-2/4 mb-2" />
        </Slide>
        <Slide left duration={2000}>
          <h3 className="bebas text-red-600">God's Lonely Programmer</h3>
        </Slide>
      </div>
    </div>
  )
}

export default Hero
