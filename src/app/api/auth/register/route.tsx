import { NextResponse } from "next/server";
import { z } from "zod";
import argon2 from 'argon2';
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  // should validate the entries
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(['admin', 'user']),
    name: z.string().min(2)
  });

  try {
    const userInput = await request.json();
    const user = schema.parse(userInput);
    const hashedPassword = await argon2.hash(user.password);

    const response = await sql`
      INSERT INTO users (email, password, role, name)
      VALUES (${user.email}, ${hashedPassword}, ${user.role}, ${user.name})
    `;
  } catch (err:any) {
    console.error(err.errors[0].message);
    throw new Error(err.errors.message); 
    
  }

  return NextResponse.json({ message: 'success' });
}
