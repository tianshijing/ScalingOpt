'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
// import { motion } from 'framer-motion' // Removed to fix display issues
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, TrendingUp } from 'lucide-react'

// This would normally come from a database or CMS
const blogPosts = [
  {
    id: 'adam-vs-sgd-2024',
    title: 'Adam vs SGD in 2024: A Comprehensive Analysis',
    content: `
# Adam vs SGD in 2024: A Comprehensive Analysis

In the rapidly evolving landscape of deep learning optimization, the debate between Adam and SGD continues to be one of the most discussed topics among researchers and practitioners. As we move through 2024, new insights and empirical evidence have emerged that shed light on when and why to choose one optimizer over the other.

## The Fundamental Differences

### Stochastic Gradient Descent (SGD)
SGD, the grandfather of optimization algorithms, remains surprisingly relevant in 2024. Its simplicity and theoretical guarantees make it a reliable choice for many applications:

- **Memory Efficiency**: SGD requires minimal memory overhead
- **Generalization**: Often achieves better generalization on test data
- **Stability**: Predictable behavior across different architectures

### Adam (Adaptive Moment Estimation)
Adam's adaptive learning rates have made it the go-to optimizer for many practitioners:

- **Fast Convergence**: Typically converges faster than SGD
- **Adaptive Learning Rates**: Automatically adjusts learning rates per parameter
- **Sparse Gradients**: Handles sparse gradients effectively

## 2024 Benchmarks and Results

Our comprehensive analysis across multiple domains reveals interesting patterns:

### Computer Vision Tasks
- **Image Classification**: SGD with momentum still dominates on ResNet architectures
- **Object Detection**: Adam shows superior performance on transformer-based detectors
- **Semantic Segmentation**: Mixed results, with dataset size being a key factor

### Natural Language Processing
- **Language Modeling**: Adam variants (AdamW, Lion) consistently outperform SGD
- **Fine-tuning**: AdamW remains the standard for transformer fine-tuning
- **From-scratch Training**: SGD competitive for smaller models

## Practical Recommendations

Based on our 2024 analysis, here are our recommendations:

1. **Start with AdamW** for most deep learning tasks
2. **Use SGD with momentum** for computer vision tasks with well-established architectures
3. **Consider Lion** for large-scale training where memory is a constraint
4. **Experiment with learning rate schedules** regardless of optimizer choice

## Conclusion

The choice between Adam and SGD in 2024 depends heavily on your specific use case, computational constraints, and performance requirements. While Adam variants continue to be the safe default choice, SGD's simplicity and generalization properties keep it relevant for many applications.

The optimization landscape continues to evolve, with new algorithms like Lion and Sophia showing promise. However, understanding the fundamentals of Adam and SGD remains crucial for any deep learning practitioner.
    `,
    author: 'Dr. Sarah Chen',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Research',
    tags: ['Adam', 'SGD', 'Comparison', 'Performance'],
    views: 12500
  }
]

interface Props {
  params: {
    id: string
  }
}

// Note: generateStaticParams removed due to 'use client' directive

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

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
