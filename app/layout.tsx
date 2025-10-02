import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ScalingOpt - Optimization at Scale',
  description: 'A comprehensive platform for scaling optimization algorithms - discover, compare, and contribute to cutting-edge optimizers for large-scale machine learning.',
  keywords: ['machine learning', 'optimizers', 'scaling', 'deep learning', 'SGD', 'Adam', 'large-scale'],
  authors: [{ name: 'ScalingOpt Team' }],
  openGraph: {
    title: 'ScalingOpt - Optimization at Scale',
    description: 'Discover and explore cutting-edge optimization algorithms for large-scale machine learning',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScalingOpt - Optimization at Scale',
    description: 'Discover and explore cutting-edge optimization algorithms for large-scale machine learning',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
