import React from 'react'
import aboutImg from '../assets/images/about.png'
import myportfolio from '../assets/file/Diether Medina Resume.pdf'

const About = () => {
  const info = [
    {text:'Years experience', count:'01'},
    {text:'Completed Projects', count:'04'},
    {text:'Companies Work', count:'04'},    
  ]
  return (
    <section id='about' className='py-20 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'> Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>My Introduction</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='p-2'>
            <div className='text-gray-300 my-3 '>
              <p className='text-justify leading-7 w-11/12'>
                Hi! I'm an inpiring front-end developer named Diether Medina. I graduated as Bachelor of Science in Information Technology at Bulacan State University, here in the Philippines.  I have a foundational understanding of HTML, CSS, and JavaScript; however, I've been brushing up on React Framework recently. I can troubleshoot computer hardware and software as well. 
              </p>
              <div className='flex mt-10 items-center gap-7 mx-auto'>
                {info.map((content) => (
                  <div key={content.text}> 
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                      {content.count}
                      <span className='text-cyan-600'>+</span>{" "}
                    </h3>
                    <span className='md:text-base text-xs'>{content.text}</span>
                  </div>
                ))            
                }
              </div>
              <br/><br/>
              <a 
                href={myportfolio}  
                target='_blank'
                rel='noreferrer'
              >
                <button className='btn-primary '> Download </button>
              </a>              
            </div>
          </div>
          <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
              <img 
                src={aboutImg}
                alt=""
                className='w-full object-cover bg-cyan-600 rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About