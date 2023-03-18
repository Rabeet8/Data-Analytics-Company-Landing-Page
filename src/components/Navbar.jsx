import React,{useState} from 'react'
import { Link } from 'react-scroll'

import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {


  const [navbar,setNavbar] = useState(false)

  const handleNav = () =>{
    setNavbar(!navbar)
  }
  return (
    <div className='flex justify-between itemcenter h-24 max-w-[1240px] px-4 mx-auto  text-white'>
      <h1 className="w-full text-3xl font-bold  text-[#ecc114]">
      DataNexus
    </h1>
    <ul className='hidden md:flex '>
    <li className='p-4 '> <a href="/">  <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></a> 
             </li>

     <li className='p-4'> <a href="/">  <Link activeClass="active" to="analytics" spy={true} smooth={true} offset={50} duration={500}>Analytics</Link></a> 
      </li>
     
      <li className='p-4'> <a href="/">  <Link activeClass="active" to="newsletter" spy={true} smooth={true} offset={50} duration={500}>Newsletter</Link></a> 
      </li>

      <li className='p-4'> <a href="/">  <Link activeClass="active" to="packages" spy={true} smooth={true} offset={50} duration={500}>Packages</Link></a> 
      </li>
   
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {navbar ? <AiOutlineClose size={20}/>:  <AiOutlineMenu size={20}/>}
        
      </div>
      <div className={navbar ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in=out duration-500" : 'fixed left-[-100%]'}>
      <h1 className="w-full text-3xl font-bold  text-[#ecc114]">
      DataNexus
    </h1>
        <ul className=' uppercase p-4'>
        <li className='p-4  border-b border-gray-600'> <a href="/">  <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></a> 
             </li>

     <li className='p-4 border-b border-gray-600'> <a href="/">  <Link activeClass="active" to="analytics" spy={true} smooth={true} offset={50} duration={500}>Analytics</Link></a> 
      </li>
     
      <li className='p-4 border-b border-gray-600'> <a href="/">  <Link activeClass="active" to="newsletter" spy={true} smooth={true} offset={50} duration={500}>Newsletter</Link></a> 
      </li>

      <li className='p-4 border-b border-gray-600'> <a href="/">  <Link activeClass="active" to="packages" spy={true} smooth={true} offset={50} duration={500}>Packages</Link></a> 
      </li>
     
        </ul>
      </div>
    </div>
  )
}



