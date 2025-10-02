# GitHub Pages 部署指南

## 🚀 快速部署到 GitHub Pages

### 1. 启用 GitHub Pages

1. 进入您的 GitHub 仓库设置
2. 滚动到 "Pages" 部分
3. 在 "Source" 下选择 "GitHub Actions"
4. 保存设置

### 2. 推送代码

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### 3. 自动部署

- GitHub Actions 会自动检测到推送
- 工作流会构建静态网站
- 部署到 GitHub Pages
- 网站将在 `https://yourusername.github.io/ScalingOpt` 可用

## 🔧 本地测试

### 构建静态文件

```bash
npm run build
```

这会在 `out/` 目录生成静态 HTML 文件。

### 本地预览

```bash
# 使用 Python 简单服务器
cd out
python -m http.server 8000

# 或使用 Node.js serve
npx serve out
```

## 📁 文件结构

```
out/
├── index.html          # 主页
├── optimizers/         # 优化器页面
├── benchmarks/         # 基准测试页面
├── tutorials/          # 教程页面
├── community/          # 社区页面
└── _next/             # Next.js 静态资源
```

## ⚠️ 注意事项

1. **大文件问题已解决**: 配置了 `.gitignore` 和 `.npmrc` 来避免提交大型二进制文件
2. **静态导出**: 网站现在生成纯 HTML/CSS/JS 文件，无需服务器
3. **路径配置**: 自动配置了 GitHub Pages 的子路径
4. **依赖优化**: 使用 `npm ci` 进行快速、可靠的构建

## 🐛 故障排除

### 构建失败

1. 检查 Node.js 版本 (需要 18+)
2. 清理依赖: `rm -rf node_modules package-lock.json && npm install`
3. 检查 GitHub Actions 日志

### 页面不显示

1. 确认 GitHub Pages 已启用
2. 检查仓库设置中的 Pages 配置
3. 等待几分钟让部署完成

### 路径问题

如果网站显示在子路径下有问题，检查 `next.config.js` 中的 `basePath` 配置。

## 📞 支持

如有问题，请：
1. 检查 GitHub Actions 构建日志
2. 在 Issues 中报告问题
3. 提供详细的错误信息
