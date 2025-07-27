import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import ProfileImage from '../../assets/profile2.jpg';



export const About = () => {
  return (
   <section
   id='about'
   className='py-4 px-[7vw] md:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-16'>
    <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
      {/* left side content */}
      <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
      {/* Intro */}
      <h1 className='text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-2 leading-tight'>
        Hi, I am
      </h1>
      <h2 className='text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight'>
        Afjal Hayat
      </h2>
      <h3 className='text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight '><span className='text-white'>I am a </span>
      <ReactTypingEffect
      text={[
        'Frontend Developer',
        'ReactJs Developer',
        'MERN Stack Developer',
      ]}
      speed={100}
      eraseSpeed={50}
      eraseDelay={2000}
      typingDelay={500}
      cursorRenderer={(cursor) => (
        <span  className='text-[#8245ec]'>{cursor}</span>
      )}
      >

      </ReactTypingEffect>
       </h3>
       <p className='text-[#514d58] text-base sm:text-lg mb-10 mt-10 leading-relaxed'>
        I'm a Front-End Developer with a strong foundation in building responsive, user-centric web applications using React, JavaScript, HTML/CSS, Tailwind CSS, and Bootstrap.With hands-on experience developing real-time projects, I focus on clean code, intuitive design, and performance-driven development. I enjoy transforming ideas into smooth, interactive digital experiences that deliver real value.
       </p>
       <a href="/CV/MyCV.pdf"
       target='_blank'
       className='text-white py-3 rounded-full px-8 inline-block text-lg font-bold transition duration-300 transform hover:scale-105'
        style={{
          background:'linear-gradient(90deg, #8245ec,#a855f7)',
          boxShadow:'0 0 2px #8245ec,0 0 2px #8245ec, 0 0 40px #8245ec',
        }}>
        Download CV </a>
      
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end ">
      <Tilt className='w-48 h-48 sm:w-64 sm:h-100 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.1}
            transitionSpeed={1000}
            gyroscope={true}>
         <img
          src={ProfileImage}
          alt="Afjal Hayat"
           className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
        />
      </Tilt>
      </div>
    </div>

   </section>
  )
}
