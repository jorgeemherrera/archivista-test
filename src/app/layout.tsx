import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navBar'
import RecordList from './components/RecordList'
import logoImage from '../../public/EternalRecordsLogo.png'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar
          image={logoImage}
          alt='alt'
          width={253}
          height={55}
          firstLink='Records'
          secondLink='Galleries'
        />
        {children}
        {/* <RecordList></RecordList> */}
      </body>
    </html>
  )
}
