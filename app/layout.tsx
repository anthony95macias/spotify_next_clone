// 'use client'
import './globals.css'
import { Figtree } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import SupabaseProvider from "@/providers/SupabaseProvider"

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spiotify Clone',
  description: 'Enjoy Great Music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font .className}>
          <SupabaseProvider>
            <Sidebar>
              {children}
            </Sidebar>
          </SupabaseProvider>
        </body>
    </html>
  )
}
