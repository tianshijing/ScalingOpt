# 部署指南

## 🚀 快速部署

### 方法1: GitHub Pages (推荐)

1. **创建GitHub仓库**
   ```bash
   # 在GitHub上创建新仓库，命名为 scalingopt-static
   ```

2. **上传文件**
   ```bash
   # 克隆仓库
   git clone https://github.com/yourusername/scalingopt-static.git
   cd scalingopt-static
   
   # 复制所有静态网站文件到仓库目录
   cp -r /path/to/static-site/* .
   
   # 提交并推送
   git add .
   git commit -m "Initial static site deployment"
   git push origin main
   ```

3. **启用GitHub Pages**
   - 进入仓库设置 (Settings)
   - 滚动到 "Pages" 部分
   - 选择源分支 (Source: Deploy from a branch)
   - 选择分支: main
   - 选择文件夹: / (root)
   - 点击 Save

4. **访问网站**
   - 网站将在 `https://yourusername.github.io/scalingopt-static` 上可用
   - GitHub会提供自定义域名选项

### 方法2: Netlify

1. **拖拽部署**
   - 访问 [netlify.com](https://netlify.com)
   - 将整个 `static-site` 文件夹拖拽到部署区域
   - 网站立即上线

2. **Git集成部署**
   - 连接GitHub仓库
   - 设置构建命令: 无 (静态网站)
   - 设置发布目录: `/` 或留空
   - 自动部署每次推送

### 方法3: Vercel

1. **导入项目**
   ```bash
   # 安装Vercel CLI
   npm i -g vercel
   
   # 在static-site目录中
   cd static-site
   vercel
   ```

2. **GitHub集成**
   - 在 [vercel.com](https://vercel.com) 导入GitHub仓库
   - 选择静态网站模板
   - 自动部署

### 方法4: 传统Web服务器

1. **Apache/Nginx**
   ```bash
   # 复制文件到Web根目录
   sudo cp -r static-site/* /var/www/html/
   
   # 设置权限
   sudo chown -R www-data:www-data /var/www/html/
   ```

2. **本地测试**
   ```bash
   # 使用Python简单服务器
   cd static-site
   python3 -m http.server 8000
   
   # 访问 http://localhost:8000
   ```

## 🔧 自定义配置

### 修改网站信息

1. **更新联系信息**
   ```html
   <!-- 在所有HTML文件中搜索并替换 -->
   contact@awesome-optimizers.com
   ```

2. **更新GitHub链接**
   ```html
   <!-- 替换为你的仓库链接 -->
   https://github.com/tianshijing/ScalingOpt
   ```

3. **更新作者信息**
   ```html
   <!-- 在页脚和社区页面中更新 -->
   Juanxi Tian, Siyuan Li, Zedong Wang
   ```

### 添加自定义域名

1. **GitHub Pages**
   - 在仓库设置中添加自定义域名
   - 配置DNS记录指向GitHub Pages

2. **Netlify**
   - 在域名设置中添加自定义域名
   - 配置DNS记录

3. **Vercel**
   - 在项目设置中添加域名
   - 配置DNS记录

## 📊 性能优化

### 生产环境优化

1. **压缩资源**
   ```bash
   # 使用工具压缩HTML/CSS/JS
   npm install -g html-minifier
   html-minifier --collapse-whitespace --remove-comments *.html
   ```

2. **图片优化**
   ```bash
   # 压缩图片
   npm install -g imagemin-cli
   imagemin Fig/*.jpg --out-dir=Fig/optimized
   ```

3. **启用压缩**
   - 在Web服务器中启用Gzip压缩
   - 配置缓存头

### CDN配置

1. **使用CDN**
   ```html
   <!-- 替换本地资源为CDN -->
   <script src="https://cdn.tailwindcss.com"></script>
   <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
   ```

2. **自定义CDN**
   - 上传静态资源到CDN
   - 更新HTML中的资源链接

## 🔍 SEO优化

### 基本SEO设置

1. **更新meta标签**
   ```html
   <meta name="description" content="你的网站描述">
   <meta name="keywords" content="优化器,机器学习,深度学习">
   ```

2. **添加结构化数据**
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "WebSite",
     "name": "ScalingOpt",
     "url": "https://yourdomain.com"
   }
   </script>
   ```

3. **创建sitemap.xml**
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourdomain.com/</loc>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://yourdomain.com/optimizers.html</loc>
       <priority>0.8</priority>
     </url>
   </urlset>
   ```

## 📱 移动端优化

### 移动端测试

1. **响应式测试**
   - 使用浏览器开发者工具
   - 测试不同屏幕尺寸
   - 检查触摸交互

2. **性能测试**
   - 使用Google PageSpeed Insights
   - 测试移动端加载速度
   - 优化图片和资源

## 🔒 安全配置

### HTTPS配置

1. **自动HTTPS**
   - GitHub Pages: 自动提供HTTPS
   - Netlify: 自动提供HTTPS
   - Vercel: 自动提供HTTPS

2. **自定义域名HTTPS**
   - 配置SSL证书
   - 强制HTTPS重定向

### 安全头设置

```html
<!-- 在HTML头部添加安全头 -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' https:">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
```

## 📈 分析和监控

### 添加分析工具

1. **Google Analytics**
   ```html
   <!-- 在HTML头部添加 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **其他分析工具**
   - Plausible Analytics
   - Fathom Analytics
   - Simple Analytics

## 🛠️ 故障排除

### 常见问题

1. **页面无法加载**
   - 检查文件路径是否正确
   - 确认所有资源文件都已上传
   - 检查Web服务器配置

2. **样式不显示**
   - 确认CSS文件路径正确
   - 检查Tailwind CSS CDN链接
   - 验证自定义CSS语法

3. **JavaScript功能不工作**
   - 检查浏览器控制台错误
   - 确认JavaScript文件路径正确
   - 验证数据文件格式

4. **图片不显示**
   - 检查图片文件路径
   - 确认图片文件已上传
   - 验证图片格式支持

### 调试工具

1. **浏览器开发者工具**
   - F12打开开发者工具
   - 检查Console错误
   - 查看Network请求

2. **在线工具**
   - W3C HTML验证器
   - CSS验证器
   - JavaScript语法检查器

## 📞 支持

如果遇到问题，可以：

1. 查看README.md文档
2. 检查GitHub Issues
3. 联系维护者
4. 提交新的Issue

---

**提示**: 建议先在本地测试网站功能，确认一切正常后再部署到生产环境。
