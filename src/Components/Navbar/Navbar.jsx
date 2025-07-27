import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [activeSection,setActiveSection]=useState();
  const [isScrolled,SetIsScrolled]=useState(false);
 

  // check scroll and change navbar background
  useEffect(()=>{
    const handleScroll=()=>{
      SetIsScrolled(window.scrollY>50);
    };
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
    }, []);
 
//  smooth scroll function
  const handleMenuItemClick=(sectionId)=>{
    setActiveSection(sectionId);
    setIsOpen(false);
      const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const menuItems=[
    {id:"about", label:"About"},
    {id:"skills", label:"Skills"},
    {id:"experiance", label:"Experiance"},
    {id:"work", label:"Work"},
    {id:"education", label:"Education"},

  ];
  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px=[7vw] md:px-[7vw] lg:px-[20vw] ${
    isScrolled? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" :"bg-transparent"}`}>
      {/* This is my Head Logo */}
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer pl-4 md:pl-0 ">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Afjal</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Hayat</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* desktop MEnu */}
        <ul className=" hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((items)=>(
            <li key={items.id} className={`cursor-pointer hover:text-[#8245ec] ${
            activeSection===items.id?"text-[#8245ec]":""}`}>
              <button onClick={()=> handleMenuItemClick(items.id)}>
                {items.label}
              </button>

            </li>
          ))}
        </ul>
        {/* social media icons */}
         <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/codeWithAfjal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/afjalhayat2210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
                {/* Mobile Menu Icon */}
        <div className="md:hidden mr-4">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>   
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codeWithAfjal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/afjalhayat2210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>


      </div>
         )}
    </nav>
  );
};
export default Navbar;