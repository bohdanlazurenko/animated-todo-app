import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Animated Todo App',
  description: 'A beautiful animated todo application built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        {children}
      </body>
    </html>
  )
}