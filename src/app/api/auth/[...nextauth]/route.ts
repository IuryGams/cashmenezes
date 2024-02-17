import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import InstagramProvider from "next-auth/providers/instagram";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();

const AuthOptions = {
    // pages: {
    //     signIn: "./"
    // },
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        InstagramProvider({
            clientId: process.env.INSTAGRAM_CLIENT_ID,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        }),
        // CredentialsProvider({
        //     name: "credentials",
        //     credentials: {
        //         email: { label: "Email", type:"email"},
        //         password: {label: "Senha", type:"password"}
        //     },
        //     async authorize(credentials) {
        //         const response = await prisma.user.create({
        //             data:{
        //                 email: credentials?.email,
        //                 password: credentials?.password
        //             }
        //         })
        //         console.log(response);

        //         if(response) {
        //             return response
        //         }
        //         return null;
        //     },
        // })
    ],
    secret: process.env.NEXTAUTH_SECRET,

} satisfies NextAuthOptions

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }