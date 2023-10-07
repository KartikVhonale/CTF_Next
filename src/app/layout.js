import PointsProvider, { PointsData, Points_data } from './context/PointsContext'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aarhant CTF',
  description: 'Capture the Flag in Arahant',
}

export default function RootLayout({ children }) {
    
  return (
    <html lang="en">
      <body className={inter.className}>
          <PointsProvider>
          {children}
          </PointsProvider>
      </body>
    </html>
  )
}
