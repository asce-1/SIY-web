# 苏州刺绣独立站 - UI设计需求文档

## 一、项目背景

**品牌名称**: [待定，建议英文品牌名]  
**产品**: 苏州刺绣/真丝文创（装饰画、书签、眼罩、团扇）  
**目标市场**: 美国（US）  
**品牌定位**: 东方手工艺 × 现代极简（Eastern Handcraft × Modern Minimalism）  
**核心卖点**: 镇湖绣娘手工刺绣、非遗技艺、现代设计审美  

---

## 二、品牌调性描述

**关键词**: Elegant, Artisanal, Minimalist, Authentic, Premium

**参考品牌**:
- Etsy高端手工品牌（如：Olive & Ollie, Stitch People）
- 日本手工品牌（如：Muji, Kinto）
- 西方高端家居（如：West Elm, Anthropologie）

**视觉风格**:
- 主色调：米白/象牙白背景 + 刺绣色彩点缀（靛蓝、朱红、墨绿，少量使用）
- 辅助色：浅灰、原木色
- **避免**：大红大绿、传统中国风浓重配色、繁体字
- 字体：英文衬线体（Serif）显优雅（如：Playfair Display, Merriweather），中文可用思源宋体
- 图片风格：白底主图 + 微距针法细节 + 绣娘工作场景（自然光、不过度修图）

---

## 三、页面结构与设计要求

### 3.1 首页 (Homepage)

**目标**: 3秒内传达品牌价值，引导用户浏览产品

**区块设计**:

1. **Hero区** (首屏)
   - 背景：大幅苏绣作品特写（微距，展示针法细节）
   - 标题：`Handcrafted Suzhou Embroidery` (大号衬线体)
   - 副标题：`Each stitch tells a 2,500-year-old story` (小号无衬线体)
   - CTA按钮：`Shop Collection` (实心按钮，刺绣靛蓝色)
   - 可选：微动画（针线穿梭的微妙动效）

2. **品牌故事节选区**
   - 左侧：绣娘工作场景图（自然光，绣娘侧影，不露脸或背影）
   - 右侧：短文本 `"In Suzhou's Zhenhu District, master embroiderers preserve a 2,500-year-old craft. Each piece is hand-stitched with silk thread—no two are exactly alike."`
   - 链接：`Read Our Story →`

3. **热销产品区**
   - 标题：`Best Sellers`
   - 网格：3-4个产品卡片（响应式，移动端单列）
   - 每个卡片：产品图 + 名称 + 价格 + 快速查看按钮

4. **工艺展示区** (信任背书)
   - 标题：`The Art of Suzhou Embroidery`
   - 3个图标+短文：
     - 🧵 `Hand-stitched` - "Every piece takes 10-40 hours to complete"
     - 🌿 `Silk Thread` - "100% mulberry silk, naturally dyed"
     - 🌍 `Ships from Suzhou` - "7-15 days to US, carefully packaged"

5. **Instagram/社交媒体引流区**
   - 标题：`Join Our Community`
   - Instagram feed嵌入 或 用户生成内容（UGC）展示
   - CTA：`Follow @[brandname] on Instagram`

6. **Footer**
   - 邮件订阅框：`Get 10% off your first order` (邮件营销入口)
   - 快速链接：Shop、About、FAQ、Contact
   - 支付方式图标：PayPal、Stripe、Apple Pay
   - 社交媒体图标：Instagram、Pinterest、TikTok

---

### 3.2 产品列表页 (Shop / All Products)

**目标**: 帮助用户快速找到想要的产品

**设计要点**:
- **筛选侧边栏**（移动端折叠）:
  - 产品类型：Wall Art / Bookmarks / Eye Masks / Fans
  - 价格区间：$0-25 / $25-50 / $50-100 / $100+
  - 是否可定制：Yes / No
- **排序**: Featured / Newest / Price Low-High / Price High-Low
- **产品网格**: 3列（桌面端），2列（平板），1列（手机）
- **产品卡片**:
  - 产品图（正方形或4:5比例）
  - 快速添加按钮（悬停显示）
  - 产品名 + 价格
  - 标签：`Customizable` / `Best Seller` / `New`

---

### 3.3 产品详情页 (Product Detail Page) - **最重要！**

**目标**: 说服用户购买，处理价格疑虑

**设计要点**:

1. **产品图片区** (左侧，桌面端)
   - 主图：白底产品图（正方形）
   - 图片画廊：点击可放大查看针法细节（**这是转化率关键！**）
   - 缩略图列表（可横向滚动）
   - 可选：短视频嵌入（针法微距视频，自动静音播放）

2. **产品信息区** (右侧，桌面端)
   - 产品名：`Suzhou Embroidery Wall Art - Peony Pattern`
   - 价格：`$89.00` (大号字体)
   - 简短描述：`Hand-stitched silk embroidery artwork, perfect for modern home decor. Each piece is unique.`
   - **规格选择器** (Variants):
     - Size: Small (8"×10") / Medium (12"×16") / Large (16"×20") 
     - Pattern: Peony / Cat / Abstract (如果有不同图案)
   - **定制选项** (如果是可定制产品):
     - 文本框：`Add custom initials (max 3 letters)` 
     - 价格提示：`+$15.00`
   - **数量选择器** + **Add to Cart按钮** (实心，醒目颜色)
   - **配送信息**: `Ships in 3-5 days • Free shipping over $75`
   - **信任标志**: ✅ Handmade ✅ Silk Thread ✅ Ships from Suzhou

3. **产品详情区** (下方，可折叠)
   - **Description标签**: 详细产品描述、尺寸、材质（100% mulberry silk）
   - **Shipping & Returns标签**: 配送时间、退换政策
   - **Reviews标签**: 客户评价（如果有）

