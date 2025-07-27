import React, { useRef ,useState } from "react";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

export const Contact = () => {

  const form=useRef();
  const [,SetIsSent]=useState(false);

  const SendEmail = (e) =>{
    e.preventDefault();
    

    emailjs
    .sendForm(
      "service_s91tvb9",
      "template_uh37aht",
      form.current,
      "HemdBIM92FHrTC3s3"
    )
    .then(
      ()=>{
        SetIsSent(true);
        form.current.reset();
        toast.success("Message sent succesfully ! ✅",{
          position:'top-right',
          autoClose:3000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          theme:"dark",
        });
      },
      (error)=>{
        console.log("Error sending message:",error);
        toast.error("Failed to send message. Please try again",{
           position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",

        })
      }
    )
  }
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
   <ToastContainer/>

      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-white text-4xl font-bold">CONTACT</h3>
        <div className="h-1 w-35 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 font-semibold text-lg">
          Say hello — I’m just a message away
        </p>
      </div>

      {/* Contact Form */}
      <div className="border border-gray-700 mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg font-sans">
        <h3 className="text-xl font-semibold text-white text-center">Connect With Me <span className="ml-1">🚀</span></h3>
        <form ref={form} onSubmit={SendEmail}  className="mt-4 flex flex-col space-y-4">
          <input type="email" name="user_email" placeholder="Your Email" required className=" pl-2  h-10 w-full rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
          <input type="text"  name="user_name" placeholder="Your Name" required className=" pl-2  h-10 w-full rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"/>
          <input type="text" name="subject" placeholder="Subject" required className=" pl-2  h-10 w-full rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
          <textarea name="message" placeholder="Message" className=" pl-2  h-28 pt-2  w-full rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" ></textarea>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition">Send</button>
        </form>
      </div>
    
    </section>

  );
};
export default Contact
