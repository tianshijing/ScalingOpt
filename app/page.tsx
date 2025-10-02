'use client'

import Link from 'next/link'
import { ArrowRight, Zap, Users, BookOpen, BarChart3, Star, Github, TrendingUp, Calendar } from 'lucide-react'
import { optimizers } from '@/data/optimizers'
import { benchmarkSuites } from '@/data/benchmarks'

export default function Home() {
  // Calculate real counts from data
  const optimizerCount = optimizers.length
  const benchmarkCount = benchmarkSuites.length
  const paperCount = 21 // Updated to reflect actual papers count
  const totalVisitors = 0 // Reset to 0 for actual tracking
  
  const stats = [
    { label: 'Optimizers', value: optimizerCount.toString(), icon: Zap },
    { label: 'Research Papers', value: paperCount.toString(), icon: BookOpen },
    { label: 'Benchmarks', value: benchmarkCount.toString(), icon: BarChart3 },
    { label: 'Total Visitors', value: totalVisitors.toLocaleString(), icon: Users },
  ]

  const featuredOptimizers = [
    {
      name: 'SGD',
      description: 'Stochastic Gradient Descent - foundational and reliable optimizer',
      year: 1999,
      category: 'First-order',
      popularity: 85
    },
    {
      name: 'AdamW',
      description: 'Adam with decoupled weight decay - excellent for transformers',
      year: 2017,
      category: 'Adaptive',
      popularity: 90
    },
    {
      name: 'Adam-mini',
      description: 'Memory-efficient Adam variant with fewer learning rates',
      year: 2024,
      category: 'Adaptive',
      popularity: 78
    },
    {
      name: 'Muon',
      description: 'Orthogonal weight updates via Newton-Schulz iteration',
      year: 2024,
      category: 'Novel',
      popularity: 82
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 float-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-lg opacity-20 float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-400 rounded-full opacity-20 float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-cyan-400 rounded-lg opacity-20 float-animation" style={{animationDelay: '0.5s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-shimmer block mb-4">ScalingOpt</span>
              <span className="text-2xl md:text-4xl lg:text-5xl text-blue-200 font-light">
                Optimization at Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover, compare, and contribute to cutting-edge optimization algorithms designed for
              <span className="text-cyan-300 font-semibold"> large-scale machine learning</span>. 
              From foundational methods to state-of-the-art scalable optimizers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/optimizers"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 pulse-glow"
              >
                <Zap className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                Explore Optimizers
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
                    <a
                      href="https://github.com/tianshijing/ScalingOpt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-10 py-5 border-2 border-blue-300 text-blue-200 font-bold rounded-2xl hover:border-blue-200 hover:bg-blue-800/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                <Github className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                View on GitHub
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform <span className="gradient-text">Statistics</span>
            </h2>
            <p className="text-xl text-gray-600">Real-time data from our comprehensive optimizer database</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover gradient-border">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-lg ${
                      index === 0 ? 'gradient-bg-3' : 
                      index === 1 ? 'gradient-bg-1' : 
                      index === 2 ? 'gradient-bg-4' :
                      'gradient-bg-2'
                    }`}>
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Optimizers Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-shimmer">Optimizers</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Discover the most powerful and innovative optimization algorithms powering modern AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredOptimizers.map((optimizer, index) => (
              <div
                key={optimizer.name}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 card-hover">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {optimizer.name}
                    </h3>
                    <span className="text-sm text-blue-300 bg-blue-900/50 px-3 py-1 rounded-full">
                      {optimizer.year}
                    </span>
                  </div>
                  <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                    {optimizer.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                      optimizer.category === 'First-order' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                      optimizer.category === 'Adaptive' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                      optimizer.category === 'Second-order' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                      'bg-purple-500/20 text-purple-300 border-purple-500/30'
                    }`}>
                      {optimizer.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-300">{optimizer.popularity}%</span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/optimizers"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
            >
              <Star className="mr-3 w-5 h-5 group-hover:animate-spin" />
              View All Optimizers
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">ScalingOpt</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand, implement, and scale optimization algorithms for modern AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group relative">
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border border-blue-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 gradient-bg-1 rounded-2xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    Comprehensive Documentation
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Detailed explanations, mathematical foundations, and implementation guides for each optimizer with real-world examples.
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border border-purple-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 gradient-bg-2 rounded-2xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors">
                    Performance Benchmarks
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Compare performance across different datasets, architectures, and optimization scenarios with detailed metrics.
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border border-green-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 gradient-bg-4 rounded-2xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors">
                    Active Community
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Join researchers and practitioners sharing insights, tips, and latest developments in optimization.
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-cyan-400 rounded-full opacity-20 float-animation"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-400 rounded-lg opacity-20 float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-purple-400 rounded-full opacity-20 float-animation" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Join the <span className="text-shimmer">Optimization</span> Community
            </h2>
            <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with researchers and practitioners exploring 
              <span className="text-cyan-300 font-semibold"> optimization algorithms and efficient AI</span>. 
              Discover, learn, and contribute to the future of machine learning optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/optimizers"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 pulse-glow"
              >
                <Zap className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                Browse Optimizers
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/community"
                className="group inline-flex items-center px-10 py-5 border-2 border-purple-300 text-purple-200 font-bold rounded-2xl hover:border-purple-200 hover:bg-purple-800/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <BookOpen className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                Join Community
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}