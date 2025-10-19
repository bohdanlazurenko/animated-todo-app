import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Animated Todo App',
  description: 'A beautiful animated todo list application built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Animated Todo App</h1>
            <p className="text-gray-600">Manage your tasks with beautiful animations</p>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}