# 舒铭阳台洗衣机柜网站

一个专业的阳台洗衣机柜生产厂家直销网站，使用纯HTML/CSS/JS开发，通过CDN引入Bootstrap和jQuery，轻量级且易于维护。

## 项目特点

- **多页面架构**：包含首页、产品中心、案例展示、关于我们、联系我们等页面
- **CDN引入资源**：使用Bootstrap 5、jQuery 3.7、Font Awesome等CDN资源
- **响应式设计**：完美适配PC、平板、手机等各种设备
- **JS交互功能**：导航栏吸顶、回到顶部、产品筛选、表单验证等
- **无复杂框架**：纯原生开发，易于理解和修改

## 技术栈

- **HTML5**：页面结构
- **CSS3**：样式设计（Bootstrap 5 + 自定义样式）
- **JavaScript**：交互功能（jQuery 3.7 + 原生JS）
- **Font Awesome**：图标库

## 项目结构

```
舒铭洗衣机柜网站/
├── index.html          # 首页
├── products.html       # 产品中心
├── cases.html          # 案例展示
├── about.html          # 关于我们
├── contact.html        # 联系我们
├── header.html         # 公共头部
├── footer.html         # 公共底部
├── assets/             # 静态资源文件夹
│   ├── css/            # 自定义样式
│   │   └── main.css    # 全局样式
│   ├── js/             # 自定义JS
│   │   └── main.js     # 全局交互
│   └── images/         # 本地图片
└── README.md           # 项目说明
```

## 功能特性

### 首页（index.html）
- 品牌Banner展示
- 核心卖点介绍（厂家直销、定制尺寸、防水材质、本地安装）
- 热销产品展示
- 客户案例展示
- 在线留言表单

### 产品中心（products.html）
- 产品分类筛选（铝合金、实木、多层实木、PVC）
- 产品详情展示
- 定制流程说明
- 在线咨询

### 案例展示（cases.html）
- 多种风格案例展示（现代简约、北欧、中式、轻奢等）
- 客户评价展示
- 在线留言表单

### 关于我们（about.html）
- 公司简介
- 企业愿景和使命
- 核心优势
- 团队风采
- 数据统计

### 联系我们（contact.html）
- 联系方式展示
- 在线留言表单
- 服务流程
- 常见问题（FAQ）

## JS交互功能

### 1. 导航栏滚动吸顶
```javascript
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $("#mainNavbar").addClass("fixed-top shadow");
    } else {
        $("#mainNavbar").removeClass("fixed-top shadow");
    }
});
```

### 2. 回到顶部按钮
```javascript
$("#backToTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
});
```

### 3. 产品筛选
```javascript
$(".filter-btn").click(function() {
    var type = $(this).data("type");
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
    
    if (type === "all") {
        $(".product-item").show();
    } else {
        $(".product-item").hide();
        $(".product-item[data-type='" + type + "']").show();
    }
});
```

### 4. 表单验证
```javascript
$("#contactForm").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();
    
    if (!name) {
        alert("请输入您的姓名！");
        return false;
    }
    
    if (!phone) {
        alert("请输入您的联系电话！");
        return false;
    }
    
    var reg = /^1[3-9]\d{9}$/;
    if (!reg.test(phone)) {
        alert("请输入正确的手机号！");
        return false;
    }
    
    if (!message) {
        alert("请输入留言内容！");
        return false;
    }
    
    alert("留言成功，我们会尽快联系您！");
    $(this)[0].reset();
});
```

## 使用方法

### 本地预览

1. **直接打开**
   - 直接用浏览器打开 `index.html` 文件即可预览

2. **使用Live Server（推荐）**
   - 安装VS Code的Live Server插件
   - 右键点击 `index.html`，选择"Open with Live Server"
   - 自动在浏览器中打开，支持热更新

### 部署上线

#### 方式1：FTP上传
1. 购买域名和服务器（如阿里云、腾讯云）
2. 使用FileZilla等FTP工具上传文件到服务器
3. 配置域名解析

#### 方式2：GitHub Pages（免费）
1. 将项目上传到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为发布源
4. 通过 `https://username.github.io/repo-name` 访问

## 自定义修改

### 修改联系方式
在所有HTML文件中搜索并替换以下内容：
- 电话：400-888-8888
- 手机：138-0000-0000
- 微信：shumingxj
- 邮箱：contact@shuming.com
- 地址：广东省佛山市顺德区XX工业园

### 替换图片
将 `assets/images/` 文件夹中的占位图片替换为实际产品图片和案例图片。

### 修改样式
编辑 `assets/css/main.css` 文件，自定义网站的颜色、字体、间距等样式。

### 修改内容
直接编辑各个HTML文件的内容，修改文字、图片、链接等信息。

## CDN资源

本项目使用的CDN资源：

- Bootstrap 5.3.0 CSS: `https://cdn.bootcdn.net/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css`
- Bootstrap 5.3.0 JS: `https://cdn.bootcdn.net/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js`
- jQuery 3.7.1: `https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js`
- Font Awesome 6.4.0: `https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.0/css/all.min.css`

## 浏览器兼容性

- Chrome（推荐）
- Firefox
- Edge
- Safari
- 移动端浏览器

## 注意事项

1. **图片优化**：建议使用TinyPNG等工具压缩图片，提高加载速度
2. **表单提交**：当前表单仅做前端验证，如需后端处理，需要对接服务器
3. **SEO优化**：建议根据实际需求修改meta标签和页面标题
4. **HTTPS**：上线后建议配置HTTPS证书，提高安全性

## 后续优化建议

1. 添加产品详情页
2. 实现图片懒加载
3. 添加在线客服功能
4. 接入百度统计等数据分析工具
5. 优化移动端体验
6. 添加产品搜索功能

## 联系方式

如有问题或建议，请联系：
- 电话：400-888-8888
- 邮箱：contact@shuming.com

## 许可证

本项目仅供学习和参考使用。