4. **相关产品推荐** (底部)
   - 标题：`You may also like`
   - 4个产品卡片

---

### 3.4 关于我们页 (About Us) - **溢价关键页！**

**目标**: 讲述品牌故事，建立情感连接，支撑高溢价

**设计要点**:
1. **Hero图**: 镇湖绣娘工作场景大图（横幅，有氛围感）
2. **故事叙述** (长滚动页面):
   - 第一段：Suzhou Embroidery的历史（2500年）
   - 第二段：Zhenhu District的故事（"Embroidery Capital"）
   - 第三段：我们的绣娘（配绣娘工作照，不要摆拍）
   - 第四段：我们的使命（"Preserve tradition, design for modern homes"）
3. **数据展示**:
   - `2,500+` years of craftsmanship
   - `500+` embroiderers in Zhenhu
   - `10-40` hours per piece
4. **团队/绣娘介绍** (可选): 2-3位绣娘的照片+名字+专长

---

### 3.5 购物车页 (Cart)

**设计要点**:
- 商品列表：图片 + 名称 + 规格 + 单价 + 数量调整 + 删除
- 预估配送时间：`Estimated delivery: 7-12 business days`
- 优惠码输入框
- 小计 + 运费 + 总价
- `Proceed to Checkout` 按钮
- `Continue Shopping` 链接
- 推荐产品（可选）："Frequently bought together"

---

### 3.6 结账页 (Checkout)

**注意**: 结账页由Shopify托管，你只能定制样式（颜色、字体），不能改布局

**定制要点**:
- 品牌色应用到按钮和链接
- 显示产品缩略图和定制信息
- 信任标志：SSL锁、支付方式图标、退换政策链接

---

## 四、特殊功能与交互设计

### 4.1 产品图片放大功能
- **必须！** 用户点击产品图可以放大查看针法细节
- 建议：使用lightbox或zoom-in功能，支持手势缩放（手机端）

### 4.2 定制输入框交互
- 用户输入绣字时，实时显示价格变化（`+$15.00`）
- 可选：显示字符限制提示（`Max 3 letters`）

### 4.3 产品视频嵌入
- 产品页嵌入针法微距视频（15-30秒，循环播放，静音自动播放）
- 视频封面用针法细节图

### 4.4 移动端适配
- **60%+流量来自手机**（美国市场），必须优先移动端体验
- 触摸友好的按钮尺寸（至少44×44px）
- 简化移动端导航（汉堡菜单）

---

## 五、技术与性能要求

### 5.1 性能指标
- **LCP** (最大内容绘制): < 2.5秒
- **FID** (首次输入延迟): < 100毫秒
- **CLS** (累积布局偏移): < 0.1
- Google PageSpeed Insights 评分: 90+ (移动端和桌面端)

### 5.2 SEO基础
- 每页可自定义Title / Meta Description / OG图
- 产品页结构化数据（Rich Snippet）
- 语义化HTML标签

### 5.3 分析与追踪
- Google Analytics 4 (GA4) 埋点
- Meta Pixel (Facebook/Instagram广告)
- TikTok Pixel
- Pinterest Tag (刺绣品类Pinterest很重要！)

---

## 六、交付物清单（给开发者/AI）

1. **Figma/Sketch设计稿** (或Gemini Canvas导出)
   - 首页
   - 产品列表页
   - 产品详情页
   - About Us页
   - 购物车页
   - 移动端适配视图

2. **设计系统文档**
   - 色彩 palette (Hex codes)
   - 字体样式（Heading、Body、Caption）
   - 组件库（按钮、输入框、卡片等）

3. **图片素材** (占位图或真实产品图)
   - 产品白底图（正方形）
   - 绣娘工作场景图
   - 品牌logo（如果已有）

---

## 七、参考网站（给Gemini看）

**直接发给Gemini的这些链接，说"参考这些网站的视觉风格"**:

1. **Etsy高端刺绣店**:
   - [Olive & Ollie](https://www.etsy.com/shop/OliveAndOllie) - 定制刺绣肖像
   - [Stitch People](https://stitchpeople.com) - 家庭刺绣定制

2. **日本/东方美学品牌**:
   - [Kinto](https://www.kinto-europe.com) - 日式极简家居
   - [Muji US](https://www.muji.us) - 日式简约

3. **西方高端家居**:
   - [West Elm](https://www.westelm.com) - 现代家居装饰
   - [Anthropologie](https://www.anthropologie.com) - 波西米亚/手工风

4. **刺绣/手工艺独立站案例**:
   - [Needlepoint.com](https://www.needlepoint.com) - 刺绣用品（参考导航和筛选）
   - [DMC](https://www.dmc.com/us/) - 刺绣线品牌（参考产品页）

---

## 八、给Gemini的Prompt模板

**你可以直接复制这段话发给Gemini Canvas**:

```
我正在设计一个面向美国市场的苏州刺绣独立站，品牌定位是"东方手工艺 × 现代极简"。

请帮我设计首页的UI，要求：
1. Hero区：大幅苏绣作品特写背景，标题"Handcrafted Suzhou Embroidery"，副标题强调2500年手工技艺
2. 品牌故事区：左侧绣娘工作场景图，右侧短文
3. 热销产品区：3-4个产品卡片网格
4. 工艺展示区：3个图标+短文（手工、真丝、配送）
5. 邮件订阅Footer

视觉风格：米白背景、靛蓝/朱红点缀、衬线体英文标题、不过度中国风。参考West Elm和Etsy高端手工品牌的视觉风格。

请先给我线框图（wireframe），然后我们再细化视觉设计。
```

---

**文档版本**: v1.0  
**创建日期**: 2026-06-13  
**创建人**: WorkBuddy AI Assistant
