
'use client'
import { SessionProvider } from 'next-auth/react'

export default function Home({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
