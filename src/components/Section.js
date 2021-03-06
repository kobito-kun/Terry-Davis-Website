import React from 'react';
import Slide from 'react-reveal/Slide';

function Section() {
  return (
    <div className="h-auto darkless-bg flex justify-center lg:flex-row flex-col p-10 overflow-hidden items-center">
      <Slide bottom duration={1000}>
        <div className="max-w-kobi text-gray-100 relative w-full m-5 lg:h-36">
          <quote className="lg:m-0 italic font-thin">"Plan B? I'm not ****ing CIA ****** ****, *****. **** yerself. I have a space alien, Plan B, **** you."</quote>
          <span className="lg:absolute float-right mt-10 bottom-0 right-0 font-bold">~ Terry A. Davis</span>
        </div>   
      </Slide>
      <Slide bottom duration={1200}>
        <div className="max-w-kobi text-gray-100 relative w-full m-5 lg:h-36">
          <quote className="lg:m-0 italic font-thin">"Jesus said "I will rebuild this temple in three days." I could make a compiler in 3 days."</quote>
          <span className="lg:absolute float-right mt-10 bottom-0 right-0 font-bold">~ Terry A. Davis</span>
        </div>   
      </Slide>      
      <Slide bottom duration={1400}>
        <div className="max-w-kobi text-gray-100 relative w-full m-5 lg:h-36">
          <quote className="lg:m-0 italic font-thin">"I have God's official endorsement. I win and the CIA/FBI ******* lose. Just wait. Dumb **** FBI *******."</quote>
          <span className="lg:absolute float-right mt-10 bottom-0 right-0 font-bold">~ Terry A. Davis</span>
        </div>
      </Slide>
      <Slide bottom duration={1600}>
        <div className="max-w-kobi text-gray-100 relative w-full m-5 lg:h-36">
          <quote className="lg:m-0 italic font-thin">"India ****** ***** doctor."</quote>
          <span className="lg:absolute float-right mt-10 bottom-0 right-0 font-bold">~ Terry A. Davis</span>
        </div>   
      </Slide>
    </div>
  )
}

export default Section
