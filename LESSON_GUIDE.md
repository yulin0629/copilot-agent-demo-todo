# 場景 8：GitHub 自動化 Agent (100% Agent)

## 🚀 重要：本場景需要獨立的 GitHub Repository

### 為什麼需要獨立 Repo？
- 真實展示 Issue 到 PR 的完整流程
- 學員可以看到實際的 GitHub 操作
- 可以預先準備好測試用的 Issues
- 避免污染主教學專案

### 建議的 Repo 設置
1. **Repo 名稱**：`copilot-agent-demo-todo`
2. **內容**：本目錄下的待辦事項應用
3. **預置 Issues**：3-5 個簡單的功能需求和 Bug
4. **設置**：開啟 Issues 和 Pull Requests 功能

## 🎯 學習目標
- 體驗 **Agent 100% 模式**：AI 自主處理從 Issue 到 PR 的完整開發流程
- 掌握 `.github/instructions` 和 `.github/prompts` 的實際應用
- 學習如何建立團隊級的 AI 自動化工作流程
- 理解 AI 驅動開發的未來：自動化日常開發任務

## 📝 場景說明
在這個最終場景，您將建立一個自動化工作流程：Agent 自主讀取 GitHub Issue、理解需求、實作解決方案，並創建 Pull Request。這展示了 AI 如何成為團隊的自動化開發成員。

## 🛠️ 專案挑戰
```
專案類型：GitHub 自動化開發流程
複雜度：⭐⭐⭐⭐ (進階)
Agent 主導度：100%
人類參與度：0% (完全自動化)
完成時間：15-20 分鐘
```

### 工作流程
1. **人類創建 Issue**：描述需求或 Bug
2. **Agent 自主工作**：
   - 分析 Issue 內容
   - 根據 `.github/instructions` 理解專案規範
   - 實作解決方案
   - 執行測試
   - 創建 Pull Request
3. **人類審核 PR**：確認並合併

## 📚 Demo 劇本

### 🌟 **技術展示：完整的自動化流程**

#### 準備工作已完成
本專案已經建立了完整的指令系統：
- ✅ `.github/copilot-instructions.md` - 專案開發規範
- ✅ `.github/instructions/pr-template.instructions.md` - PR 創建指引
- ✅ 簡單的待辦事項應用作為基礎

### 📋 展示流程

### 階段 1：展示預置的 GitHub Issues (2分鐘)

#### 展示真實的 GitHub Repository
1. 開啟瀏覽器，展示 `copilot-agent-demo-todo` repo
2. 展示已經準備好的 3-5 個 Issues
3. 快速瀏覽每個 Issue 的內容
4. 強調這些都是真實的 GitHub Issues

**預置的 Issues 範例**：
- Issue #1: 添加清除已完成任務的功能 (enhancement, good first issue)
- Issue #2: 修復刪除任務後 LocalStorage 未更新的問題 (bug)  
- Issue #3: 在頁面標題顯示未完成任務數量 (enhancement)
- Issue #4: 添加鍵盤快捷鍵支援 (enhancement)

#### 展示專案結構
```
copilot-agent-demo-todo/
├── .github/
│   ├── copilot-instructions.md    # Agent 會自動讀取
│   └── instructions/
│       └── pr-template.instructions.md
├── index.html
├── app.js
├── style.css
└── README.md
```

### 階段 2：展示 Agent 全自動化流程 (15分鐘)

#### 步驟 1：讓 Agent 完全接管 - 從 Issue 到 PR
```
請分析這個專案的所有 open issues，選擇 Issue #1 來處理。

自主完成以下工作：
1. 讀取並理解 Issue 內容
2. 根據 .github 的指令進行開發
3. 實作並測試功能
4. 創建符合規範的 Pull Request

完成後告訴我 PR 編號。
```
💡 **使用模式：Agent**
🔄 **開啟新對話**

**🎯 關鍵展示點**：
- Agent 自動讀取 `.github/copilot-instructions.md`
- Agent 遵循團隊規範進行開發
- Agent 自主判斷如何實作
- Agent 按照 PR 模板創建高品質 PR

