# 程式碼實作指令

## 🎯 目標
根據 Use Case 文件，實作高品質、可維護、可擴展的程式碼。

## 🏗️ 實作原則

### 架構設計原則
1. **單一職責原則 (SRP)**
   ```javascript
   // ❌ 錯誤：混合多個職責
   class UserManager {
     createUser() { }
     sendEmail() { }
     generateReport() { }
   }
   
   // ✅ 正確：職責分離
   class UserService {
     createUser() { }
   }
   class EmailService {
     sendEmail() { }
   }
   class ReportService {
     generateReport() { }
   }
   ```

2. **開放封閉原則 (OCP)**
   ```javascript
   // 使用策略模式實現擴展
   class PaymentProcessor {
     constructor(strategy) {
       this.strategy = strategy;
     }
     process(amount) {
       return this.strategy.process(amount);
     }
   }
   ```

3. **依賴反轉原則 (DIP)**
   ```javascript
   // 依賴注入
   class OrderService {
     constructor(database, emailService, logger) {
       this.db = database;
       this.email = emailService;
       this.logger = logger;
     }
   }
   ```

## 📝 程式碼標準

### JavaScript/TypeScript 規範
```javascript
/**
 * 模組結構範例
 */

// 1. 導入依賴
import { validateInput, formatOutput } from './utils';
import { DATABASE_CONFIG } from './config';

// 2. 常數定義
const MAX_RETRY_ATTEMPTS = 3;
const TIMEOUT_DURATION = 5000;

// 3. 類型定義 (TypeScript)
interface UserData {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// 4. 主要類別/函數
export class UserService {
  private db: Database;
  private cache: Cache;
  
  constructor(dependencies: ServiceDependencies) {
    this.db = dependencies.database;
    this.cache = dependencies.cache;
  }
  
  /**
   * 創建新使用者
   * @param userData - 使用者資料
   * @returns Promise<User>
   * @throws {ValidationError} 當資料驗證失敗時
   */
  async createUser(userData: UserData): Promise<User> {
    // 輸入驗證
    const validatedData = await this.validateUserData(userData);
    
    // 業務邏輯
    try {
      const user = await this.db.transaction(async (trx) => {
        // 檢查重複
        const existing = await trx.findUserByEmail(validatedData.email);
        if (existing) {
          throw new DuplicateUserError('Email already exists');
        }
        
        // 創建使用者
        const newUser = await trx.createUser(validatedData);
        
        // 發送歡迎郵件
        await this.sendWelcomeEmail(newUser);
        
        return newUser;
      });
      
      // 更新快取
      await this.cache.set(`user:${user.id}`, user);
      
      // 發送事件
      this.eventBus.emit('user:created', user);
      
      return user;
    } catch (error) {
      this.logger.error('Failed to create user', { error, userData });
      throw error;
    }
  }
}

// 5. 輔助函數
function validateUserData(data: any): UserData {
  // 驗證邏輯
}

// 6. 導出
export { UserService, UserData };
```

### HTML/CSS 最佳實踐
```html
<!-- 語意化 HTML 結構 -->
<article class="product-card" data-product-id="123">
  <header class="product-card__header">
    <h2 class="product-card__title">產品名稱</h2>
    <div class="product-card__rating" aria-label="評分：4.5 顆星">
      <span class="sr-only">4.5 out of 5 stars</span>
      <!-- 星星圖示 -->
    </div>
  </header>
  
  <figure class="product-card__image-container">
    <img src="product.jpg" 
         alt="產品描述" 
         loading="lazy"
         class="product-card__image">
  </figure>
  
  <div class="product-card__content">
    <p class="product-card__description">產品描述文字</p>
    <div class="product-card__price-container">
      <span class="product-card__price">$99.99</span>
      <span class="product-card__original-price">$129.99</span>
    </div>
  </div>
  
  <footer class="product-card__actions">
    <button class="btn btn--primary" 
            data-action="add-to-cart"
            aria-label="將產品加入購物車">
      加入購物車
    </button>
  </footer>
</article>
```

```css
/* CSS 模組化和 BEM 命名 */
.product-card {
  --card-padding: 1rem;
  --card-radius: 8px;
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  display: flex;
  flex-direction: column;
  padding: var(--card-padding);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.product-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.product-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .product-card {
    --card-padding: 0.75rem;
  }
  
  .product-card__title {
    font-size: 1.125rem;
  }
}

/* 深色模式支援 */
@media (prefers-color-scheme: dark) {
  .product-card {
    --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    background-color: var(--color-surface-dark);
  }
}
```

## 🔧 實作流程

### 1. 專案結構設計
```
project/
├── src/
│   ├── components/       # UI 元件
│   │   ├── common/      # 共用元件
│   │   └── features/    # 功能元件
│   ├── services/        # 業務邏輯
│   │   ├── api/        # API 呼叫
│   │   └── data/       # 資料處理
│   ├── utils/          # 工具函數
│   ├── config/         # 配置檔案
│   └── types/          # TypeScript 類型
├── tests/              # 測試檔案
│   ├── unit/          # 單元測試
│   ├── integration/   # 整合測試
│   └── e2e/          # 端對端測試
├── docs/              # 文件
└── scripts/           # 建置腳本
```

