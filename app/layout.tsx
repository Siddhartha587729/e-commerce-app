import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import ProvideUs from './components/Provideus'
import ShoppingCartModal from './components/ShoppingCartModel'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Art Gallery',
  description: 'Buy your favourite colors and paint the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvideUs>
          <Navbar />
          <ShoppingCartModal/>
          {children}
        </ProvideUs>
      </body>
    </html>
  )
}
