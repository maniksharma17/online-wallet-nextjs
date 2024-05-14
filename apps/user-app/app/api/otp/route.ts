import prisma from '@repo/database/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../lib/auth';


export const POST = async (req: Request) => {
    
        const { phoneNumber } = await req.json();

    
        const session = await getServerSession(authOptions)
        console.log(session)
        
        await prisma.user.update({
            data: {
                number: phoneNumber
            },
            where: {
                email: session?.user?.email as string,
            }
        })
        console.log(phoneNumber)
        return NextResponse.json({ message: phoneNumber });
        

}
