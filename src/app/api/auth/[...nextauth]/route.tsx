import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import {sql} from '@vercel/postgres'
import argon2 from 'argon2'

const handler =NextAuth({
  session:{
    strategy:'jwt',
    },
    pages:{
      signIn:'/login',
    },
    providers:[
        CredentialsProvider({
            credentials: {
                email: { },
                password: { }
            },

            async authorize(credentials, req) {
              try{

                const schema = z.object({
                  email: z.string().email(),
                  password: z.string().min(6),
              });
               
              const response = await sql`
              SELECT * FROM users WHERE email =${credentials?.email}`
              const user = response.rows[0]
              const passwordMatch = await argon2.verify(user.password, credentials?.password||'')
              
              
              if(passwordMatch){
                
                return {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  role: user.role
                }
                
              } else {
                throw new Error('Invalid email or password')
              }              
            } catch (error) {
              console.error('Error during authorization', error)
              
              return null
          }
        }
          }
        )
             
    ]
})

export {handler as GET, handler as POST}
