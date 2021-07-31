import React from 'react'
import TempleOSPNG from '../assets/TempleOS_logo.png'
import Slide from 'react-reveal/Slide';

function TempleOSShowcase() {
  return (
    <section className="dark-bg p-10 text-white flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-kobi">
        <Slide left>
          <div className="flex justify-center items-center">
            <img src={TempleOSPNG} alt="temple os logo" className="w-80" />
          </div>
        </Slide>
        <Slide right>
          <div className="text-center p-5">
            <h3 className="bebas font-bold text-3xl">TempleOS</h3>
            <p className="text-sm">a biblical-themed lightweight operating system (OS) designed to be the Third Temple prophesied in the Bible. It was created by American programmer Terry A. Davis, who developed it alone over the course of a decade after a series of manic episodes that he later described as a revelation from God.</p>
          </div>
        </Slide>
      </div>
    </section>
  )
}

export default TempleOSShowcase
