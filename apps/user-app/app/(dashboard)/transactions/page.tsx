import prisma from "@repo/database/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { SentTransactions } from "../../../components/sentTransactions"
import { ReceivedTransactions } from "../../../components/receivedTransactions"


async function getSentTransactions(){
    const session = await getServerSession(authOptions)

    const sentTransactions = await prisma.p2pTransactions.findMany({
        where: {
            fromId: Number(session.user.id)
        }
    })

    return sentTransactions.map(t => ({
        amount: t.amount,
        toUserPhone: t.toUserPhone,
        time: t.time
    }))

}

async function getReceivedTransactions(){
    const session = await getServerSession(authOptions)

    const receivedTransactions = await prisma.p2pTransactions.findMany({
        where: {
            toId: Number(session.user.id)
        }
    })

    return receivedTransactions.map(t => ({
        amount: t.amount,
        fromUserPhone: t.fromUserPhone,
        time: t.time
    }))

}




export default async function(){
    const sentTransactions = await getSentTransactions()
    const receivedTransactions = await getReceivedTransactions()

    return <div className="m-auto w-1/2 mt-28">
        
        <SentTransactions sentTransactions={sentTransactions}></SentTransactions>
        <br></br>
        <ReceivedTransactions receivedTransactions={receivedTransactions}></ReceivedTransactions>
        
        
    </div>
}