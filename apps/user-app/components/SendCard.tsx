"use client"

import { useState } from "react"
import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/center"
import { InputBox } from "@repo/ui/input-box"
import makeP2pTransfer from "../app/lib/p2pTransfer"

export const SendCard = () => {
    const [ phone, setPhone ] = useState("")
    const [ amount, setAmount ] = useState(0)
    const [ message, setMessage ] = useState("")



    return <div className="w-1/2 m-auto mt-28">
            <Card title="Send Money">
                <InputBox type="text" placeholder="Phone Number" label="User" setState={setPhone}></InputBox>
                <InputBox type="number" placeholder="INR" label="Amount" setState={setAmount}></InputBox>
                <Center>
                    <button 
                    onClick={async ()=>{
                        const res = await makeP2pTransfer({amount, phone})
                        setMessage(res?.message as string)
                        alert(res?.message)
                        
                    }}
                    className="py-2 px-8 mt-5 rounded-full border-blue-900 border text-blue-900 font-semibold hover:bg-blue-900 hover:text-white">
                    Send Money
                    </button>
                    
                </Center>
                <p className="text-center mt-5">{message}</p>
            </Card>
        </div>
        
    
    
}