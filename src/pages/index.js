import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'
import Hero from 'components/Hero'
import Header from 'components/Header'
import {motion} from "framer-motion"
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [phone, setPhone] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = `https://3797-98-33-100-230.ngrok.io//conversation?Number=${phone}`;

    try {
      const response = await axios.get(url);
      console.log(response.data);
      setPhone("");
    } catch (error) {
      console.log(error);
    }
  };

const descriptions = [
  {
    Title: "Revolutionize Your Aftercare Process",
    Body: "A one of a kind, automated tool to enhance your aftercare progression."

  },
  {
    Title: "Seamless Communication",
    Body: "Our platform allows you to easily communicate with your healthcare provider via text message."

  },
  {
    Title: "A Flexible Medical Solution",
    Body: "Receive the best possible care and prioritize your health on your own terms."

  },
]

  return (
    <div className=' w-screen h-screen '>
       <header classname=" top-0 p-5 flex flex-row max-w-7xl mx-auto z-20 justify-center items-center align-middle">
        <div className='flex p-5 items-center justify-left md:justify-center '>
            <img 
              src="https://personal-website-2022.s3.us-west-2.amazonaws.com/Screen_Shot_2023-02-18_at_1.43.21_PM-removebg-preview+(1).png"
              className='w-[70px] h-[70px] flex'
            />
            
            <h1 className='font-bold font-inter flex text-[20px]'>
                AfterAware
            </h1>
          </div>
      </header>

      <div className="w-full h-full align-middle md:mt-[10%]  mt-[30%] flex">
            
            <div className="w-[80%] md:w-[70%] mx-auto align-middle flex flex-col">
              <h1 className="font-bold text-[#3375F2] drop-shadow-lg md:text-[60px] text-[40px] items-left  lg:justify-left md:justify-left justify-left  md:text-center text-left flex z-0  content-left md:leading-[65px] leading-[45px]">
                 Streamline medical aftercare with easy text check-ins.
              </h1>
              <p className=" mt-[3%]  md:justify-center justify-center lg:text-center md:text-center text-left font-Amiri font-regular md:items-center  lg:text-[20px] md:text-[10px] text-[15px]">
                Seamlessly connect with your healthcare provider for a streamlined experience.
              </p>
            <div className='xl:mt-[5%] lg:mt-[5%] md:mt-[5%] mt-[12%] lg:justify-left md:justify-center justify-left lg:text-left md:text-left text-left flex flex-row'>
            <form onSubmit={handleSubmit} className='flex flex-row'>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setPhone}
                  defaultCountry="US"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full"
                />
                <button
                type="submit"
                className=' bg-[#3375F2] ml-[5%] pt-1 pb-1 pl-3 pr-3 rounded-xl text-white font-bold shadow-2xl hover:cursor-grab hover:bg-black hover:text-white '>
                  Start
                </button>
              </form>
              </div>
              <p className=" flex lg:justify-left md:justify-center justify-left lg:text-left md:text-left text-left font-light font-Inter text-[#706D6D] lg:text-[13px] md:text-[13px] text-[9px] lg:mt-[2%] md:mt-[2%] mt-[5%]">
                Enter your phone number to recieve a text from your healthcare provider
              </p>

          <div className='mt-[5%] text-left md:text-center md:items-center md:justify-center '>
            <img 
              src="https://personal-website-2022.s3.us-west-2.amazonaws.com/AfterAwareMockFront.png"
              className='w-[100%] h-[300px] md:w-[100%] md:h-[50%] drop-shadow-xl hidden md:flex  align-middle mx-auto'
            />
            <div className=''>
              <h1 className='text-[25px] font-semibold md:text-[40px] mt-[15%] md:mt-[5%] drop-shadow-xl'>
              Maximize Your Health Recovery With Our Workflow Solutions.
              </h1>
            </div>
            <div className='flex items-left justify-left flex-col md:flex-row mt-[10%] md:mt-[0%] mb-[20%]'>
              {descriptions.map((description, i) => (
                <div key={i} className=" mt-[5%] pl-0 md:ml-2 md:mr-2 bg-gray-200 rounded-xl drop-shadow-xl"> 
                  <h1 className='font-bold p-4'>{description.Title}</h1>
                  <p className='font-regular text-[13px] pl-3 pr-3 pb-4'>{description.Body}</p>
                </div>
              ))}
            </div>
          </div>


            </div>
          </div>
    </div>
  )
}
