import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className='m-3 text-sm'>
      <div>
        <h2 className='flex flex-col items-center text-blue-950 '>
          <span className='text-xl font-bold'>BRINGING YOU THE PERFECT JOB !</span>
          <span className='text-lg'>11,000+ JOBS to Apply</span>
        </h2>
        <div className='flex justify-around m-5'>
          <div className='grid md:grid-cols-2 gap-5 md:gap-16'>
            <div className='flex flex-col justify-center p-5 bg-[#27dadb] rounded-md w-full' >

              <div className='flex gap-2 mb-3'>
                <input type="text" placeholder='Search Jobs Now' className='border-gray-100 w-full shadow-inner p-2 rounded-md ' />
                <button className='bg-yellow-400 p-2 rounded-md hover:text-white'>Search</button>
              </div>

              <div className='flex justify-end gap-1 md:gap-2'>
                <button>
                  <a href="#" className='border bg-white border-gray-300 p-1 md:p-2 rounded-md'>Jobseeker Login</a>
                </button>
                <button>
                  <a href="#" className=' bg-yellow-400 p-1 md:p-2 rounded-md hover:text-white'>Employer Login</a>
                </button>
              </div>

            </div>
            <div className='bg-[#27dadb] p-5 rounded-md w-full'>
              <div className='flex flex-row items-center gap-1 justify-center'>
                <h2 className='text-xl text-blue-950 font-semibold'>Quick Job search</h2><FaSearch className='text-lg text-blue-950' />
              </div>
              <p className='text-white text-sm items-center'>
                <span className='inline-block leading-7 md:leading-10 tracking-wider'>#Fresher
                  #Work From Home
                  #WFH
                  #IT
                  #HR
                  #Back Office
                  #BPO Jobs
                  #ITES
                  #Finance
                  #Accounts
                  #Medical
                  #Pharma
                  #Manager
                  #Developer
                  #Marketing
                  #Engineering
                  #Non Government Jobs
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search