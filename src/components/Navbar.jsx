import React, { useState } from 'react'
import JobRingerLogo from "../assets/images/jobRinger.svg"
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiUserPlus } from 'react-icons/fi';
import { PiSuitcaseSimpleLight } from 'react-icons/pi';
import { BiShare } from 'react-icons/bi';
import { IoHomeOutline } from 'react-icons/io5';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className=''>
      <nav className='px-3 py-2 bg-white shadow-lg shadow-gray-300'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <img src={JobRingerLogo} alt="JobRinger Logo" className='w-48 ' />
            {/* <p className='text-xl'>JobRinger</p> */}
          </div>
          <div className='nav-link hidden md:block'>
            <ul className='flex gap-4 text-bage font-semibold cursor-pointer'>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Active Employers</a></li>
              <li><a href="#">Job Blogs</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#" className='border border-gray-300 p-2 rounded-md hover:bg-yellow-400'>Jobseeker Login</a></li>
              <li><a href="#" className=' bg-yellow-400 p-2 rounded-md hover:bg-blue-950 hover:text-white'>Employer Login</a></li>
            </ul>
          </div>
          <div className='block md:hidden '>
              <p className='font-bold text-blue-800'>
                <span className='block'>11000+</span>
                <span>Active Jobs</span>
              </p>
          </div>
        </div>
      </nav>

      {isOpen &&
        <nav className=' fixed top-0 left-0 z-50 p-4 bg-white shadow-lg shadow-gray-300 block md:hidden w-[70%] h-screen'>
          <div className='nav-link'>
            <ul className='flex flex-col gap-3 text-sm cursor-pointer'>
              <li><a href="#">Jobs</a></li>
              <div className='border border-b-0 border-gray-400'></div>
              <li><a href="#">Active Employers</a></li>
              <div className='border border-b-0 border-gray-400'></div>
              <li><a href="#">Job Blogs</a></li>
              <div className='border border-b-0 border-gray-400'></div>
              <li><a href="#">Pricing</a></li>
              <div className='border border-b-0 border-gray-400'></div>
              <li className='py-1'><a href="#" className='border border-gray-300 p-2 rounded-md hover:bg-yellow-400'>Jobseeker Login</a></li>
              <div className='border border-b-0 border-gray-400'></div>
              <li className='py-1'><a href="#" className=' bg-yellow-400 p-2 rounded-md hover:bg-blue-950 hover:text-white'>Employer Login</a></li>
              <div className='border border-b-0 border-gray-400'></div>
            </ul>
          </div>
        </nav>
      }

      <div className='block md:hidden'>
      <div className=' fixed bottom-0 left-0 z-50 flex justify-evenly items-center gap-5 bg-white w-full p-2'>
        <button className='cursor-pointer' onClick={toggle} >
          <GiHamburgerMenu className='text-3xl  ' />
        </button>
        <div className='flex flex-col items-center cursor-pointer' >
          <span className='text-xl md:text-2xl'><FiUserPlus /></span>
          <span className=''>Login</span>
        </div>
        <div className='flex flex-col items-center cursor-pointer' >
          <span className='text-xl md:text-2xl'><IoHomeOutline /></span>
          <span>Home</span>
        </div>
        <div className='flex flex-col items-center cursor-pointer' >
          <span className='text-xl md:text-2xl'><PiSuitcaseSimpleLight /></span>
          <span>Jobs</span>
        </div>
        <div className='flex flex-col items-center cursor-pointer' >
          <span className='text-xl md:text-2xl '><BiShare /></span>
          <span>Back</span>
        </div>
      </div>
      </div>
      

    </div>
  )
}

export default Navbar