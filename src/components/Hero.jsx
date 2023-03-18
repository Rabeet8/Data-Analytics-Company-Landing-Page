import React from 'react'
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div name = 'home 'className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
             {/* <p className='text-[#ecc114] md:text-md   font-bold p-2'> Growing With Data Analytics</p>  */}
             <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-[#ecc114]'>Grow With Data</h1>
        <div className='flex justify-center items-center'>
           <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'  >Fast and Flexible Financing for</p>
          <Typed
          className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 text-[#ecc114]'
           strings={['BTB','BTC','SASS']}
            typeSpeed={140} 
            backSpeed={120} 
            loop/>
        </div>
        <p className= 'md:text-xl text-md font-bold px-20 text-gray-600'>Monitor your data analytics to increase revenue for BTB,BTC and SASS platforms</p>
      <button className='bg-[#ecc114] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}
