import prisma from "@repo/database/client"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import { Account, User } from 'next-auth';

export const authOptions = {
    providers: [
      CredentialsProvider({
          name: 'Phone Number',
          credentials: {
            email: { label: "Email", type: "email", placeholder: "example@example.com" },
            password: { label: "Password", type: "password" }
          },
          
          // TODO: User credentials type from next-auth
          async authorize(credentials: any): Promise<any> {
            
            
            const existingUser = await prisma.user.findFirst({
                where: {
                    email: credentials?.email
                }
            });
            

            if (existingUser && existingUser.password) {
                const passwordValidation = await bcrypt.compare(credentials?.password, existingUser.password as string);
                if (passwordValidation) {
                    return existingUser
                }
                
            }
          }
          
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        
    ],
    
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            session.user.id = token.sub

            if(session.user.phone==null){
                const existingUser = await prisma.user.findFirst({
                    where: {
                        email: session.user.email as string
                    }
                })
                
                session.user.phone = existingUser?.number
            }
            

            return session
        },
        
        async signIn({user, account}: {user: User|null, account: Account|null}){
            if(account?.provider==='google'){
                
                const existingUser = await prisma.user.findFirst({
                    where: {
                        email: user?.email as string
                    }
                })
                
                if(!existingUser){
                    await prisma.user.create({
                        data:{
                            email: user?.email as string,
                            name: user?.name as string,
                        }
                    })
                }
            }
            return true;
        }
    
    },
    pages: {
        signIn: '/auth'
    }
  }
 