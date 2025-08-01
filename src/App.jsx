import React from 'react'
// import './App.css'
import './index.css'
import { About } from './Components/About/About'
import { Contact } from './Components/Contact/Contact'
import { Education } from './Components/Education/Education'
import { Experiance } from './Components/Experiance/Experiance'
import { Footer } from './Components/Footer/Footer'
import { Navbar } from './Components/Navbar/Navbar'
import { Skills } from './Components/Skills/Skills'
import BlurBlob from './BlurBlob'
import Work from './Components/Work/Work'

function App() {
  

  return (
    
   <div className='bg-[#050414]'>
    <BlurBlob position={{top:'30%' , left:'20%'}} size={{width:'30%',height:'40%'}}></BlurBlob>
    
     <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experiance/>
        <Work />
        <Education />
        <Contact />
        <Footer />
        
      </div>

    </div>
 
   
  )
}

export default App
