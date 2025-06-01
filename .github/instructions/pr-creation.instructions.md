# Pull Request 建立指令

## 🎯 目標
自動產生專業、完整、易於審查的 Pull Request，加速程式碼審查流程。

## 📋 PR 標準格式

### 1. PR 標題規範
```
[類型] 簡潔描述 (#Issue編號)

類型選項：
- feat: 新功能
- fix: 錯誤修復
- docs: 文件更新
- style: 程式碼風格調整（不影響功能）
- refactor: 重構（不新增功能或修復錯誤）
- perf: 效能優化
- test: 測試相關
- chore: 建置流程或輔助工具變更
```

範例：
- `feat: 新增購物車結帳功能 (#123)`
- `fix: 修復使用者登入時的記憶體洩漏問題 (#456)`
- `refactor: 重構訂單處理邏輯以提升可維護性 (#789)`

### 2. PR 描述模板
```markdown
## 📝 概述
[用 2-3 句話描述這個 PR 的目的和解決的問題]

## 🎯 關聯 Issue
Closes #[Issue編號]

## 🔄 變更類型
- [ ] 🐛 錯誤修復 (Bug fix)
- [ ] ✨ 新功能 (New feature)
- [ ] 💥 破壞性變更 (Breaking change)
- [ ] 📝 文件更新 (Documentation update)
- [ ] ♻️ 程式碼重構 (Code refactoring)
- [ ] ⚡ 效能優化 (Performance improvement)

## 📋 變更內容

### 新增功能
- [功能1]：[簡短描述]
- [功能2]：[簡短描述]

### 修復問題
- [問題1]：[根本原因和解決方案]
- [問題2]：[根本原因和解決方案]

### 技術變更
- [變更1]：[為什麼需要這個變更]
- [變更2]：[帶來的好處]

## 🧪 測試

### 測試計畫
- [ ] 單元測試已更新/新增
- [ ] 整合測試已通過
- [ ] 手動測試已完成
- [ ] 迴歸測試已執行

### 測試步驟
1. [步驟1]
2. [步驟2]
3. [預期結果]

### 測試覆蓋率
- 變更前：XX%
- 變更後：XX%

## 📸 截圖/錄影
[如果有 UI 變更，請附上前後對比圖]

### 變更前
![Before](url)

### 變更後
![After](url)

## 📊 效能影響
[如果相關，描述效能測試結果]

| 指標 | 變更前 | 變更後 | 改善 |
|-----|--------|--------|------|
| 載入時間 | XXms | XXms | XX% |
| 記憶體使用 | XXMB | XXMB | XX% |
| API 回應時間 | XXms | XXms | XX% |

## 🚀 部署注意事項

### 資料庫變更
- [ ] 需要執行 migration
- [ ] 需要更新 seed data
- [ ] 需要備份資料

### 環境變數
```env
# 新增的環境變數
NEW_VARIABLE=value
```

### 相依性更新
```json
// package.json 變更
{
  "dependencies": {
    "new-package": "^1.0.0"
  }
}
```

### 破壞性變更
⚠️ **注意**：[描述任何破壞性變更和遷移步驟]

## ✅ 審查檢查清單

### 程式碼品質
- [ ] 程式碼符合專案風格指南
- [ ] 變數和函數命名清晰
- [ ] 沒有留下除錯程式碼
- [ ] 適當的錯誤處理
- [ ] 沒有重複的程式碼

### 文件
- [ ] README 已更新（如需要）
- [ ] API 文件已更新
- [ ] 行內註解充分
- [ ] JSDoc/TSDoc 完整

### 安全性
- [ ] 沒有硬編碼的密碼或金鑰
- [ ] 輸入驗證適當
- [ ] 沒有 SQL 注入風險
- [ ] XSS 防護到位

## 🔗 相關連結
- [設計文件](link)
- [API 規格](link)
- [測試報告](link)
- [相關 PR](link)

## 📌 備註
[任何其他審查者需要知道的資訊]

---
💡 **提示給審查者**：請特別注意 [需要重點審查的部分]
```

## 🤖 自動化 PR 內容生成

