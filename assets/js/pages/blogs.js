// Blog Posts Data
const blogPosts = [
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
        image: 'modular-manifolds-2025.png',
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
        image: 'lora-without-regret-2025.png',
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
        image: 'lora-weight-decay-2025.svg',
        externalUrl: 'https://irhum.github.io/blog/lorawd/'
    },
    {
        id: 'optimizer-choice-training-2024',
        title: 'How your choice of Optimisers affect your training (and why you should care)',
        excerpt: 'A comprehensive guide exploring how different optimizers impact neural network training dynamics, convergence behavior, and final model performance. This post covers practical insights into optimizer selection and their effects on training stability, speed, and generalization.',
        content: 'Full blog content would go here...',
        author: 'Chinmay Karkar',
        publishDate: '2024-12-15',
        readTime: '12 min read',
        category: 'Tutorial',
        tags: ['Optimizers', 'Training Dynamics', 'Convergence', 'Neural Networks', 'Practical Guide'],
        featured: true,
        externalUrl: 'https://hackmd.io/@l_WDq7lkQq29Pz-KD1JPNA/SJL6n1PYgg'
    },
    // Jianlin Su's Posts
    {
        id: 'jianlin-weight-decay-ema',
        title: 'Weight Decay and Learning Rate from a Moving Average Perspective',
        excerpt: 'A Theoretical Analysis of Optimal Scheduling in Large Language Model Pre-training. Viewing the training process as a moving average memory of the training data.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Optimization', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/滑动平均视角下的权重衰减和学习率.html'
    },
    {
        id: 'jianlin-muon-appreciation',
        title: 'Muon Optimizer Appreciation: The Essential Leap from Vectors to Matrices',
        excerpt: 'An In-Depth Analysis of the Matrix-Centric Muon Optimizer. Exploring why Muon is efficient and how it embodies essential differences between vectors and matrices.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Optimizer', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/Muon优化器赏析：从向量到矩阵的本质跨越.html'
    },
    {
        id: 'jianlin-adamw-rms-1',
        title: 'Asymptotic Estimation of Weight RMS in AdamW (Part 1)',
        excerpt: 'Using Mean-Field Approximation to Derive Asymptotic Weight RMS Expressions. Revealing how weight norms are embedded in optimizer hyperparameters.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/AdamW的Weight RMS的渐近估计（上）.html'
    },
    {
        id: 'jianlin-adamw-rms-2',
        title: 'Asymptotic Estimation of Weight RMS in AdamW (Part 2)',
        excerpt: 'Extension to Dynamic Weight Decay and Learning Rate Schedules. Generalizing the asymptotic estimation to practical training scenarios.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/AdamW的Weight RMS的渐近估计（下）.html'
    },
    {
        id: 'jianlin-muon-sequel',
        title: 'Muon Sequel: Why We Chose to Experiment with Muon?',
        excerpt: 'A Practical Investigation of the Muon Optimizer for Large-Scale LLM Training. Discussing the motivation and initial results of applying Muon to scale-up.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Optimizer', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/Muon续集：为什么我们选择尝试Muon.html'
    },
    {
        id: 'jianlin-qk-clip',
        title: 'QK-Clip: Advancing Muon Further in Scale-up',
        excerpt: 'A novel method to address MaxLogit explosion in large-scale transformer training, enabling stable training of trillion-parameter models with Muon optimizer.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Technique', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/QK-Clip：让Muon在Scaleup之路上更进一步.html'
    },
    {
        id: 'jianlin-higher-order-mup',
        title: 'Higher-Order MuP: A More Concise Yet Profound Spectral Condition Scaling',
        excerpt: 'A sophisticated spectral condition approach for cross-model hyperparameter transfer, providing intuitive algebraic insights into initialization and learning rate scaling laws.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Scaling Law', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/高阶MuP：更简明但更高明的谱条件缩放.html'
    },
    {
        id: 'jianlin-mup-preliminary',
        title: 'A Preliminary Exploration of MuP: Cross-Model Scaling Laws for Hyperparameters',
        excerpt: 'An in-depth analysis of Maximal Update Parametrization (MuP) for zero-shot hyperparameter transfer across model scales.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Scaling Law', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/初探MuP：超参数的跨模型尺度迁移规律.html'
    },
    {
        id: 'jianlin-rethinking-lr-bs-1',
        title: 'Rethinking Learning Rate and Batch Size (Part 1): Current Landscape',
        excerpt: 'A Theoretical Analysis of Learning Rate Scaling Laws and Their Computational Challenges in Modern Optimizers.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Analysis', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/重新思考学习率与Batch Size（一）：现状.html'
    },
    {
        id: 'jianlin-rethinking-lr-bs-2',
        title: 'Rethinking Learning Rate and Batch Size (Part 2): Mean Field Theory',
        excerpt: 'Applying mean field approximations to simplify the analysis of learning rate scaling laws for non-linear optimizers like SignSGD.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/重新思考学习率与Batch Size（二）：平均场.html'
    },
    {
        id: 'jianlin-rethinking-lr-bs-3',
        title: 'Rethinking Learning Rate and Batch Size (Part 3): Muon Analysis',
        excerpt: 'Applying mean field theory to analyze learning rate scaling laws for the Muon optimizer, revealing its asymptotic similarity to SignSGD.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Optimizer', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/重新思考学习率与Batch Size（三）：Muon.html'
    },
    {
        id: 'jianlin-rethinking-lr-bs-4',
        title: 'Rethinking Learning Rate and Batch Size (Part 4): EMA Effects',
        excerpt: 'Analyzing how Exponential Moving Averages in optimizers affect learning rate scaling laws, with implications for Adam and the Surge phenomenon.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/重新思考学习率与Batch Size（四）：EMA.html'
    },
    {
        id: 'jianlin-adam-rms-02',
        title: 'Why is Adam\'s Update RMS 0.2?',
        excerpt: 'A Theoretical and Empirical Investigation of Adam Optimizer\'s Update RMS Stability.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Analysis', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/为什么Adam的Update RMS是0.2.html'
    },
    {
        id: 'jianlin-adam-epsilon',
        title: 'How Does Adam\'s Epsilon Affect Learning Rate Scaling Laws?',
        excerpt: 'Analyzing the impact of Adam\'s epsilon parameter on learning rate scaling laws with batch size, exploring the transition between SignSGD and SGD behaviors.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Analysis', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/Adam的epsilon如何影响学习率的Scaling Law.html'
    },
    {
        id: 'jianlin-lr-scale-bs',
        title: 'How Should Learning Rate Scale with Batch Size?',
        excerpt: 'A comprehensive analysis of scaling laws between learning rate and batch size from multiple perspectives, covering SGD, Adam, and their variants.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Research',
        tags: ['Analysis', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/当Batch Size增大时，学习率该如何随之变化.html'
    },
    {
        id: 'jianlin-diagonal-low-rank',
        title: 'Efficient Inversion Methods for "Diagonal + Low-Rank" Triangular Matrices',
        excerpt: 'Efficient algorithms for inverting triangular matrices with diagonal plus low-rank structure commonly appearing in modern linear attention architectures.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Technique',
        tags: ['Technique', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/“对角+低秩”三角阵的高效求逆方法.html'
    },
    {
        id: 'jianlin-hessian-adaptive',
        title: 'Understanding Adaptive Learning Rate Optimizers from Hessian Approximation',
        excerpt: 'Analyzing Adam and related optimizers through the lens of Hessian approximation, revealing their connections to second-order Newton methods.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/从Hessian近似看自适应学习率优化器.html'
    },
    {
        id: 'jianlin-spectral-weight-decay',
        title: 'From Spectral Norm Gradient to Novel Weight Decay: A Theoretical Exploration',
        excerpt: 'Deriving spectral norm gradients and proposing novel weight decay mechanisms based on spectral norm regularization for improved model generalization.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/从谱范数梯度到新式权重衰减的思考.html'
    },
    {
        id: 'jianlin-lora-gradient',
        title: 'Gradient Perspective on LoRA: Introduction, Analysis, Conjectures, and Extensions',
        excerpt: 'A comprehensive analysis of LoRA from an optimization perspective, examining computational efficiency, gradient dynamics, and proposing novel extensions to the low-rank adaptation framework.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Analysis',
        tags: ['Analysis', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/梯度视角下的LoRA：简介、分析、猜测及推广.html'
    },
    {
        id: 'jianlin-manifold-sgd',
        title: 'Manifold Gradient Descent: 1. SGD on Hyperspheres',
        excerpt: 'A rigorous mathematical analysis of steepest descent directions on constrained manifolds, beginning with SGD on hyperspheres and examining the geometric foundations of optimization under constraints.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/流形上的最速下降：1. SGD + 超球面.html'
    },
    {
        id: 'jianlin-manifold-muon-ortho',
        title: 'Manifold Gradient Descent: 2. Muon with Orthogonal Constraints',
        excerpt: 'Extending the constrained optimization framework to matrix parameters with spectral norm constraints (Muon optimizer) and orthogonal manifold constraints, deriving steepest descent directions on orthogonal manifolds.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/流形上的最速下降：2. Muon + 正交.html'
    },
    {
        id: 'jianlin-manifold-muon-stiefel',
        title: 'Manifold Gradient Descent: 3. Muon on Stiefel Manifold',
        excerpt: 'Completing the solution for orthogonal constraints on non-square matrices (Stiefel manifolds) with Muon optimizer, deriving iterative algorithms and comparing with heuristic approaches.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/流形上的最速下降：3. Muon + Stiefel.html'
    },
    {
        id: 'jianlin-linear-attention-softmax',
        title: 'Exploring Linear Attention: Must Attention Have a Softmax?',
        excerpt: 'Comprehensive analysis of linear attention mechanisms that remove softmax to achieve O(n) complexity while preserving attention functionality.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Analysis',
        tags: ['Analysis', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/线性Attention的探索：Attention必须有个Softmax吗.html'
    },
    {
        id: 'jianlin-linear-attention-history',
        title: 'A Brief History of Linear Attention: From Imitation and Innovation to Back-Feeding',
        excerpt: 'Comprehensive overview of linear attention development from early approximations to modern innovations and reciprocal influences on softmax attention architectures.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Analysis',
        tags: ['Analysis', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/线性注意力简史：从模仿、创新到反哺.html'
    },
    {
        id: 'jianlin-lora-learning-rates',
        title: 'Different Learning Rates for LoRA: Can LoRA Improve Further?',
        excerpt: 'Analyzing the theoretical basis and empirical evidence for assigning different learning rates to LoRA matrices, with practical recommendations for improved fine-tuning performance.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Technique',
        tags: ['Technique', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/配置不同的学习率，LoRA还能再涨一点.html'
    },
    {
        id: 'jianlin-gradient-clipping-norm',
        title: 'Why is the Default Norm for Gradient Clipping 1?',
        excerpt: 'An analysis of the theoretical underpinnings behind the ubiquitous default clipping threshold of 1 in gradient clipping algorithms, exploring its connection to training stability and model scaling.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Analysis',
        tags: ['Analysis', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/为什么梯度裁剪的默认模长是1.html'
    },
    {
        id: 'jianlin-low-rank-1-pseudo-inverse',
        title: 'The Path to Low-Rank Approximation (Part 1): Pseudo-Inverse',
        excerpt: 'An in-depth exploration of pseudo-inverses from a low-rank approximation perspective, covering mathematical foundations, optimization formulations, and computational methods for matrix generalized inverses.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/低秩近似之路（一）：伪逆.html'
    },
    {
        id: 'jianlin-low-rank-2-svd',
        title: 'The Path to Low-Rank Approximation (Part 2): SVD',
        excerpt: 'A comprehensive exploration of Singular Value Decomposition (SVD) from a low-rank approximation perspective, covering theoretical foundations, applications to matrix optimization, and the Eckart-Young-Mirsky theorem.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/低秩近似之路（二）：SVD.html'
    },
    {
        id: 'jianlin-low-rank-3-cr',
        title: 'The Path to Low-Rank Approximation (Part 3): CR Approximation',
        excerpt: 'Exploring Column-Row (CR) approximation as a structured low-rank approximation technique for matrix multiplication acceleration, with connections to sampling methods and practical algorithms.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/低秩近似之路（三）：CR.html'
    },
    {
        id: 'jianlin-low-rank-4-id',
        title: 'The Path to Low-Rank Approximation (Part 4): Interpolative Decomposition',
        excerpt: 'Comprehensive exploration of Interpolative Decomposition (ID) as a structured low-rank factorization technique, covering deterministic QR-based algorithms, randomized methods, and theoretical foundations of column subset selection.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/低秩近似之路（四）：ID.html'
    },
    {
        id: 'jianlin-manifold-muon-spectral-sphere',
        title: 'Steepest Descent on Manifolds: 4. Muon + Spectral Sphere',
        excerpt: 'Exploring Muon optimization with spectral norm constraints, extending steepest descent on manifolds to spectral sphere constraints with iterative solution methods and practical implementations.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/流形上的最速下降：4. Muon + 谱球面.html'
    },
    {
        id: 'jianlin-manifold-dual-gradient',
        title: 'Steepest Descent on Manifolds: 5. Dual Gradient Descent',
        excerpt: 'Exploring dual gradient descent for manifold optimization: Transforming constraint equations into minimization problems via Lagrangian duality with applications to Stiefel manifolds and spectral sphere constraints.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Theory',
        tags: ['Theory', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/流形上的最速下降：5. 对偶梯度下降.html'
    },
    {
        id: 'jianlin-effective-rank',
        title: 'Effective Rank of Matrices',
        excerpt: 'Comprehensive exploration of Effective Rank as an extension of matrix rank for numerical computation, covering threshold-based definitions, norm ratios, entropy approaches, and connections to sparsity measures.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Analysis',
        tags: ['Analysis', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/矩阵的有效秩（Effective Rank）.html'
    },
    {
        id: 'jianlin-spectral-norm-estimation',
        title: 'Fast Estimation of Spectral Norms for Random Matrices',
        excerpt: 'A heuristic derivation of the √n+√m approximation for spectral norms of Gaussian random matrices, providing intuitive understanding and practical estimation methods with extensions to minimal singular values.',
        author: 'Jianlin Su',
        publishDate: '2024-01-01',
        readTime: '5 min read',
        category: 'Analysis',
        tags: ['Analysis', 'Jianlin Su'],
        externalUrl: 'blogs/Jianlin/随机矩阵的谱范数的快速估计.html'
    }
];

// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Stats Update Function
function updateStats() {
    const articlesCount = blogPosts.length;
    const uniqueAuthors = new Set(blogPosts.map(post => post.author)).size;
    const uniqueTopics = new Set(blogPosts.flatMap(post => post.tags)).size;
    
    animateValue("articles-count", 0, articlesCount, 1000);
    animateValue("authors-count", 0, uniqueAuthors, 1000);
    animateValue("topics-count", 0, uniqueTopics, 1000);
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Filter and search functionality
let filteredPosts = [...blogPosts];

function getCategoryColor(category) {
    const colors = {
        'Research': 'bg-blue-100 text-blue-800 border-blue-200',
        'Tutorial': 'bg-green-100 text-green-800 border-green-200',
        'News': 'bg-purple-100 text-purple-800 border-purple-200',
        'Opinion': 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
}

function renderAllPosts(postsToRender) {
    const container = document.getElementById('all-posts');
    const filteredCount = document.getElementById('filtered-count');

    if (filteredCount) {
        filteredCount.textContent = postsToRender.length;
    }

    container.innerHTML = postsToRender.map(post => `
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 group">
            <div class="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div class="flex-shrink-0 mb-4 md:mb-0">
                    <div class="w-24 h-24 rounded-lg overflow-hidden relative bg-gray-100">
                        ${post.image ? `
                            <img 
                                src="../assets/img/blogs/${post.image}" 
                                alt="${post.title}" 
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center\\'><i data-lucide=\\'file-text\\' class=\\'w-8 h-8 text-white\\'></i></div>'; lucide.createIcons();"
                            />
                        ` : `
                            <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <i data-lucide="file-text" class="w-8 h-8 text-white"></i>
                            </div>
                        `}
                    </div>
                </div>
                
                <div class="flex-1">
                    <div class="flex items-center justify-between mb-2">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}">
                            ${post.category}
                        </span>
                    </div>
                    
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                        ${post.title}
                    </h3>
                    
                    <p class="text-gray-600 mb-4">
                        ${post.excerpt}
                    </p>
                    
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>By ${post.author}</span>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex flex-wrap gap-1">
                            ${post.tags.map(tag => `
                                <span class="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                                    ${tag}
                                </span>
                            `).join('')}
                        </div>
                        
                        <a
                            href="${post.externalUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                            Read Article
                            <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Re-initialize icons for the new content
    lucide.createIcons();
}

function filterPosts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;

    filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm) ||
                             post.excerpt.toLowerCase().includes(searchTerm) ||
                             post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return matchesCategory && matchesSearch;
    });

    renderAllPosts(filteredPosts);
}

// Add event listeners
document.getElementById('search-input').addEventListener('input', filterPosts);
document.getElementById('category-filter').addEventListener('change', filterPosts);

// Initial render
updateStats();
renderAllPosts(filteredPosts);

function toggleSection(id) {
    const section = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');
    
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        section.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}
