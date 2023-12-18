'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function Logout() {
  return (
    <button type='button' onClick={()=>{signOut()}}>
        Logout
    </button>
  )
}
