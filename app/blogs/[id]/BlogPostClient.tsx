'use client'

import Link from 'next/link'
// import { motion } from 'framer-motion' // Removed to fix display issues
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, TrendingUp } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  content: string
  author: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  views: number
}

interface Props {
  post: BlogPost
}

export default function BlogPostClient({ post }: Props) {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <BookOpen className="w-24 h-24 text-white" />
          </div>

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center justify-between mb-6">
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <TrendingUp className="w-4 h-4 mr-1" />
                {post.views.toLocaleString()} views
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              {post.title}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, match => {
                    const level = match.trim().length
                    return `<h${level} class="text-${4-level}xl font-bold text-gray-900 mt-8 mb-4">`
                  }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center text-gray-500">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>More related articles coming soon!</p>
              <Link
                href="/blogs"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4"
              >
                Browse All Articles
                <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
