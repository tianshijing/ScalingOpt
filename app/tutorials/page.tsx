'use client'

import { useState } from 'react'
import Link from 'next/link'
// import { motion } from 'framer-motion' // Removed to fix display issues
import { BookOpen, Play, Clock, ExternalLink, Code, Lightbulb } from 'lucide-react'

interface Tutorial {
  id: string
  title: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  type: 'Interactive' | 'Video' | 'Article' | 'Notebook'
  topics: string[]
  author: string
  thumbnail?: string
}

const tutorials: Tutorial[] = [
  {
    id: 'data-centric-methods',
    title: 'Data-centric Methods',
    description: 'Comprehensive presentation on data-centric approaches in machine learning and optimization, focusing on data quality and preprocessing techniques.',
    level: 'Intermediate',
    duration: '45 min',
    type: 'Article',
    topics: ['Data Quality', 'Preprocessing', 'Data-centric AI', 'Machine Learning'],
    author: 'XLeaf Lab'
  },
  {
    id: 'optimizer-preconditioners-main',
    title: 'Optimizer Preconditioners (Main)',
    description: 'In-depth exploration of preconditioners in optimization algorithms, covering theory and practical applications for improving convergence.',
    level: 'Advanced',
    duration: '60 min',
    type: 'Article',
    topics: ['Preconditioners', 'Convergence', 'Optimization Theory'],
    author: 'XLeaf Lab'
  },
  {
    id: 'optimizer-preconditioners-mobile',
    title: 'Optimizer Preconditioners (Mobile)',
    description: 'Mobile-optimized version of the optimizer preconditioners presentation, designed for on-the-go learning and quick reference.',
    level: 'Advanced',
    duration: '30 min',
    type: 'Article',
    topics: ['Preconditioners', 'Optimization'],
    author: 'XLeaf Lab'
  }
]

const getPdfUrl = (tutorialId: string) => {
  const pdfMap: { [key: string]: string } = {
    'data-centric-methods': '/Tutorial/Presentation___Data-centric_Methods__mobile.pdf',
    'optimizer-preconditioners-main': '/Tutorial/Presentation___Optimizer_Preconditioners__main.pdf',
    'optimizer-preconditioners-mobile': '/Tutorial/Presentation___Optimizer_Preconditioners__mobile.pdf'
  }
  return pdfMap[tutorialId] || '#'
}

export default function TutorialsPage() {
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [selectedType, setSelectedType] = useState('All')

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesLevel = selectedLevel === 'All' || tutorial.level === selectedLevel
    const matchesType = selectedType === 'All' || tutorial.type === selectedType
    return matchesLevel && matchesType
  })

  const getLevelColor = (level: string) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800 border-green-200',
      'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Advanced': 'bg-red-100 text-red-800 border-red-200'
    }
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const getTypeIcon = (type: string) => {
    const icons = {
      'Interactive': Play,
      'Video': Play,
      'Article': BookOpen,
      'Notebook': Code
    }
    return icons[type as keyof typeof icons] || BookOpen
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Learning <span className="gradient-text">Tutorials</span>
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Master optimization algorithms with our comprehensive tutorials, from basic concepts 
            to advanced techniques used in cutting-edge research.
          </p>
        </div>


        {/* Filters */}
        <div
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Types</option>
                <option value="Interactive">Interactive</option>
                <option value="Video">Video</option>
                <option value="Article">Article</option>
                <option value="Notebook">Notebook</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredTutorials.map((tutorial, index) => {
            const TypeIcon = getTypeIcon(tutorial.type)
            
            return (
              <div
                key={tutorial.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Thumbnail placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <TypeIcon className="w-16 h-16 text-white" />
                </div>
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {tutorial.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {tutorial.description}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(tutorial.level)}`}>
                      {tutorial.level}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {tutorial.topics.slice(0, 3).map(topic => (
                        <span key={topic} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                          {topic}
                        </span>
                      ))}
                      {tutorial.topics.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                          +{tutorial.topics.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{tutorial.author}</span>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4">
                    <a
                      href={getPdfUrl(tutorial.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <TypeIcon className="w-4 h-4 mr-2" />
                      View Tutorial
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Learning Path */}
        <div
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Recommended Learning Path</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Start with Fundamentals</h3>
              <p className="text-sm text-gray-600">
                Begin with &quot;Optimization Fundamentals&quot; to understand the mathematical foundations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Explore Popular Optimizers</h3>
              <p className="text-sm text-gray-600">
                Learn about Adam, SGD, and other commonly used optimizers in practice.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced Techniques</h3>
              <p className="text-sm text-gray-600">
                Dive into cutting-edge optimizers and advanced optimization strategies.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Want to Contribute a Tutorial?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Share your knowledge with the community! We welcome high-quality tutorials, 
            code examples, and educational content about optimization algorithms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tianshijing/ScalingOpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Contribution Guidelines
            </a>
            <Link
              href="/community"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
