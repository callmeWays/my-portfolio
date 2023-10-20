import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const contactInfo = [
    {
      logo: 'mail',
      text: 'diethermedina1@gmail.com'
    },
    {
      logo: 'call',
      text: '0906 952 8213'
    },
  ]

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_h1pa5ez', 
        'template_5dykljc', 
        form.current, 
        '5JKe1qVNR-WaT-Oz1'
      )
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const notify = () => toast("Wow so easy!", {
    theme: "dark",
  });

  return (
    <section id='contact' className='py-10 px-3 text-white'>
      <div className='text-center mt-8'>
        <h3 className=' text-4xl font-semibold'>
          Contact <span className=' text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Get in touch</p>

        <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800  p-6 rounded-lg mx-auto'>
          <form 
            action="" 
            className='flex flex-col flex-1 gap-5'
            ref={form}
            onSubmit={sendEmail}
          >
            <input type="text" placeholder='Your Name' name="user_name" required/>
            <input type="email" placeholder='Your Email Address' name="user_email" required/>
            <textarea id="" rows={10} placeholder='Your Message' name='message' required></textarea>
            <button 
              type='submit' 
              onClick={notify}  
              className='btn-primary w-fit' 
              value='Send'
            >
              Send Message
            </button>
            <ToastContainer />
          </form>
          <div className='flex flex-col gap-7'>
            {
              contactInfo.map((info, i) => (                
                  <div key={i} className='flex gap-4 w-fit items-center'>
                    <div className=' min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full'>
                      <ion-icon name={info.logo}></ion-icon>
                    </div>
                    <p className='text-base'>{info.text}</p>
                  </div>              
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact