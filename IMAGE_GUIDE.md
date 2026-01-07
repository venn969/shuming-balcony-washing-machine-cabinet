# 图片交互功能使用指南

## 一、CDN资源引入

在HTML页面的`<head>`标签中引入以下CDN资源：

```html
<!-- Bootstrap CSS (可选，用于布局) -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Swiper CSS (轮播图必需) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">

<!-- 图片交互样式 -->
<link rel="stylesheet" href="assets/css/image-interactions.css">
```

在页面底部（`</body>`标签前）引入JavaScript资源：

```html
<!-- jQuery (必需) -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js"></script>

<!-- Swiper JS (轮播图必需) -->
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

<!-- 图片交互功能 -->
<script src="assets/js/image-interactions.js"></script>
```

## 二、功能使用说明

### 1. 图片懒加载

**用途**：提升页面加载速度，只加载可视区域内的图片

**使用方法**：
```html
<img class="lazy" data-src="图片路径" alt="图片描述">
```

**示例**：
```html
<div class="product-item">
    <img class="item-img lazy" data-src="photos/product-1.jpg" alt="铝合金洗衣机柜">
</div>
```

**注意事项**：
- 必须添加`lazy`类名
- 使用`data-src`属性存储图片路径，而不是`src`属性
- 页面滚动时会自动加载进入可视区域的图片

---

### 2. 图片轮播

#### 2.1 首页Banner轮播

**用途**：展示品牌形象、核心卖点

**HTML结构**：
```html
<div class="swiper hero-slider">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="photos/banner-1.jpg" alt="工厂直供 定制尺寸">
        </div>
        <div class="swiper-slide">
            <img src="photos/banner-2.jpg" alt="免费测量 上门安装">
        </div>
        <div class="swiper-slide">
            <img src="photos/banner-3.jpg" alt="源头厂家 性价比高">
        </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>
```

**特点**：
- 自动播放（5秒切换）
- 支持手动切换
- 渐变过渡效果
- 响应式设计（PC: 600px, 移动端: 300px）

---

#### 2.2 产品详情页轮播

**用途**：展示产品多角度图片

**HTML结构**：
```html
<div class="swiper product-gallery">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img class="img-zoom" src="photos/product-main.jpg" alt="产品主图">
        </div>
        <div class="swiper-slide">
            <img class="img-zoom" src="photos/product-side.jpg" alt="产品侧面图">
        </div>
        <div class="swiper-slide">
            <img class="img-zoom" src="photos/product-detail.jpg" alt="材质特写">
        </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<!-- 缩略图 -->
<div class="swiper product-thumbs">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="photos/product-main.jpg" alt="产品主图">
        </div>
        <div class="swiper-slide">
            <img src="photos/product-side.jpg" alt="产品侧面图">
        </div>
        <div class="swiper-slide">
            <img src="photos/product-detail.jpg" alt="材质特写">
        </div>
    </div>
</div>
```

**特点**：
- 主图与缩略图联动
- 支持点击放大查看
- 响应式设计（PC: 500px, 移动端: 350px）

---

#### 2.3 案例轮播

**用途**：展示安装案例实景

**HTML结构**：
```html
<div class="swiper case-gallery">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img class="img-zoom" src="photos/case-1.jpg" alt="小阳台案例">
        </div>
        <div class="swiper-slide">
            <img class="img-zoom" src="photos/case-2.jpg" alt="大阳台案例">
        </div>
        <div class="swiper-slide">
            <img class="img-zoom" src="photos/case-3.jpg" alt="现代风格案例">
        </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>
```

**特点**：
- 自动播放（4秒切换）
- 支持点击放大查看
- 响应式设计（PC: 600px, 移动端: 400px）

---

### 3. 图片放大查看

**用途**：点击图片查看大图

**使用方法**：
```html
<img class="img-zoom" src="图片路径" alt="图片描述">
```

**示例**：
```html
<img class="img-zoom" src="photos/product-1.jpg" alt="铝合金洗衣机柜">
```

**特点**：
- 点击图片弹出模态框
- 支持ESC键关闭
- 点击背景关闭
- 响应式设计

---

### 4. 产品/案例筛选

**用途**：按材质、风格筛选产品或案例

**HTML结构**：
```html
<!-- 筛选按钮 -->
<div class="text-center mb-4">
    <button class="filter-btn active" data-type="all" data-category="all">全部</button>
    <button class="filter-btn" data-type="aluminum" data-category="all">铝合金</button>
    <button class="filter-btn" data-type="stainless" data-category="all">不锈钢</button>
    <button class="filter-btn" data-type="wood" data-category="all">实木</button>
</div>

<!-- 产品列表 -->
<div class="row">
    <div class="col-md-4 mb-4 product-item" data-type="aluminum" data-category="modern">
        <img class="item-img lazy" data-src="photos/product-1.jpg" alt="铝合金洗衣机柜">
    </div>
    <div class="col-md-4 mb-4 product-item" data-type="stainless" data-category="modern">
        <img class="item-img lazy" data-src="photos/product-2.jpg" alt="不锈钢洗衣机柜">
    </div>
    <div class="col-md-4 mb-4 product-item" data-type="wood" data-category="luxury">
        <img class="item-img lazy" data-src="photos/product-3.jpg" alt="实木洗衣机柜">
    </div>
</div>
```

**参数说明**：
- `data-type`：材质类型（aluminum、stainless、wood等）
- `data-category`：风格类别（modern、luxury、simple等）

---

### 5. 鼠标悬停效果

**用途**：提升交互体验，显示产品信息

