# Awesome Optimizers Community Website

A beautiful, modern community website for the Awesome Optimizers project - a comprehensive collection of machine learning optimization algorithms.

## 🌟 Features

- **Comprehensive Optimizer Library**: Browse 45+ optimization algorithms with detailed information
- **Interactive Benchmarks**: Compare optimizer performance across different tasks and datasets
- **Learning Resources**: Tutorials, guides, and educational content for all skill levels
- **Community Hub**: Connect with researchers and practitioners worldwide
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Search & Filter**: Advanced filtering by category, year, framework support, and more

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tianshijing/ScalingOpt.git
cd ScalingOpt
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── optimizers/        # Optimizer pages
│   ├── benchmarks/        # Benchmark results
│   ├── tutorials/         # Learning resources
│   └── community/         # Community hub
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── data/                  # Data files
│   ├── optimizers.ts      # Optimizer definitions
│   └── benchmarks.ts      # Benchmark data
├── public/               # Static assets
└── Fig/                  # Images and figures
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Highlighting**: React Syntax Highlighter
- **Search**: Fuse.js (fuzzy search)
- **Charts**: Chart.js with React Chart.js 2

## 📊 Pages Overview

### Homepage (`/`)
- Hero section with project introduction
- Featured optimizers showcase
- Community statistics
- Call-to-action sections

### Optimizers (`/optimizers`)
- Complete optimizer library with search and filtering
- Grid view with optimizer cards
- Category and year filtering
- Framework support indicators

### Optimizer Details (`/optimizers/[id]`)
- Detailed optimizer information
- Research paper links and citations
- Implementation examples
- Hyperparameter documentation
- Pros and cons analysis

### Benchmarks (`/benchmarks`)
- Interactive performance comparisons
- Multiple benchmark suites
- Filtering by dataset and model
- Performance visualization
- Export functionality

### Tutorials (`/tutorials`)
- Learning resources for all levels
- Interactive tutorials and notebooks
- Video content and articles
- Recommended learning paths

### Community (`/community`)
- Community statistics and contributors
- Recent discussions
- Contribution guidelines
- Events and meetups
- Contact information

## 🎯 Key Features

### Advanced Search & Filtering
- Real-time search across optimizer names, descriptions, and tags
- Filter by category (First-order, Second-order, Adaptive, etc.)
- Filter by publication year
- Filter by framework support (PyTorch, TensorFlow, JAX)
- Sort by popularity, year, or name

### Responsive Design
- Mobile-first approach
- Smooth animations and transitions
- Glass morphism effects
- Gradient backgrounds
- Hover effects and micro-interactions

### Performance Optimized
- Static site generation (SSG)
- Image optimization
- Code splitting
- Lazy loading
- SEO optimized

## 🤝 Contributing

We welcome contributions to improve the website! Here's how you can help:

### Adding New Optimizers

1. Edit `data/optimizers.ts`
2. Add optimizer information following the existing schema
3. Include paper details, hyperparameters, and implementation info
4. Test the changes locally

### Improving UI/UX

1. Components are in the `components/` directory
2. Pages are in the `app/` directory
3. Styles use Tailwind CSS classes
4. Follow the existing design patterns

### Adding Benchmarks

1. Edit `data/benchmarks.ts`
2. Add benchmark results following the schema
3. Include dataset, model, and performance metrics

### Reporting Issues

- Use GitHub Issues to report bugs
- Provide detailed reproduction steps
- Include screenshots for UI issues

## 🔧 Development

### Environment Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Adding New Features

1. Create feature branch from main
2. Implement changes with TypeScript
3. Add proper TypeScript types
4. Test responsive design
5. Submit pull request

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🌐 Deployment

The website is optimized for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy with zero configuration

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Juanxi Tian** - Project maintainer and lead developer
- **Siyuan Li** - Research direction and contributions
- **Zedong Wang** - Implementation and benchmarking
- **Community Contributors** - 150+ amazing contributors

## 📞 Contact

- **GitHub**: [ScalingOpt](https://github.com/tianshijing/ScalingOpt)
- **Email**: contact@awesome-optimizers.com
- **Discussions**: [GitHub Discussions](https://github.com/tianshijing/ScalingOpt/discussions)

---

Built with ❤️ by the Awesome Optimizers community
