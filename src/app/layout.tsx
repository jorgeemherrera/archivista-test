'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navBar'
import logoImage from '../../public/EternalRecordsLogo.png'
import './globals.scss'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, seTheme] = useState()
  const changeThemeStatus = (state:any) =>{
    seTheme(state)
  } 
  return (
    <html lang="en">
      <body className={`${theme ?  "dark":"light"}`} suppressHydrationWarning>
        <NavBar
          image={logoImage}
          alt='alt'
          width={253}
          height={55}
          firstLink='Records'
          secondLink='Galleries'
          changeTheme={changeThemeStatus}
        />
        {children}
      </body>
    </html>
  )
}