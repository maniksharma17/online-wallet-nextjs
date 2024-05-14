"use client"
import { AppBar } from "@repo/ui/app-bar";
import { HomeDesign } from "@repo/ui/home-design";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page(): JSX.Element {
  const session: any = useSession()
  console.log(session);

  if(session.status==='authenticated'){
    redirect('/dashboard')
  }
  
  return <>
    <AppBar signIn={signIn} signOut={signOut} user={session.data?.user}></AppBar>
    <HomeDesign></HomeDesign>
    
  </>
}
