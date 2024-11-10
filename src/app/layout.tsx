// app/layout.js
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern Portfolio',
  description: 'Personal portfolio showcasing my work and skills',
}

export default function RootLayout({ children }:{children:any}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-50`}>
        <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-blue-500">
                AQ
              </Link>
              <div className="flex gap-8">
                <Link href="/" className="text-slate-50 hover:text-blue-500 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-slate-50 hover:text-blue-500 transition-colors font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-slate-50 hover:text-blue-500 transition-colors font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        
      </body>
    </html>
  )
}