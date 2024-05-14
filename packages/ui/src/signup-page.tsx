"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import axios from 'axios'
import { AuthInputBox } from "./auth-input-box";


export const SignupPage = () => {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");


  const onSubmit = async () => {
    const res = await axios.post('/api/user', {
      name: name,
      email: email,
      password: password,
      number: phone
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(res.data.error) setError(res.data.message)
    else router.push('/auth')
}

  const onGoogleSignup = () => {
    signIn('google', {callbackUrl: '/otp'}).then(()=>{
    router.push('/otp')
    }); 
}

  return <>
    
      <div 
       className="flex flex-col gap-2 m-auto mt-28 min-w-3/12 w-4/12 p-5 shadow-lg rounded-lg bg-white">

        <h1 className="m-auto font-extrabold text-6xl text-blue-900">PayZap</h1>

        <AuthInputBox label={'Name'} type={'name'} setState={setName}></AuthInputBox>
        <AuthInputBox label={'Email'} type={'email'} setState={setEmail}></AuthInputBox>
        <AuthInputBox label={'Password'} type={'password'} setState={setPassword}></AuthInputBox>
        <AuthInputBox label={'Phone Number'} type={'text'} setState={setPhone}></AuthInputBox>


        <div className="flex flex-row justify-evenly content-center items-center mt-2">
          <button
          onClick={onSubmit} className="bg-blue-900 text-white rounded-3xl px-5 text-xl py-2 m-auto w-full font-semibold hover:bg-black hover:text-white">
          Create Account</button>
          
          <button
          onClick={onGoogleSignup} className="border-blue-900 border text-black bg-white rounded-3xl text-md py-2 w-full m-auto hover:bg-black hover:text-white">
          Join with <svg className="inline align-middle ml-1" xmlns="http://www.w3.org/2000/svg" width="60" height="20" viewBox="0 0 596 194.5" id="google"><path fill="#3780ff" d="M73.4 0h5.3c18.4.4 36.5 7.8 49.5 20.9-4.8 4.9-9.7 9.6-14.4 14.5-7.3-6.6-16.1-11.7-25.7-13.5-14.2-3-29.5-.3-41.4 7.8C33.7 38.2 24.9 52.6 23 68c-2.1 15.2 2.2 31.2 12.1 43 9.5 11.5 24 18.7 39 19.2 14 .8 28.6-3.5 38.8-13.3 8-6.9 11.7-17.4 12.9-27.6-16.6 0-33.2.1-49.8 0V68.7h69.9c3.6 22.1-1.6 47-18.4 62.8-11.2 11.2-26.7 17.8-42.5 19.1-15.3 1.5-31.1-1.4-44.7-8.8C24 133.1 11 118.4 4.6 101.1c-6-15.9-6.1-33.9-.5-49.9C9.2 36.6 19 23.7 31.6 14.7 43.7 5.8 58.4.9 73.4 0z"></path><path fill="#38b137" d="M474.4 5.2h21.4V148c-7.1 0-14.3.1-21.4-.1.1-47.5 0-95.1 0-142.7z"></path><path fill="#fa3913" d="M193.5 54.7c13.2-2.5 27.5.3 38.4 8.2 9.9 7 16.8 18 18.9 30 2.7 13.9-.7 29.1-9.7 40.1-9.7 12.3-25.6 18.9-41.1 17.9-14.2-.8-28-7.9-36.4-19.5-9.5-12.8-11.8-30.4-6.6-45.4 5.2-16.1 19.9-28.4 36.5-31.3m3 19c-5.4 1.4-10.4 4.5-14 8.9-9.7 11.6-9.1 30.5 1.6 41.3 6.1 6.2 15.3 9.1 23.8 7.4 7.9-1.4 14.8-6.7 18.6-13.7 6.6-11.9 4.7-28.3-5.4-37.6-6.5-6-16-8.5-24.6-6.3z"></path><path fill="#fcbd06" d="M299.5 54.7c15.1-2.9 31.6 1.3 42.9 11.9 18.4 16.5 20.4 47.4 4.7 66.4-9.5 12-24.9 18.6-40.1 17.9-14.5-.4-28.8-7.6-37.4-19.5-9.7-13.1-11.8-31.1-6.3-46.4 5.5-15.6 19.9-27.5 36.2-30.3m3 19c-5.4 1.4-10.4 4.5-14 8.8-9.6 11.4-9.2 30 1.1 40.9 6.1 6.5 15.6 9.7 24.4 7.9 7.8-1.5 14.8-6.7 18.6-13.7 6.5-12 4.6-28.4-5.6-37.7-6.5-6-16-8.4-24.5-6.2z"></path><path fill="#3780ff" d="M389.4 60.5c11.5-7.2 26.8-9.2 39.2-3 3.9 1.7 7.1 4.6 10.2 7.5.1-2.7 0-5.5.1-8.3 6.7.1 13.4 0 20.2.1V145c-.1 13.3-3.5 27.4-13.1 37.1-10.5 10.7-26.6 14-41.1 11.8-15.5-2.3-29-13.6-35-27.9 6-2.9 12.3-5.2 18.5-7.9 3.5 8.2 10.6 15.2 19.5 16.8 8.9 1.6 19.2-.6 25-8 6.2-7.6 6.2-18 5.9-27.3-4.6 4.5-9.9 8.5-16.3 10-13.9 3.9-29.2-.9-39.9-10.3-10.8-9.4-17.2-23.9-16.6-38.3.3-16.3 9.5-32 23.4-40.5m20.7 12.8c-6.1 1-11.8 4.4-15.7 9.1-9.4 11.2-9.4 29.1.1 40.1 5.4 6.5 14.1 10.1 22.5 9.2 7.9-.8 15.2-5.8 19.1-12.7 6.6-11.7 5.5-27.6-3.4-37.8-5.5-6.3-14.3-9.4-22.6-7.9z"></path><path fill="#fa3913" d="M521.5 65.6c12-11.2 30.5-15 45.9-9.1C582 62 591.3 75.9 596 90.2c-21.7 9-43.3 17.9-65 26.9 3 5.7 7.6 10.9 13.8 13 8.7 3.1 19.1 2 26.4-3.8 2.9-2.2 5.2-5.1 7.4-7.9 5.5 3.7 11 7.3 16.5 11-7.8 11.7-20.9 19.9-35 21.2-15.6 1.9-32.2-4.1-42.3-16.3-16.6-19.2-15-51.4 3.7-68.7m10.7 18.5c-3.4 4.9-4.8 10.9-4.7 16.8 14.5-6 29-12 43.5-18.1-2.4-5.6-8.2-9-14.1-9.9-9.5-1.7-19.4 3.4-24.7 11.2z"></path></svg>
          </button>

        </div>

        <p className={`text-center p-1 bg-red-200 rounded-lg text-sm ${(error=="")? "hidden":"visible"}`}>{error}</p>

        <p className="m-auto">Already have an account?<br></br>
        <Link href={'/auth'} className="text-blue-900 font-bold">Click here to Sign in.</Link></p>
        
      </div>
    </>
};
