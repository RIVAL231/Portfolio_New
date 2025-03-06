import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedBackground } from "@/components/animated-background"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sankalp Sharma | Full-Stack Developer, Innovator & Problem-Solver",
  description:
    "Welcome to the portfolio of Sankalp Sharma, a passionate Full-Stack Developer, Cloud Enthusiast, and Innovator with expertise in Next.js, React, Node.js, and DevOps.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  authors: [{ name: "Sankalp Sharma" }],
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "DevOps",
    "Docker",
    "Cloud Computing",
    "Web Development",
    "Portfolio",
    "Innovation",
    "Sankalp Sharma",
  ],
  openGraph: {
    title: "Sankalp Sharma | Full-Stack Developer, Innovator & Problem-Solver",
    description:
      "Explore the work and projects of Sankalp Sharma, an experienced full-stack developer specializing in scalable applications, cloud infrastructure, and modern web technologies.",
    type: "website",
    url: "https://sankalpsharma.me", // Update with your actual URL
    siteName: "Sankalp Sharma Portfolio",
    images: [
      {
        url: "/og-image.png", // Update with your OpenGraph image
        width: 1200,
        height: 630,
        alt: "Sankalp Sharma Portfolio",
      },
    ],
    locale: "en_US",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://sankalpsharma.me", // Ensure this matches your actual domain
  },
};


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
          {/* CustomCursor only renders on non-mobile devices */}
          <div className="hidden md:block">
            <CustomCursor />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}