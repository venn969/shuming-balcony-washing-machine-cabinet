# 舒铭阳台洗衣机柜网站 - 图片交互功能使用说明

## 概述

本文档详细说明了网站中实现的图片交互功能，包括懒加载、轮播、放大查看、筛选等功能的使用方法。

## 功能列表

### 1. 图片懒加载 (Lazy Loading)

**功能说明：**
- 自动检测图片是否进入可视区域
- 只有当图片进入可视区域时才加载
- 显著提升页面加载速度

**使用方法：**
```html
<img class="lazy" data-src="photos/image.jpg" alt="图片描述">
```

**属性说明：**
- `class="lazy"` - 标记为懒加载图片
- `data-src` - 图片实际URL（替代src属性）
- `alt` - 图片描述（必需）

**效果：**
- 图片初始状态透明度为0
- 加载完成后淡入显示
- 自动触发滚动检测

### 2. 首页Banner轮播

**功能说明：**
- 自动轮播播放
- 支持手动切换
- 响应式设计

**使用方法：**
```html
<div class="swiper hero-slider">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="photos/banner1.jpg" alt="Banner 1">
        </div>
        <div class="swiper-slide">
            <img src="photos/banner2.jpg" alt="Banner 2">
        </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>
```

**配置选项：**
- 自动播放间隔：5秒
- 切换效果：淡入淡出
- 支持分页指示器
- 支持左右箭头切换

### 3. 产品详情轮播

**功能说明：**
- 主图+缩略图联动
- 点击缩略图切换主图
- 支持放大查看

**使用方法：**
```html
<div class="swiper product-gallery">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="photos/product-main.jpg" alt="产品主图">
        </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<div class="swiper product-thumbs">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="photos/product-thumb1.jpg" alt="缩略图1">
        </div>
    </div>
</div>
```

**特性：**
- 主图高度：600px
- 缩略图高度：150px
- 缩略图数量：4个
- 当前缩略图高亮显示

### 4. 图片放大查看

**功能说明：**
- 点击图片弹出大图
- 支持关闭按钮
- 支持ESC键关闭
- 支持点击背景关闭

**使用方法：**
```html
<img class="img-zoom" src="photos/image.jpg" alt="图片描述">
```

**属性说明：**
- `class="img-zoom"` - 标记为可放大图片
- `src` - 图片URL
- `alt` - 图片描述（显示在大图下方）

**交互：**
- 鼠标悬停时显示放大图标
- 点击后弹出模态框
- 模态框居中显示
- 大图自适应屏幕尺寸

### 5. 产品/案例筛选

**功能说明：**
- 按材质筛选产品
- 按风格筛选案例
- 支持多条件组合筛选

**使用方法：**
```html
<div class="text-center mb-4">
    <button class="filter-btn active" data-type="all" data-category="all">全部</button>
    <button class="filter-btn" data-type="aluminum" data-category="all">铝合金</button>
    <button class="filter-btn" data-type="stainless" data-category="all">不锈钢</button>
</div>

<div class="product-item" data-type="aluminum" data-category="modern">
    <img src="photos/product.jpg" alt="产品">
</div>
```

**属性说明：**
- `data-type` - 材质类型（aluminum/stainless/wood）
- `data-category` - 风格分类（modern/classic）
- `class="active"` - 当前选中状态

**筛选逻辑：**
- 点击按钮切换激活状态
- 隐藏不符合条件的项目
- 显示符合条件的项目
- 支持淡入淡出动画

### 6. 鼠标悬停效果

**功能说明：**
- 图片放大效果
- 显示遮罩层
- 显示操作按钮

**使用方法：**
```html
<div class="product-item">
    <div class="product-card">
        <img class="item-img" src="photos/product.jpg" alt="产品">
        <div class="item-overlay">
            <button class="btn btn-primary">查看详情</button>
        </div>
    </div>
</div>
```

**效果说明：**
- 鼠标悬停时图片放大1.05倍
- 遮罩层淡入显示
- 按钮从下方滑入
- 过渡时间：0.3秒

### 7. 瀑布流布局

**功能说明：**
- 响应式网格布局
- 自动适应屏幕宽度
- 图片等比缩放

**使用方法：**
```html
<div class="masonry-grid">
    <div class="masonry-item">
        <img class="img-zoom" src="photos/case1.jpg" alt="案例1">
    </div>
    <div class="masonry-item">
        <img class="img-zoom" src="photos/case2.jpg" alt="案例2">
    </div>
</div>
```

**布局特点：**
- 最小列宽：300px
- 自动填充可用空间
- 间距：20px
- 支持响应式调整

## 文件结构