#### 步驟 2：進階指令 - 批次處理
```
請檢查所有 open issues，為每個 issue 生成簡單的實作計劃。
告訴我哪些可以快速完成（30分鐘內），哪些需要更多時間。
```
💡 **使用模式：Agent**

**展示重點**：
- Agent 能批次分析多個 Issue
- Agent 能評估工作量和複雜度
- Agent 能制定優先順序

### 階段 3：實際應用場景 (3分鐘)

#### 真實世界的應用案例

##### 1. 日常維護自動化
```
每天早上執行：
「請檢查所有標記為 'good first issue' 的問題，選擇一個實作並發 PR」
```

##### 2. 文件自動更新
```
當有新功能 PR 合併後：
「請根據最新的程式碼更新 README.md 的功能說明」
```

##### 3. Code Review 輔助
```
有新 PR 時：
「請分析這個 PR 是否符合我們的開發規範，提供改進建議」
```

## 💡 重點技巧

### 🤖 GitHub 自動化最佳實踐：
1. **清晰的 Issue**：提供明確的需求和驗收標準
2. **完善的指令系統**：讓 Agent 理解團隊規範
3. **信任但驗證**：讓 Agent 自主工作，但要審核結果
4. **持續優化**：根據結果調整指令和流程

### 📋 建立有效的指令系統：
```
.github/
├── copilot-instructions.md      # 專案級指令
├── instructions/                 # 細分指令
│   ├── frontend.instructions.md # 前端規範
│   ├── testing.instructions.md  # 測試規範
│   └── pr.instructions.md       # PR 規範
└── prompts/                     # 可重用模板
    ├── feature.prompt.md        # 新功能模板
    ├── bugfix.prompt.md         # Bug 修復模板
    └── refactor.prompt.md       # 重構模板
```

### 🚀 進階應用場景：
- **自動化 Code Review**：Agent 分析 PR 並提供建議
- **文件自動更新**：根據程式碼變更自動更新文件
- **測試案例生成**：為新功能自動生成測試
- **依賴更新**：自動處理套件更新和相容性問題

## 🎬 Demo 重點

### 展示要點：
1. **Issue 驅動開發**：展示真實的開發工作流程
2. **指令系統威力**：`.github/instructions` 如何規範 Agent 行為
3. **自主問題解決**：Agent 如何分析、實作、測試
4. **團隊協作模式**：AI 如何融入現有開發流程

### 關鍵時刻：
- 當 Agent 自動遵循專案規範時
- 當 Agent 主動加入錯誤處理時
- 當 Agent 創建高品質的 PR 說明時
- 當 Agent 根據新規範調整行為時

## ✅ 預期成果
完成本場景後，您應該：
- ✅ 理解 GitHub 自動化工作流程
- ✅ 掌握指令系統的建立和使用
- ✅ 體驗 90% Agent 主導的開發模式
- ✅ 獲得可立即應用的自動化模板
- ✅ 建立 AI 時代的新工作模式認知

## 🎓 課程總結

### 🚀 從 0% 到 100% 的旅程
1. **場景 1-2 (0% Agent)**：建立基礎認知
2. **場景 3-4 (20-30% Agent)**：初步體驗協作
3. **場景 5-6 (50-60% Agent)**：深度應用
4. **場景 7-8 (80-100% Agent)**：完全信任

### 💡 關鍵洞察
- **AI 不是取代，是增強**：人類定義「什麼」，AI 實現「如何」
- **規範化帶來自動化**：好的指令系統讓 AI 更有效
- **信任但驗證**：給 AI 空間，但保持品質把關

### 📈 未來展望
- **個人**：成為 AI 增強的超級開發者
- **團隊**：建立 AI 驅動的高效流程
- **產業**：重新定義軟體開發模式

## 🎯 立即行動
1. **今天**：在你的專案中創建 `.github/copilot-instructions.md`
2. **本週**：嘗試用 Agent 模式完成一個完整功能
3. **本月**：建立團隊的 AI 協作規範
4. **持續**：探索和分享新的應用模式