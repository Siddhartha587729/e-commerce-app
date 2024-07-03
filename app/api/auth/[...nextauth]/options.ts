import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions={
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Creadentials",
            credentials:{
                username: {
                    label: "UserName:",
                    type: "text",
                    placehholder: "Your Username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Your Password"
                },
            },
            async authorize(credentials){
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", name: "sid", password: "sid123" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        }),
    ],
    pages: {
        signIn: '/auth/signin',   
    }
}