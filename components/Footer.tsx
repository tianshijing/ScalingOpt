import Link from 'next/link'
import { Github, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
                 <div className="col-span-1 md:col-span-2">
                   <div className="flex items-center mb-4">
                     <span className="text-xl font-bold text-white">ScalingOpt</span>
                   </div>
            <p className="text-blue-100 mb-4 max-w-md">
              A comprehensive platform for scaling optimization algorithms. 
              Discover, compare, and contribute to cutting-edge optimizers for large-scale machine learning.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tianshijing/ScalingOpt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@awesome-optimizers.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/optimizers" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Browse Optimizers
                </Link>
              </li>
              <li>
                <Link href="/benchmarks" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Benchmarks
                </Link>
              </li>
              <li>
                <Link href="/papers" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Papers
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://arxiv.org/abs/2410.06373" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Research Paper
                </a>
              </li>
              <li>
                <Link href="/contribute" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 ScalingOpt Community. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by the community</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
