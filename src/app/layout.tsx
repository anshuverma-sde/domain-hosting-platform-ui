import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header, Footer } from "@/features/layout/components"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/providers/theme-provider"
import { MotionProvider } from "@/providers/motion-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DomainHost Pro - Domain Registration & Web Hosting",
  description: "Register domains and get reliable web hosting services with DomainHost Pro",
  keywords: "domain registration, web hosting, vps hosting, dedicated hosting, ssl certificates",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <MotionProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            {modal}
            <Toaster />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
