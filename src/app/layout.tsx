import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header, Footer } from "@/features/layout/components"
import { ThemeProvider } from "@/providers/theme-provider"
import { MotionProvider } from "@/providers/motion-provider"
import { QueryProvider } from "@/providers/query-provider"
import { Toaster } from 'react-hot-toast';

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
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
            <MotionProvider>
              <div className="flex min-h-screen flex-col ">
                <Header />
                <main className="flex-1">{children}

                  <Footer />
                </main>

              </div>
              {modal}
              <Toaster />
            </MotionProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
