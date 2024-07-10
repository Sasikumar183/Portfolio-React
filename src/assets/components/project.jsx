import React, { useState } from 'react';
import myImage1 from '../image/project/crud.png';
import myImage2 from '../image/project/tasktrack.png';
import myImage3 from '../image/project/routex.png';
import myImage4 from '../image/project/gadgetgalaxy.png';

export const Project = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const skillsData = [
    {
      project: "Task Tracker",
      image: myImage2,
      description: "The Task Tracker website is a dynamic web application designed to help users manage their tasks efficiently. Built using HTML, CSS, and JavaScript, this project showcases the integration of front-end technologies to create an interactive and user-friendly experience.",
      github: "https://github.com/Sasikumar183/Task-Tracker"
    },
    {
      project: "Gadget Galaxy",
      image: myImage4,
      description: "Built Gadget Galaxy, an e-commerce platform for electronic gadgets, using HTML, CSS, and JavaScript. Designed a responsive frontend interface for intuitive product browsing and transactions.",
      github: "https://github.com/Sasikumar183/Gadget-Galaxy-Tailwind"
    },
    {
      project: "Routex",
      image: myImage3,
      description: "Created a college chatbot using Flask and Deep Learning technologies, enabling quick navigation for students and staff to locate departments and classes effortlessly.",
      github: "https://github.com/Sasikumar183/Routex"
    },
    {
      project: "InfoCraft",
      image: myImage1,
      description: "InfoCraft, powered by Flask, orchestrates seamless data operations, allowing users to effortlessly Create, Read, Update, and Delete information, providing a streamlined and responsive experience for efficient data management.",
      github: "https://github.com/Sasikumar183/Flask-Crud-App"
    }
  ];

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2><hr className='w-[80%] border-[2px] rounded mx-auto mb-10'/>
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide" data-aos="flip-up" data-aos-duration="1000">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-400 rounded-lg shadow p-6 cursor-pointer relative min-w-[385px]"
              onClick={() => toggleProject(index)}
            >
              <img src={skill.image} alt={skill.project} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-center">{skill.project}</h3>
              <div
                className={`absolute inset-0 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 p-6 transition-all duration-300 ease-in-out ${
                  expandedProject === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <p className="text-black mb-4" data-aos="zoom-in-left" data-aos-duration="1000">{skill.description}</p>
                <a
                  href={skill.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline flex justify-center items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.22-.252-4.555-1.11-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.27.098-2.645 0 0 .84-.27 2.75 1.026A9.554 9.554 0 0112 7.011c.85.004 1.705.115 2.506.337 1.91-1.296 2.749-1.026 2.749-1.026.546 1.374.202 2.392.1 2.645.64.699 1.028 1.594 1.028 2.686 0 3.842-2.338 4.688-4.565 4.936.359.31.678.923.678 1.86 0 1.343-.012 2.427-.012 2.755 0 .268.18.58.688.482A10.011 10.011 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge, and Firefox */
        .scrollbar-hide {
          -ms-overfl
          ow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      <span  id="contact"></span>
    </section>
  );
};