```
f:\拼多多网站\
├── index.html                      # 首页（已集成图片交互）
├── image-demo.html                 # 图片功能演示页面
├── photos/                         # 图片资源目录
│   ├── product-1.jpg ~ product-5.jpg
│   ├── case-1.jpg ~ case-5.jpg
│   ├── customer-1.jpg ~ customer-5.jpg
│   ├── team-1.jpg ~ team-3.jpg
│   ├── balcony-1.jpg ~ balcony-3.jpg
│   ├── cabinet-1.jpg ~ cabinet-5.jpg
│   ├── laundry-cabinet-3.jpg ~ laundry-cabinet-10.jpg
│   ├── laundry-room-2.jpg
│   └── modern-home-1.jpg ~ modern-home-2.jpg
├── assets/
│   ├── css/
│   │   ├── main.css               # 主样式文件
│   │   └── image-styles.css       # 图片交互样式
│   └── js/
│       ├── main.js                # 主JavaScript文件
│       └── image-interactions.js   # 图片交互功能
```

## CDN依赖

所有功能均通过CDN引入，无需本地安装：

```html
<!-- Swiper轮播插件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

<!-- jQuery -->
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<!-- Bootstrap -->
<link href="https://cdn.bootcdn.net/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.bootcdn.net/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
```

## 响应式设计

### PC端（>768px）
- Banner高度：600px
- 产品图：800×800px
- 案例图：1200×800px
- 瀑布流：最小列宽300px

### 移动端（≤768px）
- Banner高度：300px
- 产品图：400×400px
- 案例图：750×500px
- 瀑布流：最小列宽150px

### 小屏手机（≤480px）
- Banner高度：250px
- 按钮字体：14px
- 间距缩小

## 性能优化

### 1. 懒加载
- 非首屏图片延迟加载
- 滚动时动态检测
- 提前200px预加载

### 2. 图片格式
- 推荐使用JPG格式（实景图）
- PNG格式（透明背景图）
- 可选WebP格式（体积更小）

### 3. CDN加速
- 所有静态资源通过CDN分发
- 自动压缩和优化
- 全球节点加速

## 浏览器兼容性

- Chrome/Edge：完全支持
- Firefox：完全支持
- Safari：完全支持
- IE11：部分支持（建议升级）

## 使用示例

### 示例1：产品卡片
```html
<div class="product-item" data-type="aluminum" data-category="modern">
    <div class="product-card">
        <img class="lazy item-img" data-src="photos/product-1.jpg" alt="铝合金洗衣机柜">
        <div class="item-overlay">
            <a href="products.html" class="btn btn-light">查看详情</a>
        </div>
        <div class="card-body">
            <h5 class="card-title">铝合金洗衣机柜</h5>
            <p class="text-muted">防水防锈</p>
            <p class="price">¥1,299起</p>
        </div>
    </div>
</div>
```

### 示例2：案例展示
```html
<div class="case-item">
    <div class="case-card">
        <img class="lazy img-zoom" data-src="photos/case-1.jpg" alt="现代简约风格">
        <div class="case-overlay">
            <h5>现代简约风格</h5>
            <p>120㎡三居室阳台</p>
        </div>
    </div>
</div>
```

### 示例3：客户评价
```html
<div class="demo-card">
    <div class="demo-card-body text-center">
        <img src="photos/customer-1.jpg" alt="客户头像" 
             style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover;">
        <h5>张先生</h5>
        <p class="text-muted">"产品质量很好，安装师傅也很专业，非常满意！"</p>
        <div class="text-warning">★★★★★</div>
    </div>
</div>
```

## 常见问题

### Q1: 懒加载图片不显示？
A: 检查以下几点：
1. 确保添加了`class="lazy"`
2. 确保使用`data-src`而不是`src`
3. 检查图片路径是否正确
4. 确保已引入`image-interactions.js`

### Q2: 轮播不工作？
A: 检查以下几点：
1. 确保已引入Swiper的CSS和JS
2. 检查HTML结构是否正确
3. 确保容器有明确的高度
4. 检查是否有JavaScript错误

### Q3: 图片放大功能不生效？
A: 检查以下几点：
1. 确保添加了`class="img-zoom"`
2. 确保使用`src`属性
3. 检查是否已引入相关CSS和JS
4. 检查是否有CSS冲突

### Q4: 筛选功能不工作？
A: 检查以下几点：
1. 确保按钮有正确的`data-type`和`data-category`
2. 确保项目有对应的`data-type`和`data-category`
3. 检查是否已引入jQuery
4. 检查是否有JavaScript错误

## 技术支持

如遇到问题，请检查：
1. 浏览器控制台是否有错误信息
2. 网络请求是否正常
3. 文件路径是否正确
4. CDN是否可访问

## 更新日志

### v1.0.0 (2024-01-07)
- 初始版本发布
- 实现图片懒加载功能
- 实现Banner轮播功能
- 实现产品详情轮播功能
- 实现图片放大查看功能
- 实现产品/案例筛选功能
- 实现鼠标悬停效果
- 实现瀑布流布局
- 创建演示页面
- 编写使用文档

## 许可证

本功能模块为舒铭阳台洗衣机柜网站专用，未经授权不得用于其他项目。
