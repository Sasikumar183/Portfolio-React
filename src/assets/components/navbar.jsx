import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='flex justify-between items-center p-3 text-center bg-gray-950 text-white w-full h-20 sticky top-0 z-50'>
      <div>
        <a href="/" className='text-2xl font-semibold'>Portfolio</a>
      </div>
      <div className='hidden md:flex'>
        <ul className='flex space-x-6 no-underline'>
          <li><a href="#home" className='hover:underline hover:text-gray-400 underline-offset-8 transition-all duration-700 active:underline'>Home</a></li>
          <li><a href="#about" className='hover:underline hover:text-gray-400 underline-offset-8 transition-all duration-700'>About</a></li>
          <li><a href="#skills" className='hover:underline hover:text-gray-400 underline-offset-8 transition-all duration-700'>Skills</a></li>
          <li><a href="#projects" className='hover:underline hover:text-gray-400 underline-offset-8 transition-all duration-700'>Projects</a></li>
          <li><a href="#contact" className='hover:underline hover:text-gray-400 underline-offset-8 transition-all duration-700'>Contact</a></li>
        </ul>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-2xl'>
          {isOpen ? '✖' : '☰'} {/* Unicode characters for "X" and hamburger icon */}
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden absolute top-20 left-0 w-full bg-gray-950 backdrop-blur-0'>
          <ul className='flex flex-col items-center space-y-6 py-4'>
            <li><a href="#home" className='hover:underline hover:text-gray-400 underline-offset-8 transition-all duration-700' onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className='hover:underline hover:text-gray-400 underline-offset-8 transition-all duration-700' onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" className='hover:underline hover:text-gray-400 underline-offset-8 transition-all duration-700' onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className='hover:underline hover:text-gray-400 underline-offset-8 transition-all duration-700' onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className='hover:underline hover:text-gray-400 underline-offset-8 transition-all duration-700' onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
