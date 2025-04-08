import React from 'react'
import android from '../assets/images/anroid.png'
import ios from '../assets/images/ios.png'

const Download = () => {
    return (
        <div>
            <div className='flex justify-center m-5 py-10 px-5'>
                <div className='grid md:grid-cols-2 gap-16'>
                    <div className=''>
                        <h1 className='text-xl md:text-3xl pb-4'>APPLY TO JOBS ON-THE-GO</h1>
                        <p className='text-2xl font-thin text-blue-400'>Jobringer Mobile App</p>
                        <div className='flex md:flex-row flex-col  gap-1 py-4'>
                            <img src={android} alt="" />
                            <img src={ios} alt="" />
                        </div>
                        <p  className='text-xl md:text-3xl'>Mobile App<a href="" className='text-blue-700'> Download</a></p>
                    </div>
                    {/* <div></div> */}
                </div>
            </div>
        </div>
    )
}

export default Download