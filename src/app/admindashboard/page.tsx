'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

export default function AdminDashboard() {
  //   const { data: session, status } = useSession()
  //     (status === 'loading') ? <div>Loading...</div> : null
  //       (!session || session.user.role !== 'admin') ? <div>Unauthorized</div> : null
  return (
    <div>
      Hello World
    </div>
  )
}

AdminDashboard.auth = {
  role: "admin",
  loading: 'Loading',
  unauthorized: "/login",
  redirectTo: "/admindashboard",
}