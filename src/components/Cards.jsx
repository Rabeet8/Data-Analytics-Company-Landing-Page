import React from 'react'
import User1 from '../assests/user1.jpg'
import User2 from '../assests/user2.webp'
import User3 from '../assests/user3.jpg'


export default function Cards() {
  return (
    <div name="packages" className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] max-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={User1} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-meduim'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send up tp 2 GB</p>

                <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px--6 py-3 text-[#ecc114]'>Get Started</button>
                </div>

            </div>
            <div className='w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={User2} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Patnership</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-meduim'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send up tp 2 GB</p>

                    <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px--6 py-3 text-[#ecc114]'>Get Started</button>
                </div>

            </div>
            <div className='w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={User3} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-meduim'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send up tp 2 GB</p>

                    <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px--6 py-3 text-[#ecc114]'>Get Started</button>
                </div>

            </div>
        </div>
    </div>
  )
}
