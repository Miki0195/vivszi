import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Egy Különleges Üzenet',
  description: 'Valami különleges számodra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  )
}