### 2. 模組化開發
```javascript
// 功能模組範例
export class ShoppingCart {
  constructor() {
    this.items = [];
    this.observers = [];
  }
  
  // 公開 API
  addItem(product, quantity = 1) {
    const existingItem = this.findItem(product.id);
    
    if (existingItem) {
      this.updateQuantity(product.id, existingItem.quantity + quantity);
    } else {
      this.items.push({
        product,
        quantity,
        addedAt: new Date()
      });
    }
    
    this.notifyObservers('item:added', { product, quantity });
    return this;
  }
  
  // 私有方法
  #calculateSubtotal() {
    return this.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }
  
  // 觀察者模式
  subscribe(observer) {
    this.observers.push(observer);
    return () => {
      this.observers = this.observers.filter(obs => obs !== observer);
    };
  }
}
```

### 3. 錯誤處理策略
```javascript
// 自定義錯誤類別
class ApplicationError extends Error {
  constructor(message, code, statusCode) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.timestamp = new Date();
  }
}

class ValidationError extends ApplicationError {
  constructor(message, field) {
    super(message, 'VALIDATION_ERROR', 400);
    this.field = field;
  }
}

// 錯誤處理中介軟體
function errorHandler(error, req, res, next) {
  logger.error({
    error: error.message,
    stack: error.stack,
    request: {
      method: req.method,
      url: req.url,
      body: req.body
    }
  });
  
  if (error instanceof ValidationError) {
    return res.status(400).json({
      error: {
        code: error.code,
        message: error.message,
        field: error.field
      }
    });
  }
  
  if (error instanceof ApplicationError) {
    return res.status(error.statusCode).json({
      error: {
        code: error.code,
        message: error.message
      }
    });
  }
  
  // 未預期的錯誤
  res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: 'An unexpected error occurred'
    }
  });
}
```

### 4. 效能優化技巧
```javascript
// 1. 防抖和節流
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 2. 記憶化
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// 3. 虛擬滾動
class VirtualScroller {
  constructor(container, items, itemHeight) {
    this.container = container;
    this.items = items;
    this.itemHeight = itemHeight;
    this.visibleItems = [];
    
    this.init();
  }
  
  init() {
    this.containerHeight = this.container.clientHeight;
    this.totalHeight = this.items.length * this.itemHeight;
    this.visibleCount = Math.ceil(this.containerHeight / this.itemHeight);
    
    this.render();
    this.container.addEventListener('scroll', this.handleScroll.bind(this));
  }
  
  handleScroll() {
    const scrollTop = this.container.scrollTop;
    const startIndex = Math.floor(scrollTop / this.itemHeight);
    const endIndex = startIndex + this.visibleCount;
    
    this.visibleItems = this.items.slice(startIndex, endIndex);
    this.render();
  }
}

// 4. 懶加載
const lazyLoad = (function() {
  const images = [];
  const config = {
    rootMargin: '50px 0px',
    threshold: 0.01
  };
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  }, config);
  
  return {
    init() {
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  };
})();
```

## 🧪 測試策略

### 單元測試範例
```javascript
// Jest 測試範例
describe('ShoppingCart', () => {
  let cart;
  
  beforeEach(() => {
    cart = new ShoppingCart();
  });
  
  describe('addItem', () => {
    it('should add new item to empty cart', () => {
      const product = { id: '1', name: 'Product', price: 10 };
      
      cart.addItem(product, 2);
      
      expect(cart.items).toHaveLength(1);
      expect(cart.items[0]).toMatchObject({
        product,
        quantity: 2
      });
    });
    
    it('should increase quantity for existing item', () => {
      const product = { id: '1', name: 'Product', price: 10 };
      
      cart.addItem(product, 1);
      cart.addItem(product, 2);
      
      expect(cart.items).toHaveLength(1);
      expect(cart.items[0].quantity).toBe(3);
    });
    
    it('should notify observers when item is added', () => {
      const observer = jest.fn();
      const product = { id: '1', name: 'Product', price: 10 };
      
      cart.subscribe(observer);
      cart.addItem(product, 1);
      
      expect(observer).toHaveBeenCalledWith('item:added', {
        product,
        quantity: 1
      });
    });
  });
  
  describe('calculateTotal', () => {
    it('should calculate correct total with multiple items', () => {
      cart.addItem({ id: '1', price: 10 }, 2);
      cart.addItem({ id: '2', price: 15 }, 1);
      
      expect(cart.calculateTotal()).toBe(35);
    });
  });
});
```

## 🚀 部署準備

### 建置配置
```javascript
// webpack.config.js
module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
```

### 環境配置
```javascript
// config/index.js
const config = {
  development: {
    API_URL: 'http://localhost:3000/api',
    LOG_LEVEL: 'debug',
    CACHE_ENABLED: false
  },
  production: {
    API_URL: process.env.API_URL,
    LOG_LEVEL: 'error',
    CACHE_ENABLED: true
  }
};

export default config[process.env.NODE_ENV || 'development'];
```

## 💡 最佳實踐檢查清單

### 程式碼品質
- [ ] 符合 ESLint 規則
- [ ] 通過所有單元測試
- [ ] 程式碼覆蓋率 > 80%
- [ ] 無循環依賴
- [ ] 無未使用的程式碼

### 效能優化
- [ ] 首次載入時間 < 3秒
- [ ] 關鍵路徑最佳化
- [ ] 圖片和資源壓縮
- [ ] 實作快取策略
- [ ] 程式碼分割和懶加載

### 安全性
- [ ] 輸入驗證和清理
- [ ] XSS 防護
- [ ] CSRF 保護
- [ ] 敏感資料加密
- [ ] 安全的錯誤處理

### 可維護性
- [ ] 完整的 JSDoc 註解
- [ ] 模組化架構
- [ ] 清晰的命名規範
- [ ] 版本控制友好
- [ ] 部署文件完整

---

**記住**：優秀的實作不只是讓程式碼能運作，更要確保它易於理解、測試、維護和擴展。每一行程式碼都應該有其存在的理由。