import React from 'react'
import myImage from'../image/crossimage.jpg'
export const About = () => {
  return (
    <section  className='w-full bg-gray-900'>
        <h1 className='text-4xl text-center font-semibold text-white p-10'>About Me</h1><hr className='w-[80%] border-[2px] rounded mx-auto'/>
        <div className='flex flex-col space-x-9 text-white text-lg justify-center items-center md:flex-row'>
            <div className=' w-full md:w-[50%] p-10'data-aos="fade-right" data-aos-duration="1000">
                <p>I'm Sasikumar, an aspiring full-stack web developer with a strong passion 
            for creating dynamic and user-friendly web applications. I've gained hands-on 
            experience through various projects,showcasing my ability to transform ideas 
            into functional websites. My goal is to contribute to innovative web solutions
             and stay at the forefront of the dynamic field of web development. Eager to connect with 
             fellow developers and industry professionals, 
            I look forward to exploring exciting opportunities and sharing 
             insights in this ever-evolving tech landscape.</p>
            </div>
            <div className='p-5' >
                <img src={myImage} alt="" width={250} height={250} data-aos="fade-left" data-aos-duration="1000" className='flex items-center rounded-s-3xl border border-black shadow-md shadow-gray-200 mr-10 md:mr-0'/>
                <span id="skills"></span>
            </div>
        </div>
        
        
    </section>
  )
}