### 1. 程式碼分析
```javascript
class PRAnalyzer {
  async analyzeDiff(baseBranch, headBranch) {
    const diff = await this.getDiff(baseBranch, headBranch);
    
    return {
      filesChanged: this.countFiles(diff),
      linesAdded: this.countAdditions(diff),
      linesDeleted: this.countDeletions(diff),
      changeType: this.detectChangeType(diff),
      breakingChanges: this.detectBreakingChanges(diff),
      testCoverage: await this.calculateCoverage(diff)
    };
  }
  
  detectChangeType(diff) {
    if (diff.includes('feat:') || diff.includes('feature/')) {
      return 'feature';
    }
    if (diff.includes('fix:') || diff.includes('bugfix/')) {
      return 'bugfix';
    }
    // 更多邏輯...
  }
  
  detectBreakingChanges(diff) {
    const breakingPatterns = [
      /removed\s+function/i,
      /changed\s+signature/i,
      /deprecated/i,
      /breaking/i
    ];
    
    return breakingPatterns.some(pattern => pattern.test(diff));
  }
}
```

### 2. 智能描述生成
```javascript
class PRDescriptionGenerator {
  generate(analysis, commits, issue) {
    const sections = {
      summary: this.generateSummary(commits, issue),
      changes: this.listChanges(analysis),
      testing: this.generateTestPlan(analysis),
      deployment: this.checkDeploymentNeeds(analysis),
      performance: this.analyzePerformanceImpact(analysis)
    };
    
    return this.formatDescription(sections);
  }
  
  generateSummary(commits, issue) {
    // 從 commits 和 issue 提取關鍵資訊
    const keywords = this.extractKeywords(commits);
    const problem = issue?.description || '改進系統功能';
    const solution = this.inferSolution(commits);
    
    return `此 PR ${solution}，解決了 ${problem}。主要涉及 ${keywords.join('、')} 等方面的改進。`;
  }
  
  generateTestPlan(analysis) {
    const plan = [];
    
    if (analysis.hasNewFeatures) {
      plan.push('測試新功能的正常流程');
      plan.push('測試邊界條件和錯誤處理');
    }
    
    if (analysis.hasBugFixes) {
      plan.push('驗證錯誤已修復');
      plan.push('確保沒有引入新問題');
    }
    
    return plan;
  }
}
```

### 3. 截圖自動生成
```javascript
class ScreenshotGenerator {
  async generateComparison(feature) {
    const before = await this.captureBaseBranch(feature);
    const after = await this.captureHeadBranch(feature);
    
    return {
      before: await this.uploadImage(before),
      after: await this.uploadImage(after),
      diff: await this.generateDiffImage(before, after)
    };
  }
  
  async captureBaseBranch(feature) {
    // 切換到 base branch
    await git.checkout('main');
    await this.buildProject();
    
    // 使用 Puppeteer 截圖
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000/${feature}`);
    const screenshot = await page.screenshot();
    await browser.close();
    
    return screenshot;
  }
}
```

## 📊 PR 品質指標

### 理想的 PR 特徵
```yaml
規模:
  檔案數: < 20
  變更行數: < 400
  單一目的: true

可讀性:
  清晰的標題: true
  完整的描述: true
  有意義的 commit: true
  
可測試性:
  包含測試: true
  測試覆蓋率: > 80%
  CI 通過: true

可審查性:
  自我審查: true
  無關變更: false
  格式一致: true
```

### PR 檢查清單自動化
```javascript
class PRChecklist {
  async validate(pr) {
    const checks = {
      hasTests: await this.checkTests(pr),
      hasDocumentation: await this.checkDocs(pr),
      passesLinting: await this.runLinter(pr),
      passesSecurity: await this.runSecurityScan(pr),
      hasBreakingChanges: await this.checkBreaking(pr),
      followsConventions: await this.checkConventions(pr)
    };
    
    return {
      passed: Object.values(checks).every(Boolean),
      details: checks,
      suggestions: this.generateSuggestions(checks)
    };
  }
  
  generateSuggestions(checks) {
    const suggestions = [];
    
    if (!checks.hasTests) {
      suggestions.push('請加入相關的測試案例');
    }
    
    if (!checks.hasDocumentation) {
      suggestions.push('請更新相關文件');
    }
    
    return suggestions;
  }
}
```

## 🔄 PR 工作流程整合

### GitHub Actions 配置
```yaml
name: PR Automation

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  pr-assistant:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: Analyze PR
        id: analyze
        run: |
          # 執行 PR 分析腳本
          node scripts/analyze-pr.js
      
      - name: Update PR Description
        uses: actions/github-script@v6
        with:
          script: |
            const analysis = ${{ steps.analyze.outputs.result }};
            const description = generatePRDescription(analysis);
            
            await github.rest.pulls.update({
              owner: context.repo.owner,
              repo: context.repo.repo,
              pull_number: context.issue.number,
              body: description
            });
      
      - name: Add Labels
        uses: actions/github-script@v6
        with:
          script: |
            const labels = detectLabels(context.payload.pull_request);
            
            await github.rest.issues.addLabels({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              labels: labels
            });
      
      - name: Request Reviews
        uses: actions/github-script@v6
        with:
          script: |
            const reviewers = await selectReviewers(
              context.payload.pull_request
            );
            
            await github.rest.pulls.requestReviewers({
              owner: context.repo.owner,
              repo: context.repo.repo,
              pull_number: context.issue.number,
              reviewers: reviewers
            });
