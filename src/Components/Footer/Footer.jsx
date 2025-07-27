import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const handleScroll=(sectionId)=>{
    const section=document.getElementById(sectionId);
    if (section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
   <footer
   className='text-white py-8 px-[12vw] md:px-[7vw] lg:-[20vw]'>
    <div className='text-center mx-auto container'>
      <h3 className='text-purple-600 font-semibold text-xl'>
        Afjal Hayat
      </h3>
      <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
        {[
           { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Work", id: "work" },
            { name: "Education", id: "education" },

        ].map((items,index)=>(
          <button
          key={index}
          onClick={()=> handleScroll(items.id)}
          className='hover:text-purple-500 text-sm sm:text-base my-1'
          >
            {items.name}

          </button>
        ))}
      </nav>
        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100013545570299/" },
         
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/afjalhayat2210" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/_afjalhayat_22/" },
            
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Afjal Hayat. All rights reserved.
        </p>
    </div>
    
   </footer>
  )
}
