import React from 'react'
import Img1 from '../assests/laptop.jpg'

export default function Analytics() {
  return (
    <div name='analytics' className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 	rounded-2xl'src={Img1} alt="/" />
        <div className='flex flex-col justify-center '>
            <p  className= "text-[#ecc114] font-bold text-2xl mx-5">Data Analytics Dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mx-5'>Manage Data Analytics Centrally</h1>
            <p className='mx-5'>Lorem ipsum dolor sit,
                amet consectetur adipisicing 
                elit. Architecto magnam ut in 
                cumque ducimus tenetur corporis
                 earum 
            </p>
            <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-5 py-3 text-[#ecc114]'>Get Started</button>

        </div>
        </div>
    </div>
  )
}
