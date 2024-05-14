"use client"
import Link from 'next/link'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

interface AppBarProps{
  user?:{
    name?: string|null
  },
  signIn: any,
  signOut: any
}



export const AppBar = ({user, signIn, signOut}: AppBarProps) => {
  const session: any = useSession();
  const router = useRouter()
  return (
    <div className="flex flex-row justify-between px-24 py-4 z-50 border fixed top-0 w-full bg-white shadow">
      <h1 className="text-5xl font-extrabold text-blue-900">PayZap</h1>

      <div className="flex gap-5 flex-row">

        <Link href={'/otp'}><button className={`bg-white border-blue-900 border h-full rounded-3xl px-5 py-0 m-0 text-md hover:bg-blue-900 hover:text-white ${(session.data?.user?.phone == null && session.status==='authenticated')? "visible":"hidden"}`}>
        + Add Phone</button>
        </Link>

        <button onClick={user? ()=>{
          signOut({redirect: false})
          router.push('/')
          }:()=>signIn()} className="bg-white border-blue-900 text-blue-900 border rounded-3xl px-8 m-0 text-lg font-semibold hover:bg-blue-900 hover:text-white">
        {user? "Logout" : "Login"}
        </button>

        <Link href={'/signup'}>
          <button className="bg-blue-900 text-white rounded-3xl px-5 m-0 h-full text-lg font-semibold hover:bg-blue-800">
            Register
          </button>
        </Link>
      </div>
      
    </div>
  );
};
