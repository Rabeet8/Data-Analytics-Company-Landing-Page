import React from 'react'
import {FaFacebookSquare,FaGithubSquare,FaInstagram,FaInstagramSquare,FaTwitterSquare} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='max-w-[1240] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>   
    <div>
    <h1 className="w-full text-3xl font-bold  text-[#ecc114]">DataNexus</h1>
    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate a repellendus ab mollitia iusto</p>
    <div className='flex justify-between md:w-[75%] my-6'>
        <FaFacebookSquare  size={20}/>
        <FaInstagramSquare size={20}/>
        <FaTwitterSquare size={20}/>
        <FaGithubSquare size={20}/>
        {/* <FaDribbleSquare size={20}/> */}

    </div>
    </div>
    <div className='lg:col-span-2 flex justify-between'>
        <div>
            <h6 className='font-medium text-gray-400'>Solution</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insight</li>

            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>

            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Comapny</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>

            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Term</li>
                <li className='py-2 text-sm'>Insights</li>

            </ul>
        </div>
    </div>
    </div>
  )
}
