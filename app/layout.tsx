import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedBackground } from "@/components/animated-background"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sankalp Sharma | Full-Stack Developer & Innovator",
  description: "Personal portfolio of Sankalp Sharma, a passionate Full-Stack Developer & Innovator",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  authors: [{ name: 'Sankalp Sharma' }],
  keywords: ['Developer', 'Full-Stack', 'Portfolio', 'React', 'Next.js'],
  openGraph: {
    title: 'Sankalp Sharma | Full-Stack Developer & Innovator',
    description: 'Personal portfolio of Sankalp Sharma, a passionate Full-Stack Developer & Innovator',
    type: 'website',
    siteName: 'Sankalp Sharma Portfolio'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}