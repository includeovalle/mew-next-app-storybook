import './styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, LeftMenu} from '@/app/components/Designs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mew game',
  description: 'juego de estrategia en línea',
  keywords: 'juego, estrategia, online, multijugador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <LeftMenu />
        {children}</body>
    </html>
  )
}
