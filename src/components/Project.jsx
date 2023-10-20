import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import project_person from '../assets/images/a2.webp';
import project_xtelarz from '../assets/images/project_xtelarz.png';
import project_bulsu_archive from '../assets/images/project_bulsu_archive.png';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Project = () => {
  const projects = [

    {
      img: project_xtelarz, 
      name: 'XTelarz Website',
      github_link: '', 
      demo_link: 'https://xtelarz.com/'
    },
    {
      img: project_bulsu_archive, 
      name: 'Thesis & Capstone Archive',
      github_link: '', 
      demo_link: 'https://bulsuv1.000webhostapp.com/'
    },    
  ]
  return (
    <section id='projects' className=' pb-10 pt-28 text-white'>
      <div className='text-center'>
        <h3 className=' text-4xl font-semibold'>
          My <span className=' text-cyan-600'>Projects</span>
        </h3>
        <p className=' text-gray-400 mt-3 text-lg'>My awesome works</p>
      </div>
      <br />
      <div className='flex max-w-6xl px-5 mx-auto items-center relative'>
        <div className=' lg:w-2/3 w-full'>
          <Swiper 
            slidePerview={2} 
            spaceBetween={20} 
            breakpoints={{
              768:{
                slidesPerView: 2,
              }
            }}
            loop={true} 
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {
              projects?.map((projectInfo, i) => (
                <SwiperSlide key={i}>
                  <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                    <img src={projectInfo.img} alt="" className='rounded-lg' />
                    <h3 className='text-xl my-4'>{projectInfo.name}</h3>
                    <div className='flex gap-3'>
                      {/* <a href={projectInfo.github_link} target='_blank' className='text-cyan-800 bg-gray-800 px-2 py-1 inline-block rounded-lg'>Github</a> */}
                      <a href={projectInfo.demo_link} target='_blank' className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg'>Demo</a>
                    </div>
                  </div>              
                </SwiperSlide>
              ))
            }            
          </Swiper>
        </div>
        <div className='lg:block hidden relative project-img'>
          <img src={project_person} alt="" className=' h-96 ml-4'/>
        </div>
      </div>
    </section>
  )
}

export default Project