```

### 自動審查建議
```javascript
class AutoReviewer {
  async review(pr) {
    const comments = [];
    const files = await this.getChangedFiles(pr);
    
    for (const file of files) {
      const issues = await this.analyzeFile(file);
      
      for (const issue of issues) {
        comments.push({
          path: file.filename,
          line: issue.line,
          body: issue.message,
          severity: issue.severity
        });
      }
    }
    
    return this.postReviewComments(pr, comments);
  }
  
  async analyzeFile(file) {
    const issues = [];
    
    // 複雜度檢查
    if (file.complexity > 10) {
      issues.push({
        line: file.complexLine,
        message: '此函數的循環複雜度過高，建議拆分',
        severity: 'warning'
      });
    }
    
    // 安全檢查
    const securityIssues = await this.securityScan(file);
    issues.push(...securityIssues);
    
    return issues;
  }
}
```

## 💡 最佳實踐

### DO's ✅
1. **原子性提交**：每個 PR 只解決一個問題
2. **清晰的歷史**：使用有意義的 commit 訊息
3. **完整的上下文**：提供足夠的背景資訊
4. **主動溝通**：標註需要特別注意的地方
5. **及時更新**：根據反饋快速迭代

### DON'Ts ❌
1. **巨大的 PR**：避免超過 400 行的變更
2. **混合變更**：不要在一個 PR 中混合多個功能
3. **忽略測試**：不要提交未測試的程式碼
4. **格式混亂**：確保程式碼格式一致
5. **缺乏描述**：不要提交空白或過於簡單的描述

## 🎯 PR 範例

### 優秀的 PR 範例
```markdown
# feat: 實作購物車持久化功能 (#234)

## 📝 概述
實作了購物車資料的本地持久化功能，使用者關閉瀏覽器後重新開啟仍能看到之前加入的商品。採用 localStorage 配合資料壓縮，確保效能和使用者體驗。

## 🎯 關聯 Issue
Closes #234

## 🔄 變更類型
- [x] ✨ 新功能 (New feature)

## 📋 變更內容

### 新增功能
- **購物車持久化**：使用 localStorage 儲存購物車資料
- **資料壓縮**：使用 LZ-string 壓縮資料，減少儲存空間
- **過期機制**：7 天後自動清理過期資料
- **同步機制**：多分頁間購物車資料同步

### 技術實作
- 建立 `CartPersistence` 服務處理所有持久化邏輯
- 實作 `StorageAdapter` 介面，便於未來切換儲存方案
- 加入資料驗證，防止損壞資料造成應用崩潰

## 🧪 測試

### 測試覆蓋率
- 變更前：82%
- 變更後：87%

### 測試步驟
1. 開啟應用，加入商品到購物車
2. 關閉瀏覽器
3. 重新開啟應用
4. 確認購物車商品仍然存在

## 📸 截圖
![購物車持久化演示](https://example.com/demo.gif)

## 📊 效能影響
| 指標 | 變更前 | 變更後 | 說明 |
|-----|--------|--------|------|
| 首次載入 | 1.2s | 1.3s | 增加 100ms 用於讀取快取 |
| 購物車操作 | 50ms | 55ms | 增加持久化操作 |
| 儲存空間 | 0KB | <100KB | 壓縮後的資料大小 |

## ✅ 審查檢查清單
- [x] 單元測試完整
- [x] 程式碼符合規範
- [x] 文件已更新
- [x] 無安全風險

---
💡 **審查重點**：請特別關注 `CartPersistence.js` 中的資料驗證邏輯
```

---

**記住**：優秀的 PR 不只是程式碼變更的集合，而是一個完整的溝通工具。它應該讓審查者快速理解你的意圖、實作方式和潛在影響。