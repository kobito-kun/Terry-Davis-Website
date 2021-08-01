import React from 'react';
import TerryDavisPNG from '../assets/davis-bg.png';
// import HeroBG from '../assets/bg.png';
// import SVGBG from '../assets/svgbg.svg'
import Slide from 'react-reveal/Slide';

function Hero() {
  return (
    <div className="dark-bg h-screen w-screen flex justify-center items-center" style={{
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1211%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(56%2c 56%2c 67%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c749.876C161.212%2c757.832%2c344.298%2c833.686%2c474.268%2c737.976C604.834%2c641.826%2c571.565%2c438.852%2c628.516%2c287.034C680.371%2c148.802%2c800.876%2c33.325%2c793.924%2c-114.149C786.769%2c-265.944%2c700.142%2c-406.389%2c590.853%2c-511.977C486.471%2c-612.825%2c343.199%2c-654.756%2c201.561%2c-686.453C67.418%2c-716.473%2c-66.556%2c-710.155%2c-202.458%2c-689.51C-357.415%2c-665.97%2c-538.112%2c-673.588%2c-643.972%2c-558.005C-750.022%2c-442.214%2c-748.532%2c-262.54%2c-736.924%2c-105.954C-726.794%2c30.702%2c-629.909%2c137.483%2c-582.876%2c266.19C-530.547%2c409.388%2c-562.434%2c595.244%2c-445.109%2c692.603C-327.611%2c790.106%2c-152.499%2c742.35%2c0%2c749.876' fill='%232d2d36'%3e%3c/path%3e%3cpath d='M1920 1660.4569999999999C2026.574 1653.978 2089.5860000000002 1540.983 2182.848 1489 2284.762 1432.194 2435.712 1443.386 2492.401 1341.407 2548.658 1240.206 2462.312 1118.79 2452.791 1003.396 2442.459 878.17 2498.958 742.155 2434.0789999999997 634.548 2367.092 523.445 2234.252 470.24 2109.619 434.216 1985.34 398.29499999999996 1852.533 391.203 1729.398 430.86800000000005 1608.028 469.96500000000003 1488.008 541.2 1428.088 653.756 1371.382 760.2760000000001 1425.344 887.765 1421.952 1008.391 1419.035 1112.11 1369.685 1217.319 1409.548 1313.116 1449.818 1409.892 1549.1190000000001 1463.288 1635.779 1522.2559999999999 1724.675 1582.746 1812.674 1666.981 1920 1660.4569999999999' fill='%23434350'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1211'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`, 
      backgroundSize: "cover"
      }}>
      <div className="flex justify-center items-center absolute bottom-0">
        <Slide bottom duration={900}>
          <img src={TerryDavisPNG} alt="Terry Davis" className="lg:w-full w-full z-10 select-none" />
        </Slide>
        <Slide bottom duration={1200}>
          <div className="w-72 lg:w-96 h-32 rounded-t-full darkless-bg absolute bottom-0"></div>
        </Slide>
      </div>
      <div className="z-20 mb-40 p-10">
        <Slide left duration={1500}>
          <h1 className="bebas text-5xl lg:text-6xl font-bold tracking-wider text-white text-center">
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
