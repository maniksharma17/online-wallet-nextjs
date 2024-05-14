"use server"

import prisma from "@repo/database/client"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth"


export default async function makeP2pTransfer({amount, phone}: {amount: number, phone: string}){
    const person = await prisma.user.findFirst({
        where: {
            number: phone
        }
    })
    const session = await getServerSession(authOptions)

    if(!person){
        return {message: "User does not exist."}
    }
    console.log({person})
    console.log(session.user)
    try{
        await prisma.$transaction(async (tx)=>{
            await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(session.user.id)} FOR UPDATE`;

            const fromBalance = await tx.balance.findUnique({
                where: { userId: Number(session.user.id) }
            })
            
            if(fromBalance && fromBalance?.amount/100 < amount){
                throw new Error("Insufficient balance")
            }
                
            
                

            await tx.balance.update({
                where: {
                    userId: Number(person.id)
                },
                data: {
                    amount:{
                        increment: amount*100
                    }
                }
            })
    
            await tx.balance.update({
                where: {
                    userId: Number(session.user.id)
                },
                data: {
                    amount:{
                        decrement: amount*100
                    }
                }
            })

            await tx.p2pTransactions.create({
                data: {
                    fromId: Number(session.user.id),
                    toId: Number(person.id),
                    amount: amount*100,
                    time: new Date(),
                    toUserPhone: phone,
                    fromUserPhone: session.user.phone
                }
                
            })
        
        })
        
        return {message: "Transaction Completed."}
    } catch(e: any){
        return ({message: e.message})
    }
    

}