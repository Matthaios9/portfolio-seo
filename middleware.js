import { NextRequest, NextResponse } from 'next/server'
import middleware from 'next-auth/middleware'

export default middleware
export const config = {
    //* for zero or more params
    // + one or more params
    //  ? zero or one param 
    mather: [
        '/profile/:id*',
        '/dashboard/:id*',
    ]
}