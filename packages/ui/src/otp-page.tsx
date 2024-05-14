"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { AuthInputBox } from "./auth-input-box";
import axios from 'axios'


export const OtpPage = () => {

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("")
  const router = useRouter()

  const onSubmit = async () => {
      await axios.post('/api/otp', {
        phoneNumber: phone
      }, 
      {
        headers:{
          'Content-Type': 'application/json'
        }
      })
      
      router.push('/auth')
      
  }


  return <div className="">
    
      <div 
       className="flex flex-col gap-5 m-auto mt-28 h-[300px] min-w-3/12 w-4/12 p-5 rounded-lg shadow-lg bg-white ">

        <h1 className="m-auto font-extrabold text-6xl text-blue-900">PayZap</h1>

        <AuthInputBox label={'Phone Number'} type={'text'} setState={setPhone}></AuthInputBox>

        
          <button onClick={onSubmit} className="border-blue-900 text-blue-900 border bg-white rounded-3xl px-5 text-xl py-2 m-auto w-1/2 mt-2 font-semibold hover:bg-black hover:text-white">
          Add number</button>

        <p className={`text-center bg-red-300 rounded-lg text-md p-2 ${(error=="")? "hidden":"visible"}`}>{error}</p>

      </div>
    </div>
};
