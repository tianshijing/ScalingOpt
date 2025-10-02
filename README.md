# ScalingOpt Static Website

这是一个完全静态的HTML网站，完全复刻了原始的Next.js网站的所有功能和外观。

## 🌟 特性

- **完全静态**: 无需服务器，可直接在GitHub Pages或其他静态托管服务上部署
- **功能完整**: 保持了原网站的所有功能，包括搜索、过滤、交互式图表等
- **响应式设计**: 支持移动端和桌面端
- **现代化UI**: 使用Tailwind CSS和Lucide图标
- **交互功能**: JavaScript实现的搜索、过滤、图表等交互功能

## 📁 文件结构

```
static-site/
├── index.html              # 首页
├── optimizers.html         # 优化器页面
├── benchmarks.html         # 基准测试页面
├── papers.html            # 论文页面
├── tutorials.html         # 教程页面
├── blogs.html            # 博客页面
├── community.html        # 社区页面
├── styles.css            # 自定义样式
├── optimizers-data.js    # 优化器数据
├── benchmarks-data.js    # 基准测试数据
├── Fig/                  # 图片资源
└── README.md            # 说明文档
```

## 🚀 部署方式

### GitHub Pages
1. 将所有文件上传到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择源分支（通常是main或master）
4. 网站将在 `https://username.github.io/repository-name` 上可用

### Netlify
1. 将文件拖拽到Netlify的部署区域
2. 或连接GitHub仓库进行自动部署
3. 网站将获得一个免费的netlify.app域名

### Vercel
1. 导入GitHub仓库到Vercel
2. 选择静态网站部署
3. 网站将获得一个vercel.app域名

### 其他静态托管服务
- Firebase Hosting
- AWS S3 + CloudFront
- Azure Static Web Apps
- 任何支持静态文件的Web服务器

## 🎨 技术栈

- **HTML5**: 语义化标记
- **CSS3**: 现代CSS特性，包括Grid、Flexbox、动画等
- **Tailwind CSS**: 实用优先的CSS框架
- **JavaScript (ES6+)**: 现代JavaScript特性
- **Lucide Icons**: 美观的图标库
- **Chart.js**: 交互式图表库

## 🔧 功能特性

### 首页 (index.html)
- 英雄区域展示
- 平台统计信息
- 特色优化器展示
- 功能特性介绍
- 社区号召行动

### 优化器页面 (optimizers.html)
- 完整的优化器库
- 实时搜索功能
- 分类和年份过滤
- 排序功能
- 优化器详情卡片

### 基准测试页面 (benchmarks.html)
- 交互式性能图表
- 多维度基准测试
- 优化器对比雷达图
- 详细结果表格

### 其他页面
- **论文页面**: 研究论文展示和分类
- **教程页面**: 学习路径和教程资源
- **博客页面**: 社区文章和见解
- **社区页面**: 贡献者信息和社区统计

## 📱 响应式设计

网站完全支持响应式设计，在不同设备上都有良好的显示效果：

- **桌面端**: 完整的多列布局
- **平板端**: 适配的网格布局
- **移动端**: 单列布局，优化的触摸交互

## 🎯 性能优化

- **轻量级**: 无框架依赖，加载速度快
- **CDN资源**: 使用CDN加载外部资源
- **图片优化**: 合理的图片格式和大小
- **代码压缩**: 生产环境可进一步压缩

## 🔍 搜索和过滤

### 优化器搜索
- 按名称搜索
- 按描述搜索
- 按标签搜索
- 实时搜索结果更新

### 过滤功能
- 按类别过滤（First-order, Second-order, Adaptive等）
- 按年份过滤
- 按框架支持过滤（PyTorch, TensorFlow, JAX）

### 排序功能
- 按年份排序
- 按受欢迎程度排序
- 按名称排序

## 📊 数据管理

### optimizers-data.js
包含所有优化器的详细信息：
- 基本信息（名称、描述、年份）
- 论文信息（标题、链接、作者）
- 超参数配置
- 实现支持
- 标签和分类

### benchmarks-data.js
包含基准测试数据：
- 性能指标
- 不同数据集的结果
- 优化器对比数据

## 🎨 样式系统

### 自定义CSS类
- `.gradient-text`: 渐变文字效果
- `.text-shimmer`: 闪烁文字动画
- `.card-hover`: 卡片悬停效果
- `.float-animation`: 浮动动画
- `.pulse-glow`: 脉冲发光效果

### 颜色系统
- 主色调：蓝色系
- 辅助色：紫色、绿色、橙色
- 渐变背景：多种渐变组合

## 🔧 自定义和扩展

### 添加新优化器
1. 在 `optimizers-data.js` 中添加新的优化器对象
2. 确保包含所有必需字段
3. 页面会自动显示新优化器

### 添加新页面
1. 创建新的HTML文件
2. 复制现有页面的基本结构
3. 修改导航菜单链接
4. 更新页脚链接

### 修改样式
1. 编辑 `styles.css` 文件
2. 或修改HTML中的Tailwind CSS类
3. 保持响应式设计原则

## 📝 维护说明

### 更新数据
- 优化器数据：编辑 `optimizers-data.js`
- 基准测试数据：编辑 `benchmarks-data.js`
- 图片资源：替换 `Fig/` 目录中的文件

### 更新内容
- 文本内容：直接编辑HTML文件
- 链接：更新href属性
- 联系信息：更新邮箱和GitHub链接

## 🌐 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)
- 移动端浏览器

## 📄 许可证

与原项目保持相同的MIT许可证。

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个静态网站版本。

---

**注意**: 这是一个完全静态的网站，不包含任何服务器端功能。所有交互都通过客户端JavaScript实现。
