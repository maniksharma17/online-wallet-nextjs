
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from './lib/auth'
import { Session } from 'inspector'

export async function middleware() {
    const session = await getServerSession(authOptions)
    
    if(session.status==='authenticated'){
        return NextResponse.next()
    }
  
    return NextResponse.redirect('/auth')
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard',
}