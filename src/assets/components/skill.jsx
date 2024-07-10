import React from 'react';


const skillsData=[
  {
    "name": "HTML",
    "percentage": 90,
    "icon": "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
  },
  {
    "name": "CSS",
    "percentage": 80,
    "icon": "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png"
  },
  {
    "name": "JavaScript",
    "percentage":70,
    "icon": "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
  },
  {
    "name": "Tailwind CSS",
    "percentage": 80,
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s"
  },
  {
    "name": "React",
    "percentage": 65,
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
  },
  {
    "name": "Python",
    "percentage": 75,
    "icon": "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"
  },
  {
    "name": "SQL",
    "percentage": 65,
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vNnMstq9Wr3KnHb2EIH8gQIIRB5aZcfVzw&s"
  }
]

export const Skill = () => {
  return (
    <section className="w-full bg-gray-800 text-gray-900 py-12 overflow-hidden" >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">My Skills</h2><hr className='w-[80%] border-[2px] rounded mx-auto mb-10'/>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-200 rounded-lg shadow p-6 flex items-center" data-aos="flip-left" data-aos-duration="1000">
              <img src={skill.icon} alt={`${skill.name} icon`} className="w-12 h-12 mr-4" />
              <div className="flex-1">
                <h3 className="text-md md;text-xl font-semibold overflow-hidden">{skill.name}</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div
                      style={{ width: `${skill.percentage}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
                <p>{skill.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span id='projects'></span>
    </section>
  );
};
