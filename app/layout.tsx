import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CreatorPay - Payment Consolidation for Creators',
  description: 'Consolidate payments from multiple creator platforms into one unified dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
