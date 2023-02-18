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
    console.log(phone)
    const data = {
      records: [
        {
          fields: {
            Name: phone,
          },
        },
      ],
    };
    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/app8OPfKOwre37OSg/teams`,
        data,
        {
          headers: {
            Authorization: `Bearer keyiBU3kbqq2MMpOC`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setPhone("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=' w-screen h-screen'>
       <header classname=" top-0 p-5 flex flex-row max-w-7xl mx-auto z-20 justify-center items-center align-middle">
       <div className="flex ">
            <h1 className='font-bold font-inter p-5 text-[20px]'>
                AfterAware
            </h1>
        </div>
      </header>

      <div className="w-full h-full align-middle  mt-[40%] flex">
            
            <div className="w-[80%] mx-auto align-middle flex flex-col">
              <h1 className="font-bold text-[#3375F2] xl:text-[100px] lg:text-[90px] md:text-[80px] text-[30px] items-left lg:justify-left md:justify-left justify-left lg:text-left md:text-left text-left flex z-0  content-left ">
                 Streamline medical aftercare with easy text check-ins.
              </h1>
              <p className=" mt-[10px] lg:justify-left md:justify-left justify-center lg:text-left md:text-left text-left font-Amiri font-regular xl:text-[60px] lg:text-[30px] md:text-[10px] text-[15px]">
                Seamlessly connect with your healthcare provider for a streamlined experience.
              </p>
            <div className='xl:mt-[5%] lg:mt-[7%] md:mt-[7%] mt-[12%] lg:justify-left md:justify-left justify-center lg:text-left md:text-left text-left flex flex-row'>
            <form onSubmit={handleSubmit}>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setPhone}
                  defaultCountry="US"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full"
                />
                <button
                type="submit"
                className=' bg-[#3375F2] pt-2 pb-2 pl-3 pr-3 rounded-xl text-white font-bold shadow-2xl hover:cursor-grab hover:bg-black hover:text-white '>
                  Start
                </button>
              </form>
              </div>
              <p className="lg:justify-left md:justify-left justify-center lg:text-left md:text-left text-left font-light font-Inter text-[#706D6D] lg:text-[13px] md:text-[13px] text-[9px] lg:mt-[2%] md:mt-[2%] mt-[5%]">
                Disclaimer: This is only an initial screening and should NOT be interpreted as an official diagnosis. 
              </p>

            </div>
          </div>
    </div>
  )
}
