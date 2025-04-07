import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaLocationArrow } from 'react-icons/fa';
import { IoShieldCheckmark, IoTimeOutline } from 'react-icons/io5';
import { PiSuitcaseSimpleLight } from 'react-icons/pi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const FeaturedJobs = () => {
  const jobPosts = [
    {
      workMode: "In Office Job",
      title: "Lorem, ipsum dolor.Lorem Swathii.",
      company: "Lorem ipsum dolor sit.",
      JobType: "Full Time",
      experience: "1 - 2 Years",
      location: "Chennai/India"
    },
    {
      workMode: "In Office Job",
      title: "Lorem, ipsum dolor.Lorem Swathii.",
      company: "Lorem ipsum dolor sit.",
      JobType: "Full Time",
      experience: "1 - 2 Years",
      location: "Chennai/India"
    },
    {
      workMode: "In Office Job",
      title: "Lorem, ipsum dolor.Lorem Swathii.",
      company: "Lorem ipsum dolor sit.",
      JobType: "Full Time",
      experience: "1 - 2 Years",
      location: "Chennai/India"
    },
    {
      workMode: "In Office Job",
      title: "Lorem, ipsum dolor.Lorem Swathii.",
      company: "Lorem ipsum dolor sit.",
      JobType: "Full Time",
      experience: "1 - 2 Years",
      location: "Chennai/India"
    },
    {
      workMode: "In Office Job",
      title: "Lorem, ipsum dolor.Lorem Swathii.",
      company: "Lorem ipsum dolor sit.",
      JobType: "Full Time",
      experience: "1 - 2 Years",
      location: "Chennai/India"
    },
    {
      workMode: "In Office Job",
      title: "Lorem, ipsum dolor.Lorem Swathii.",
      company: "Lorem ipsum dolor sit.",
      JobType: "Full Time",
      experience: "1 - 2 Years",
      location: "Chennai/India"
    },
  ];

  return (
    <div className='relative px-8'>
      <h1 className='text-center text-2xl text-blue-900 font-bold mb-6'>Featured Jobs</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {jobPosts.map((jobPost, index) => (
          <SwiperSlide key={index}>
            <div className='relative border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300'>
              <p className='absolute top-0 right-0 bg-yellow-400 px-4 py-1 rounded-bl-full text-sm'>{jobPost.workMode}</p>
              <h3 className='pb-5 pt-7 text-blue-950 font-bold'>{jobPost.title}</h3>
              <p className='flex items-center'>{jobPost.company} <IoShieldCheckmark className='ml-1 text-blue-950' /></p>
              <p className='flex items-center text-gray-500 leading-9'><IoTimeOutline className='mr-1' /> {jobPost.JobType}</p>
              <p className='flex items-center text-gray-500'><PiSuitcaseSimpleLight className='mr-1' /> {jobPost.experience}</p>
              <p className='flex items-center text-gray-500 leading-9'><CiLocationOn className='mr-1' /> {jobPost.location}</p>
              <button className='mt-2 bg-[#27dadb] py-2 w-full text-sm text-white flex items-center justify-center gap-2 rounded'>
                Apply <FaLocationArrow className='text-xs' />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedJobs;
