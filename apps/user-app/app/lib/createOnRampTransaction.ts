"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "./auth"
import prisma from "@repo/database/client"

interface OnRampTransactionType{
    provider: string|undefined,
    amount: number
}

export async function createOnRampTransaction({provider, amount}: OnRampTransactionType){
    const session = await getServerSession(authOptions)

    if(!session.user.id){
        return {message: "Unauthenticated Request"}
    }

    const token = Math.floor(Math.random()*100000)

    try{
        const txn = await prisma.onRampTransaction.create({
            data: {
                userId: Number(session.user.id),
                amount: amount * 100,
                token: token.toString(),
                provider: provider as string,
                status: 'Processing',
                startTime: new Date()
            }
        })
        console.log(txn)
    } catch(e){
        console.log(e)
    }
    
    
    return {message: "Transaction done"}
}