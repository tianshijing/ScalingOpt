'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Copy, Check, BookOpen, Users, Calendar, TrendingUp, Settings, Code2, Zap } from 'lucide-react'
// import { motion } from 'framer-motion' // Removed to fix display issues
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { optimizers } from '@/data/optimizers'

interface Props {
  params: {
    id: string
  }
}

// Note: generateStaticParams removed due to 'use client' directive

export default function OptimizerDetailPage({ params }: Props) {
  const [copiedCode, setCopiedCode] = useState(false)
  const optimizer = optimizers.find(opt => opt.id === params.id)

  if (!optimizer) {
    notFound()
  }

  const handleCopyCode = async () => {
    if (optimizer.codeExample) {
      await navigator.clipboard.writeText(optimizer.codeExample)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'First-order': 'bg-blue-100 text-blue-800 border-blue-200',
      'Second-order': 'bg-purple-100 text-purple-800 border-purple-200',
      'Adaptive': 'bg-green-100 text-green-800 border-green-200',
      'Momentum-based': 'bg-orange-100 text-orange-800 border-orange-200',
      'Novel': 'bg-pink-100 text-pink-800 border-pink-200'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  // Generate example code if not provided
  const exampleCode = optimizer.codeExample || `import torch
import torch.optim as optim

# Initialize your model
model = YourModel()

# Create ${optimizer.name} optimizer
optimizer = optim.${optimizer.name}(
    model.parameters(),
${Object.entries(optimizer.hyperparameters).map(([key, param]) => 
    `    ${key}=${param.default}${key === 'eps' ? '  # ' + param.description : ''}`
).join(',\\n')}
)

# Training loop
for epoch in range(num_epochs):
    for batch in dataloader:
        optimizer.zero_grad()
        loss = criterion(model(batch.x), batch.y)
        loss.backward()
        optimizer.step()`

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div
          className="mb-8"
        >
          <Link
            href="/optimizers"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Optimizers
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-blue-900 mb-2">{optimizer.name}</h1>
                  <p className="text-xl text-blue-700 mb-4">{optimizer.fullName}</p>
                  <p className="text-gray-700 leading-relaxed">{optimizer.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">{optimizer.popularity}%</span>
                  </div>
                  <p className="text-sm text-gray-500">Popularity</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(optimizer.category)}`}>
                  {optimizer.category}
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  {optimizer.year}
                </span>
                {optimizer.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Paper Information */}
            <div
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Research Paper</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{optimizer.paper.title}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Authors:</p>
                  <p className="text-gray-800">{optimizer.paper.authors.join(', ')}</p>
                </div>
                <a
                  href={optimizer.paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Read Paper
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Advantages & Disadvantages */}
            <div
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pros & Cons</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Advantages</h3>
                  <ul className="space-y-2">
                    {optimizer.advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {optimizer.disadvantages && (
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Disadvantages</h3>
                    <ul className="space-y-2">
                      {optimizer.disadvantages.map((disadvantage, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{disadvantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Code Example */}
            <div
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Code2 className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Implementation Example</h2>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter
                  language="python"
                  style={tomorrow}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem'
                  }}
                >
                  {exampleCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Hyperparameters */}
            <div
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <Settings className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Hyperparameters</h3>
              </div>
              
              <div className="space-y-4">
                {Object.entries(optimizer.hyperparameters).map(([key, param]) => (
                  <div key={key} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{key}</span>
                      <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                        {param.default}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{param.description}</p>
                    {param.range && (
                      <p className="text-xs text-gray-500">Range: {param.range}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Support */}
            <div
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Framework Support</h3>
              
              <div className="space-y-3">
                <div className={`flex items-center justify-between p-3 rounded-lg ${optimizer.implementation.pytorch ? 'bg-orange-50 border border-orange-200' : 'bg-gray-50 border border-gray-200'}`}>
                  <span className="font-medium">PyTorch</span>
                  <span className={`text-sm font-medium ${optimizer.implementation.pytorch ? 'text-orange-800' : 'text-gray-500'}`}>
                    {optimizer.implementation.pytorch ? '✅ Supported' : '❌ Not Available'}
                  </span>
                </div>
                
                <div className={`flex items-center justify-between p-3 rounded-lg ${optimizer.implementation.tensorflow ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'}`}>
                  <span className="font-medium">TensorFlow</span>
                  <span className={`text-sm font-medium ${optimizer.implementation.tensorflow ? 'text-blue-800' : 'text-gray-500'}`}>
                    {optimizer.implementation.tensorflow ? '✅ Supported' : '❌ Not Available'}
                  </span>
                </div>
                
                <div className={`flex items-center justify-between p-3 rounded-lg ${optimizer.implementation.jax ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
                  <span className="font-medium">JAX</span>
                  <span className={`text-sm font-medium ${optimizer.implementation.jax ? 'text-green-800' : 'text-gray-500'}`}>
                    {optimizer.implementation.jax ? '✅ Supported' : '❌ Not Available'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Year Published</span>
                  <span className="font-semibold">{optimizer.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-semibold">{optimizer.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Popularity</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                      <div 
                        className="h-2 bg-green-500 rounded-full" 
                        style={{ width: `${optimizer.popularity}%` }}
                      ></div>
                    </div>
                    <span className="font-semibold text-sm">{optimizer.popularity}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
