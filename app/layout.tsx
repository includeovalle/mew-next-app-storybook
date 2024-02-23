import './styles/globals.scss'
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Header} from '@/app/components/Designs'
const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'] })

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
      <body className={`${inter.className} ${orbitron.className}`}>
        <Header />
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
