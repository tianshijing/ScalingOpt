'use client'

// import { motion } from 'framer-motion' // Removed to fix display issues
import Image from 'next/image'
import { Users, MessageCircle, Github, Twitter, Mail, Heart, Star, GitPullRequest, Bug, Lightbulb, BookOpen, Calendar, ExternalLink } from 'lucide-react'

export default function CommunityPage() {
  const stats = [
    { label: 'Contributors', value: '0', icon: Users },
    { label: 'GitHub Stars', value: '0', icon: Star },
    { label: 'Pull Requests', value: '0', icon: GitPullRequest },
    { label: 'Issues Resolved', value: '0', icon: Bug },
  ]

  const contributors = [
    {
      name: 'Juanxi Tian',
      role: 'Project Maintainer',
      avatar: '/Fig/tianshijing.png',
      contributions: 'Lead maintainer',
      github: 'https://github.com/tianshijing'
    }
  ]

  const discussions: any[] = [] // Cleared discussions array

  const events = [
    {
      title: 'Community Meetup',
      date: 'Oct 02, 2025',
      type: 'Meetup',
      description: 'ScalingOpt Community Meetup',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Join Our <span className="gradient-text">Community</span>
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Connect with researchers, practitioners, and enthusiasts working on optimization algorithms. 
            Share knowledge, ask questions, and contribute to the future of machine learning optimization.
          </p>
        </div>

        {/* Community Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Discussions */}
            <div
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
                </div>
                <a
                  href="https://github.com/tianshijing/ScalingOpt/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                >
                  View All
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="space-y-4">
                {discussions.length > 0 ? (
                  discussions.map((discussion, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                        <span className="text-sm text-gray-500">{discussion.lastActivity}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>by {discussion.author}</span>
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {discussion.tags.map((tag: string) => (
                            <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-blue-100 text-blue-800">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium mb-2">No discussions yet</p>
                    <p className="text-sm">Be the first to start a conversation about optimizers!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contributors */}
            <div
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Core Contributors</h2>
              </div>
              
              <div className="max-w-md mx-auto">
                {contributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-6 p-6 border border-gray-200 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      {contributor.avatar ? (
                        <Image src={contributor.avatar} alt={contributor.name} width={64} height={64} className="w-16 h-16 rounded-full object-cover" />
                      ) : (
                        <span className="text-white font-bold text-xl">
                          {contributor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-900">{contributor.name}</h3>
                      <p className="text-blue-600 font-medium mb-2">{contributor.role}</p>
                      <p className="text-sm text-gray-600 mb-3">{contributor.contributions}</p>
                      <a
                        href={contributor.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium text-sm bg-white px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Special thanks to all community contributors who have helped make this project better.
                </p>
                <a
                  href="https://github.com/tianshijing/ScalingOpt/graphs/contributors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Users className="w-4 h-4 mr-2" />
                  View All Contributors
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* How to Contribute */}
            <div
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-6">
                <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How to Contribute</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Add New Optimizers</h3>
                      <p className="text-sm text-gray-600">Implement and document new optimization algorithms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bug className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Report Issues</h3>
                      <p className="text-sm text-gray-600">Help us improve by reporting bugs and issues</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Improve Documentation</h3>
                      <p className="text-sm text-gray-600">Enhance tutorials, examples, and documentation</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <GitPullRequest className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Submit Benchmarks</h3>
                      <p className="text-sm text-gray-600">Contribute benchmark results and evaluations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Join Discussions</h3>
                      <p className="text-sm text-gray-600">Participate in community discussions and Q&A</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Share Knowledge</h3>
                      <p className="text-sm text-gray-600">Write tutorials and share your expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Connect with Us */}
            <div
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with Us</h3>
              
              <div className="space-y-3">
                <a
                  href="https://github.com/tianshijing/ScalingOpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                  <span className="font-medium text-gray-900">GitHub Repository</span>
                </a>
                
                <a
                  href="https://github.com/tianshijing/ScalingOpt/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Discussions</span>
                </a>
                
                <a
                  href="mailto:contact@awesome-optimizers.com"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">Email Us</span>
                </a>
              </div>
            </div>

            {/* Upcoming Events */}
            <div
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
              </div>
              
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{event.date}</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              
              <div className="space-y-2">
                <a
                  href="https://github.com/tianshijing/ScalingOpt/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 text-sm"
                >
                  → Contribution Guidelines
                </a>
                <a
                  href="https://github.com/tianshijing/ScalingOpt/blob/main/CODE_OF_CONDUCT.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 text-sm"
                >
                  → Code of Conduct
                </a>
                <a
                  href="https://arxiv.org/abs/2410.06373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 text-sm"
                >
                  → Research Paper
                </a>
                <a
                  href="https://github.com/tianshijing/ScalingOpt/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 text-sm"
                >
                  → Report Issues
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center mt-12"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Get Involved?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our growing community of researchers and practitioners. Whether you&apos;re a beginner 
            or an expert, there&apos;s a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tianshijing/ScalingOpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Github className="w-4 h-4 mr-2" />
              Star on GitHub
            </a>
            <a
              href="https://github.com/tianshijing/ScalingOpt/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Discussion
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
