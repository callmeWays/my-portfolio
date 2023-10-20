import React from 'react'
import hero from '../assets/images/hero.png';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'

const Hero = () => {
  const social_media = [
    // { icon: <SiIndeed />, link: ''},
    { icon: <BsFacebook />, link: 'https://www.facebook.com/Medina.diether.7'},
    { icon: <BsLinkedin />, link: 'https://www.linkedin.com/in/diether-medina-b1a88825a/'},
    { icon: <BsGithub />, link: 'https://github.com/callmeWays'},   
  ]
  return (
    <section 
      id="home" 
      className="min-h-screen flex py-10 md:flex-row flex-col items-center mt-5"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img 
          src={hero} 
          alt=""
          className="md:w-8/12 h-full object-cover"
        />
      </div>
      <div className="flex-1 ">
        <div className='md:text-left text-center'>
          <h1 className='md:text-6xl text-2xl md:leading-normal leading-10 text-white font-bold md:mt-0 mt-4'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>
              Hello! <br/>
            </span>
            My Name is <span>Diether</span>
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>
            Front-End Developer
          </h4>
            <button className='btn-primary mt-8 hover:text-cyan-950'> 
              <a href="#contact">Contact Me</a>
            </button>
            <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
              {
                social_media?.map(icon => (
                  <div 
                    key={icon}
                    className='text-gray-600 hover:text-white cursor-pointer'
                  > 
                    <a href={icon.link} target='_blank'>{icon.icon}</a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>      
    </section>
  )
}

export default Hero