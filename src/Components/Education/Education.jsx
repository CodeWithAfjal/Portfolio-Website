import React from "react";
import { education } from "../../constant";

export const Education = () => {
  return (
    <section id="education"
     className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3">
      <div className="text-center  mb-16">
        <h3 className="text-4xl font-bold text-white">EDUCATION</h3>
        <div className="w-38 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className=" text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Educational Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Educational Data */}

        {education.map((edu, index) => (
          <div key={edu.id} className={` relative flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}>
            {/* Timeline Circle */}
            <div className="absolute  top-1/2 sm:left-1/2 left-0 transform -translate-x-1/2  bg-gray-400 border-4 border-[#8245ec] w-12 h-15 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:hidden">
              <img src={edu.img} alt={edu.school} className="w-full h-full object-cover rounded-full" />
            </div>

            {/* Educational Content */}
            <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>
              {/* FlexConatiner */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                  </div>
                  <p className="mt-4 text-gray-400 font-bold">{edu.date}</p>
                </div>
              </div>
              <p>{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
