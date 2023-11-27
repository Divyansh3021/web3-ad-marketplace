import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/app/theme_provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ads_MarketPlace',
  description: '/',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >{children}
          </ThemeProvider></body>
    </html>
  )
}
