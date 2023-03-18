import React from 'react'

export default function NewsLetter() {
  return (
    <div name="newsletter" className=' w-full py-16 px-4'>
      <div className='max-w-[1240] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className='text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want trps and tricks to optimize your flow?</h1>
            <p className='text-white'>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
               
                <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder='Enter your email' />
                <button className='bg-[#ecc114] w-[200px] rounded-md font-medium my-6 mx-5 py-3 text-[#000000]'>Get Started</button>
            
            </div>
        <p className='text-white'>We care about the protection of your data. Read our <span className='text-[#ecc114] '>Privacy Policy</span> </p>
        </div>
      </div>
    </div>

  )
}
