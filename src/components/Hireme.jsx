import React from 'react'
import hireMe from '../assets/images/a1.webp'

const Hireme = () => {  
  return (
    <section className=' px-4'>
      <div className='text-center mt-8'>
        <h3 className=' text-4xl font-semibold'>
          Hire <span className=' text-cyan-600'>Me</span>
        </h3>
        {/* <p className=' text-gray-400 mt-3 text-lg'>Do you have any work?</p> */}
      </div>
      <div className=' bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
        <div>
          <h2 className='text-2xl font-semibold'> Do you want any work from me?</h2>
          <p className='lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6'>
              I'm a recent IT graduate with a strong interest in web development and a proven ability to create simple yet elegant websites. I have some projects below that I created when I was in college and for my past company. I am confident that I can make a valueable contribution to your organization's web development projects.
          </p>
          <button className='btn-primary mt-10'>Say Hello</button>          
        </div>
        <img src={hireMe} alt="hireMe" className=' lg:h-[32rem] w-[22rem] h-80 lg:absolute bottom-0 -right-3 object-cover'/>
      </div>
    </section>    
  )
}

export default Hireme