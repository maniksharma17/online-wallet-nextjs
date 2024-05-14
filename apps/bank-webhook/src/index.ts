import express from "express"
import prisma from "@repo/database/client"

const app = express();
app.use(express.json())

interface paymentInfoType{
    token: string,
    userId: string,
    amount: number
}

app.post("/hdfcWebhook", async (req, res) => {
    //TODO: Add zod validation here?
    console.log("WEBHOOK");
    const paymentInformation: paymentInfoType = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    
    const txn = await prisma.onRampTransaction.findFirst({
        where: {
            token: paymentInformation.token
        }
    })

    if(txn?.status!='Processing'){
        res.json({message: "Already done."})
    }

    
    // Update balance in db, add txn
    try{
        await prisma.$transaction([
            prisma.balance.update({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),

            prisma.onRampTransaction.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success"
                }
            })
        ])

        res.json({message: "Captured"})
    } catch(e){
        
        res.status(411).json({message: e})
    }
})

app.listen(3003, ()=>{
    console.log("Bank webhook running on 3003")
})