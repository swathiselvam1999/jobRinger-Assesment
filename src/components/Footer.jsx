import React from 'react'
import startUpLogo from '../assets/images/startuplogo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'


const Footer = () => {

    return (
        <div className='text-sm'>

            <div className='flex justify-between '>
                <div className='grid md:grid-cols-2 gap-2'>
                    <div className='p-5 w-full bg-[#d6eeee]'>
                        <div className='flex flex-row items-center gap-1 justify-center'>
                            <h2 className='text-xl text-blue-950 font-semibold'>JOBS IN INDIA</h2>
                        </div>
                        <p className='text-base items-center'>
                            <span className='inline-block leading-10 tracking-wider'>#Mumbai
                                #Delhi
                                #Ajmer
                                #Pune
                                #Hyderabad
                                #Agra
                                #Chennai
                                #Kolkata
                                #Indore
                                #Gurugram
                                #Jaipur
                                #Ahmedabad</span>
                        </p>
                    </div>

                    <div className=' p-5 w-full bg-[#d6eeee]'>
                        <div className='flex flex-row items-center gap-1 justify-center'>
                            <h2 className='text-xl text-blue-950 font-semibold'>INTERNATONAL JOBS</h2>
                        </div>
                        <p className=' items-center'>
                            <span className='inline-block leading-10 tracking-wider text-base'>#Africa
                                #USA
                                #UK
                                #Australia
                                #Canada
                                #Singapore
                                #Dubai
                                #Saudi Arabia
                                #New Zealand</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className=' border-blue-950 border-b-2 '></div>
            <div className='bg-[#d6eeee]'>
               
                <div className='flex justify-center py-5 bg-white md:bg-[#d6eeee]'>
                    <div className='grid grid-cols-4 gap-5 md:gap-20'>
                        <div className='flex flex-col justify-center'>
                            <span className='text-center pb-4 font-bold'>Jobs Posted</span>
                            <span className='text-2xl md:text-4xl text-center tracking-tight md:tracking-wider font-semibold'>38223</span>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <span className='text-center pb-4 font-bold'>Jobs Filled</span>
                            <span className='text-2xl md:text-4xl text-center tracking-tight md:tracking-wider font-semibold'>15153</span>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <span className='text-center pb-4 font-bold'>Employers</span>
                            <span className='text-2xl md:text-4xl text-center tracking-tight md:tracking-wider font-semibold'>24058</span>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <span className='text-center pb-4 font-bold'>Active Users</span>
                            <span className='text-2xl md:text-4xl text-center tracking-tight md:tracking-wider font-semibold'>1475492</span>
                        </div>
                    </div>
                </div>

                <div className=' border-blue-950 border-b-2'></div>

                <div className='flex flex-col md:flex-row justify-center gap-10 py-5 px:5 md:px-20'>
                    <div className='w-full md:w-3/4'>
                        <p className='text-justify'>
                            <span className='font-bold'>Disclaimer:</span> All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. | Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker.</p>
                    </div>
                    <div className='w-full md:w-1/4 flex flex-col items-center'>
                        <div className='text-center font-bold'>Recognized By</div>
                        <img src={startUpLogo} alt="" className='w-[30rem]' />
                    </div>

                </div>

                <div className=' flex justify-center md:justify-end items-center gap-2 mx-10 md:mx-20 pb-5'>
                    <span className='font-bold'>Follow Us On</span>
                    <span className='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center'><FaWhatsapp className='text-md' /></span>
                    <span className='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center'><FaFacebook className='text-md' /></span>
                    <span className='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center'><FaTwitter className='text-md' /></span>
                    <span className='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center'><FaInstagram className='text-md' /></span>
                    <span className='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center'><FaLinkedin className='text-md' /></span>
                    <span className='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center'><FaYoutube className='text-md' /></span>
                    <span className='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center'><FaTelegram className='text-md' /></span>
                </div>
                <div className='border border-black border-b-0 py-2'></div>
                <div className='flex flex-wrap justify-center gap-x-4 gap-y-2 text-center px-4'>
                    <span>Terms and conditions</span>
                    <span>|</span>
                    <span>Privacy</span>
                    <span>|</span>
                    <span>Policy</span>
                    <span>|</span>
                    <span>Refund / Cancellation Policy</span>
                    <span>|</span>
                    <span>About Us</span>
                    <span>|</span>
                    <span>Contact Us</span>
                    <span>|</span>
                    <span> FAQ</span>
                    <span>|</span>
                    <span> Blogs</span>
                </div>
                <div className='text-center py-2'>
                    <p>© All Rights Reserved {new Date().getFullYear()} Jobtech Ventures Private Limited.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer