import { NextResponse } from "next/server";
import userSchema from "@repo/validation/validation";
import prisma from "@repo/database/client";
import { hash } from "bcrypt";

export const POST = async (req: Request) => {
    
    const userData = await req.json()
    const parsedData = userSchema.safeParse(userData)

    if(!parsedData.success){
        return NextResponse.json({message: "Invalid Email or Password", error: true})
    }

    const existingUser = await prisma.user.findFirst({
        where: {
            email: userData.name 
        }
    })

    const hashedPassword = await hash(userData.password, 10)

    try{
        if(!existingUser){
            await prisma.user.create({
                data: {
                    name: userData.name,
                    email: userData.email,
                    password: hashedPassword,
                    number: userData.number,
                    Balance: {
                        create: {
                            amount: 0,
                            locked: 0
                        } 
                    }
                }
            })
    
            return NextResponse.json({message: "Created Account", error: false})
        }
    }catch (e){
        return NextResponse.json({message: "User already exists", error: true})
    }
    
}

