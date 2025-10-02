'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Filter, Calendar, ExternalLink, Code, BookOpen, Github } from 'lucide-react'
// import { motion } from 'framer-motion' // Removed to fix display issues
import { optimizers, categories, years } from '@/data/optimizers'

export default function OptimizersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [sortBy, setSortBy] = useState('year')

  const filteredAndSortedOptimizers = useMemo(() => {
    let filtered = optimizers.filter(optimizer => {
      const matchesSearch = optimizer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           optimizer.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           optimizer.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || optimizer.category === selectedCategory
      const matchesYear = selectedYear === 'All' || optimizer.year.toString() === selectedYear

      return matchesSearch && matchesCategory && matchesYear
    })

    // Sort optimizers
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity
        case 'year':
          return b.year - a.year
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedYear, sortBy])

  const getCategoryColor = (category: string) => {
    const colors = {
      'First-order': 'bg-blue-100 text-blue-800',
      'Second-order': 'bg-purple-100 text-purple-800',
      'Adaptive': 'bg-green-100 text-green-800',
      'Momentum-based': 'bg-orange-100 text-orange-800',
      'Novel': 'bg-pink-100 text-pink-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Optimizer <span className="gradient-text">Library</span>
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Explore our comprehensive collection of {optimizers.length} optimization algorithms. 
            Find the perfect optimizer for your large-scale machine learning project.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search optimizers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="All">All Years</option>
                {years.map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="year">Year</option>
                <option value="popularity">Popularity</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredAndSortedOptimizers.length} of {optimizers.length} optimizers
          </div>
        </div>

        {/* Optimizers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedOptimizers.map((optimizer, index) => (
            <div
              key={optimizer.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{optimizer.name}</h3>
                    <p className="text-sm text-gray-500">{optimizer.fullName}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-600">{optimizer.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {optimizer.description}
                </p>

                {/* Category and Tags */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(optimizer.category)} mb-2`}>
                    {optimizer.category}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {optimizer.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                        {tag}
                      </span>
                    ))}
                    {optimizer.tags.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                        +{optimizer.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Implementation badges */}
                <div className="flex items-center space-x-2 mb-4">
                  {optimizer.implementation.pytorch && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-orange-100 text-orange-800 font-medium">
                      PyTorch
                    </span>
                  )}
                  {optimizer.implementation.tensorflow && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-blue-100 text-blue-800 font-medium">
                      TensorFlow
                    </span>
                  )}
                  {optimizer.implementation.jax && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-green-100 text-green-800 font-medium">
                      JAX
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {optimizer.githubUrl ? (
                    <a
                      href={optimizer.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <Link
                      href={`/optimizers/${optimizer.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      View Details
                    </Link>
                  )}
                  <a
                    href={optimizer.paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-700 text-sm"
                  >
                    <BookOpen className="w-4 h-4 mr-1" />
                    Paper
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredAndSortedOptimizers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No optimizers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
