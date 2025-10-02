'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Github, BookOpen, BarChart3, Users, FileText, GraduationCap } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Optimizers', href: '/optimizers', icon: Search },
    { name: 'Benchmarks', href: '/benchmarks', icon: BarChart3 },
    { name: 'Papers', href: '/papers', icon: GraduationCap },
    { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
    { name: 'Blogs', href: '/blogs', icon: FileText },
    { name: 'Community', href: '/community', icon: Users },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
                 <div className="flex items-center">
                   <Link href="/" className="flex items-center">
                     <span className="text-xl font-bold text-blue-900">ScalingOpt</span>
                   </Link>
                 </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-blue-700 hover:text-blue-900 transition-colors duration-200 font-medium"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href="https://github.com/tianshijing/ScalingOpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href="https://github.com/tianshijing/ScalingOpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
