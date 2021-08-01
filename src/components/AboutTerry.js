import React from 'react'
import TerryImage from '../assets/1_9f7v5K4u8AsAH2sCiThgFQ.jpeg';

function AboutTerry() {
  return (
    <div className="dark-bg text-gray-100 justify-center items-center flex p-10 flex-col">
      <h3 className="bebas text-3xl">About Terry</h3>
      <p className="max-w-kobi text-center">an American programmer who created and designed the operating system TempleOS. Its development was an extremely complex, time-consuming and unusual undertaking for one person. During his final years, he amassed an online following and regularly posted video blogs to social media. He often referred to himself as "the smartest programmer that's ever lived".</p>
      <img src={TerryImage} className="max-w-kobi my-4" alt="terry" />
    </div>
  )
}

export default AboutTerry
