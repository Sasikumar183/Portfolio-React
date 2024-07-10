import React from 'react';
import myImage from '../image/myimage.jpg';

export const Hero = () => {
  return (
    <section className="w-full bg-gray-800 text-white flex flex-col md:flex-row justify-center items-center p-3 h-[110vh] md:h-[80vh]">
      <div className="md:w-1/2 flex justify-center items-center z-10">
        <img src={myImage} alt="Sasikumar" className="w-[50%] lg:w-[40%] md:w-[40%] rounded-lg shadow-lg  shadow-black" data-aos="fade-right" data-aos-duration="1000" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:text-left" data-aos="flip-down" data-aos-duration="1000">
        <h1 className="mt-10 text-4xl md:text-5xl font-bold mb-">Hello, I'm Sasikumar</h1>
        <h2 className="text-3xl font-semibold mb-4 p-2">Full Stack Developer</h2>
        <p className="text-lg mb-6">
          I'm a passionate full-stack developer with experience in building dynamic and responsive web applications.
          I enjoy working with modern technologies and continuously improving my skills to stay current with industry trends.
        </p>
        <a href="#contact" id="about" className="px-6 py-3 bg-white text-black rounded-xl shadow-sm shadow-black hover:bg-gray-200">
          Get in Touch
        </a>
      </div>
    </section>
  );
};
