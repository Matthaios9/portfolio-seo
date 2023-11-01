import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/client";
import bcrypt from 'bcryptjs'
import { PrismaAdapter } from "@next-auth/prisma-adapter";



const authOptions = {
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async jwt({ token, user }) {
            //   ADMIN,LEADER , OFFICER
            if (user) {
                user.role = ((user?.isAdmin == 0) || (user?.isAdmin == null)) ? 'user' : 'admin';
                token.user = user
            }
            return token
        },
        async session({
            session,
            token,
            user,
        }) {
            session.user = token.user;
            return session;
        },
    },
    providers: [
        // CredentialsProvider({
        //     name: 'Credential',
        //     credentials: {
        //         email: { label: 'Email', type: 'email', placeholder: 'Email' },
        //         password: { label: 'Password', type: 'password', placeholder: 'Password' }
        //     },
        //     async authorize(credentials, req) {
        //         if (!credentials.email || !credentials.password) return null;
        //         const user = await prisma.user.findUnique({
        //             where: { email: credentials.email }
        //         })
        //         if (!user) return null;
        //         const passwordMatch = await bcrypt.compare(credentials.password, user.hasedPassword);

        //         return passwordMatch ? user : null;
        //     }
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: 'jwt'
    }
}


export default authOptions