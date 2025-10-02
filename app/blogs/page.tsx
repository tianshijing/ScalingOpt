'use client'

import { useState } from 'react'
import Link from 'next/link'
// import { motion } from 'framer-motion' // Removed to fix display issues
import { FileText, Calendar, User, Clock, Tag, ArrowRight, Search, Filter } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  category: 'Research' | 'Tutorial' | 'News' | 'Opinion'
  tags: string[]
  featured: boolean
  externalUrl: string
}

const blogPosts: BlogPost[] = [
  {
    id: 'modular-manifolds-2025',
    title: 'Modular Manifolds',
    excerpt: 'When we train large neural networks, we need to keep them healthy. This post covers one appealing way to constrain the weight matrices of a neural network—by keeping the tensors constrained to submanifolds at each layer. We propose a manifold version of the Muon optimizer whose weights are constrained to the Stiefel manifold.',
    content: 'Full blog content would go here...',
    author: 'Jeremy Bernstein',
    publishDate: '2025-09-26',
    readTime: '15 min read',
    category: 'Research',
    tags: ['Neural Networks', 'Optimization', 'Manifolds', 'Muon', 'Stiefel Manifold'],
    featured: true,
    externalUrl: 'https://thinkingmachines.ai/blog/modular-manifolds/'
  },
  {
    id: 'lora-without-regret-2025',
    title: 'LoRA Without Regret',
    excerpt: 'This post explores the application of Low-Rank Adaptation (LoRA) methods in parameter-efficient fine-tuning. Through a series of experiments, we study LoRA\'s performance on small to medium-scale datasets and find that when certain key conditions are met, LoRA\'s learning efficiency can match that of full fine-tuning.',
    content: 'Full blog content would go here...',
    author: 'John Schulman',
    publishDate: '2025-09-29',
    readTime: '12 min read',
    category: 'Research',
    tags: ['LoRA', 'Fine-tuning', 'Parameter Efficiency', 'Language Models'],
    featured: true,
    externalUrl: 'https://thinkingmachines.ai/blog/lora/'
  },
  {
    id: 'deriving-muon-2025',
    title: 'Deriving Muon',
    excerpt: 'This post introduces the derivation process of the Muon optimizer. Muon is an optimizer designed specifically for linear neural network layers, with its core numerical methods derived from exact theoretical principles. We detail the theoretical foundations of Muon and provide the derivation process to help researchers extend these methods to new layer types and applications.',
    content: 'Full blog content would go here...',
    author: 'Jeremy Bernstein',
    publishDate: '2025-03-07',
    readTime: '10 min read',
    category: 'Tutorial',
    tags: ['Muon', 'Optimization', 'Neural Networks', 'Theory', 'Derivation'],
    featured: true,
    externalUrl: 'https://jeremybernste.in/writing/deriving-muon'
  },
  {
    id: 'lora-weight-decay-2025',
    title: 'LoRA and Weight Decay',
    excerpt: 'An in-depth analysis of how weight decay interacts with Low-Rank Adaptation (LoRA) in fine-tuning scenarios. This post examines the theoretical and practical implications of applying weight decay to LoRA parameters and provides insights into optimal regularization strategies for parameter-efficient fine-tuning.',
    content: 'Full blog content would go here...',
    author: 'Irhum Shafkat',
    publishDate: '2025-08-15',
    readTime: '8 min read',
    category: 'Research',
    tags: ['LoRA', 'Weight Decay', 'Regularization', 'Fine-tuning'],
    featured: false,
    externalUrl: 'https://irhum.github.io/blog/lorawd/'
  }
]

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Research', 'Tutorial', 'News', 'Opinion']

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  const getCategoryColor = (category: string) => {
    const colors = {
      'Research': 'bg-blue-100 text-blue-800 border-blue-200',
      'Tutorial': 'bg-green-100 text-green-800 border-green-200',
      'News': 'bg-purple-100 text-purple-800 border-purple-200',
      'Opinion': 'bg-orange-100 text-orange-800 border-orange-200'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Optimizer <span className="gradient-text">Blogs</span>
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Stay updated with the latest insights, research, and tutorials about optimization algorithms 
            from leading experts in the field.
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{blogPosts.length}</div>
            <div className="text-gray-600">Articles</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <User className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{new Set(blogPosts.map(p => p.author)).size}</div>
            <div className="text-gray-600">Authors</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Tag className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{new Set(blogPosts.flatMap(p => p.tags)).size}</div>
            <div className="text-gray-600">Topics</div>
          </div>
        </div>

        {/* Featured Posts */}
        <div
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
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
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </div>
        </div>

        {/* All Posts */}
        <div
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>By {post.author}</span>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={post.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Want to Contribute an Article?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Share your insights and expertise with the community! We welcome high-quality articles 
            about optimization algorithms, research findings, and practical tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/community"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <FileText className="w-4 h-4 mr-2" />
              Submit Article
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Writing Guidelines
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
