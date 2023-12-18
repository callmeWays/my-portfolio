import React from 'react'
import { BiLogoHtml5 } from 'react-icons/bi';
import { FaCss3Alt } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoReact } from 'react-icons/bi';
import { SiTailwindcss } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';

const Skills = () => {
  const skill = [
    {
      logo: <BiLogoHtml5 />,
      language: 'HTML',  
      level: 'Intermediate', 
      count: 60,
    },
    {
      logo: <FaCss3Alt />, 
      language: 'CSS',
      level: 'Intermediate', 
      count: 60,
    },    
    {
      logo: <BiLogoJavascript />, 
      language: 'JavaScript',
      level: 'Beginner', 
      count: 40,
    },
    {
      logo: <BiLogoReact />, 
      language: 'React',
      level: 'Beginner', 
      count: 40,
    },
    {
      logo: <SiTailwindcss />,
      language: 'Tailwind', 
      level: 'Beginner', 
      count: 40,
    },
    {
      logo: <FaBootstrap />, 
      language: 'Bootstrap',
      level: 'Intermediate', 
      count: 60,
    },
  ]
  return (
    <section id='skills' className='py-20 bg-gray-800 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-800'> Tech Stack</span>
        </h3>        
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {
            skill?.map((skill, i) => (
              <div 
                key={i} 
                className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl hover:scale-105 duration-300'
              >
                <p className='text-xl mb-3'>{skill.language}</p>
                <div 
                  style={{
                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`
                    }} 
                  className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
                    {skill.logo}
                  </div>              
                </div>
                <p className='text-xl mt-3'>{skill.level}</p>
              </div>
            ))
          }
          

        </div>
      </div>
    </section>
  )
}

export default Skills