**HTML结构**：
```html
<div class="product-item">
    <img class="item-img lazy" data-src="photos/product-1.jpg" alt="铝合金洗衣机柜">
    <div class="item-overlay">
        <h4>铝合金洗衣机柜</h4>
        <p>防水防锈 | 定制尺寸</p>
        <button class="btn-view">查看详情</button>
    </div>
</div>
```

**效果**：
- 鼠标悬停时图片放大
- 显示遮罩层和产品信息
- 平滑过渡动画

---

### 6. 瀑布流布局

**用途**：展示案例图片，美观且节省空间

**HTML结构**：
```html
<div class="masonry-grid">
    <div class="masonry-item">
        <img class="lazy img-zoom" data-src="photos/case-1.jpg" alt="小阳台案例">
    </div>
    <div class="masonry-item">
        <img class="lazy img-zoom" data-src="photos/case-2.jpg" alt="大阳台案例">
    </div>
    <div class="masonry-item">
        <img class="lazy img-zoom" data-src="photos/case-3.jpg" alt="现代风格案例">
    </div>
</div>
```

**特点**：
- 自适应布局
- 支持懒加载
- 支持点击放大查看
- 响应式设计

---

## 三、图片命名规范

为了方便管理和CDN缓存，建议按以下规范命名图片：

### 品牌形象图
```
brand_banner_01.jpg      # 品牌Banner
brand_banner_02.jpg
factory_gate_01.jpg      # 工厂大门
factory_workshop_01.jpg  # 生产车间
factory_line_01.jpg      # 生产线
cert_license_01.jpg      # 营业执照
cert_environment_01.jpg # 环保认证
cert_quality_01.jpg      # 质量检测报告
```

### 产品核心图
```
product_aluminum_01.jpg      # 铝合金产品主图
product_aluminum_02.jpg      # 铝合金产品侧面图
product_aluminum_detail_01.jpg # 铝合金产品材质特写
product_stainless_01.jpg     # 不锈钢产品主图
product_stainless_detail_01.jpg # 不锈钢产品材质特写
product_wood_01.jpg          # 实木产品主图
product_wood_detail_01.jpg   # 实木产品材质特写
```

### 案例实景图
```
case_small_balcony_01.jpg   # 小阳台案例
case_large_balcony_01.jpg   # 大阳台案例
case_modern_01.jpg          # 现代风格案例
case_simple_01.jpg          # 简约风格案例
case_luxury_01.jpg          # 轻奢风格案例
case_feedback_01.jpg        # 客户反馈图
```

### 辅助说明图
```
process_step1_measure.jpg   # 测量流程
process_step2_design.jpg    # 设计流程
process_step3_produce.jpg   # 生产流程
process_step4_install.jpg   # 安装流程
guide_measure_01.jpg        # 测量指南
material_compare_01.jpg     # 材质对比
```

---

## 四、CDN优化建议

### 1. 响应式图片加载

使用CDN的URL参数指定不同尺寸：

```html
<!-- PC端 -->
<img src="https://cdn.shuming.com/product_01.jpg?width=800" alt="产品图">

<!-- 移动端 -->
<img src="https://cdn.shuming.com/product_01.jpg?width=400" alt="产品图">
```

### 2. 图片格式转换

使用WebP格式减少文件大小：

```html
<picture>
    <source srcset="https://cdn.shuming.com/product_01.jpg?format=webp" type="image/webp">
    <img src="https://cdn.shuming.com/product_01.jpg" alt="产品图">
</picture>
```

### 3. 图片预加载

首屏重要图片使用预加载：

```html
<link rel="preload" href="https://cdn.shuming.com/brand_banner_01.jpg" as="image">
```

---

## 五、各页面应用示例

### 首页 (index.html)
- Banner轮播图（3-4张）
- 核心产品展示（4-6张，懒加载+悬停效果）
- 工厂实力模块（2-3张）
- 案例展示模块（3-4张，懒加载）
- 信任模块（2-3张）

### 产品中心 (products.html)
- 产品分类筛选
- 产品列表（懒加载+悬停效果）
- 产品详情（轮播+放大查看）

### 案例展示 (cases.html)
- 案例分类筛选
- 案例列表（瀑布流+懒加载）
- 案例详情（轮播+放大查看）

### 关于我们 (about.html)
- 工厂全景图
- 生产车间图
- 团队展示图
- 资质证书图

### 联系我们 (contact.html)
- 工厂地址图
- 联系方式图
- 安装团队图

---

## 六、常见问题

### Q1: 图片懒加载不生效？
**A**: 检查以下几点：
1. 是否正确引入了jQuery
2. 图片是否添加了`lazy`类名
3. 是否使用`data-src`而不是`src`

### Q2: 轮播图不显示？
**A**: 检查以下几点：
1. 是否正确引入了Swiper CSS和JS
2. HTML结构是否正确
3. 图片路径是否正确

### Q3: 图片放大查看功能不工作？
**A**: 检查以下几点：
1. 图片是否添加了`img-zoom`类名
2. 是否正确引入了image-interactions.js
3. 是否有其他JavaScript冲突

---

## 七、性能优化建议

1. **图片压缩**：使用TinyPNG或CDN自动压缩功能
2. **懒加载**：所有非首屏图片使用懒加载
3. **CDN加速**：将图片上传至CDN，开启加速
4. **格式优化**：优先使用WebP格式
5. **尺寸适配**：根据设备加载不同尺寸的图片

---

## 八、示例页面

完整的示例页面请查看：`image-demo.html`

该页面展示了所有图片交互功能的使用方法，可以直接在浏览器中打开查看效果。

---

## 九、技术支持

如有问题，请参考：
- Swiper官方文档：https://swiperjs.com/
- jQuery官方文档：https://jquery.com/
- Bootstrap官方文档：https://getbootstrap.com/
