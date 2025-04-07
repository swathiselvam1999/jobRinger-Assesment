import React from 'react'

const OfferBanner = () => {
    return (
        <div className='m-3'>
            <div className='px-8 py-3 rounded-lg flex md:flex-row flex-col  md:justify-between items-start md:items-center'
                style={{
                    background: "linear-gradient(125deg, #27dadb 0, #001b85 100%)",
                }}>
                <div>
                    <p className='text-3xl text-white font-semibold pb-5 md:p-0'>Employee</p>
                </div>
                <div>
                    <p className=' font-bold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent animate-gradient [background-size:200%_200%] hidden md:block'>WEMCOME OFFER - FREE JOB Postings and Much More.</p>
                </div>
                <div className='flex gap-2'>
                    <button>
                        <a href="#" className=' bg-yellow-400 p-2 rounded-md hover:text-white text-sm font-semibold'>Register for FREE</a>
                    </button>
                    <button>
                        <a href="#" className='border border-gray-300 p-2 rounded-md bg-white text-sm font-semibold'>Post A Job</a>
                    </button>
                    <a href="" className='ml-4 underline text-white text-sm font-semibold hover:text-blue-600'>Sales Enquiry</a>
                </div>
            </div>
        </div>
    )
}

export default OfferBanner