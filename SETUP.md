# 場景 8 - GitHub Repository 設置指南

##  課前準備步驟

### 1. 創建新的 GitHub Repository
- Repository 名稱：`copilot-agent-demo-todo`
- 描述：GitHub Copilot Agent 自動化開發展示
- 設為 Public（方便學員觀看）
- 不要初始化 README（我們會推送現有程式碼）

### 2. 推送程式碼到新 Repo
```bash
# 在 08-comprehensive-project 目錄下
git init
git add .
git commit -m "Initial commit: Todo app for Agent demo"
git branch -M main
git remote add origin https://github.com/[你的帳號]/copilot-agent-demo-todo.git
git push -u origin main
```

### 3. 創建預置的 Issues

#### Issue #1：添加清除已完成任務功能
```
標題：添加清除已完成任務的功能

描述：
希望能一次清除所有已完成的任務，讓列表保持整潔。

需求：
- 在介面上加入「清除已完成」按鈕
- 點擊後刪除所有已標記完成的任務
- 加入確認提示避免誤刪

標籤：enhancement, good first issue
```

#### Issue #2：修復過濾器狀態遺失問題
```
標題：修復重新整理頁面後過濾器狀態遺失

描述：
當選擇「未完成」過濾器後，重新整理頁面會回到「全部」。

重現步驟：
1. 點選「未完成」過濾器
2. 重新整理頁面（F5）
3. 過濾器回到「全部」狀態

期望行為：
過濾器狀態應該被記住

標籤：bug
```

#### Issue #3：添加任務計數功能
```
標題：在頁面標題顯示未完成任務數量

描述：
希望在瀏覽器標籤上看到未完成的任務數量，方便快速了解待辦狀況。

需求：
- 在 document.title 顯示未完成數量
- 格式：(3) 待辦事項
- 即時更新

標籤：enhancement
```

### 4. 設置 Repository 權限
- Settings → General → Features
  -  Issues
  -  Pull requests
- Settings → Branches
  - 可選：設置 main branch 保護規則

### 5. 準備 Demo 腳本
在課程中，準備以下指令來展示：

```markdown
# Demo 腳本

## 1. 基礎自動化
"請查看 repo 中的所有 open issues，選擇 #1 來實作，完成後創建 PR"

## 2. 批次分析
"分析所有 open issues，評估每個的實作難度和所需時間"

## 3. 完整自動化
"選擇一個標記為 'good first issue' 的問題，完整實作並提交 PR"
```

##  課程當天檢查清單
- [ ] Repository 已創建並公開
- [ ] 程式碼已推送
- [ ] 3-5 個 Issues 已創建
- [ ] `.github/copilot-instructions.md` 存在
- [ ] 測試 Agent 可以正常讀取 repo

##  教學提示
1. 展示前先在本地 clone 這個 repo
2. 使用 VS Code 開啟，確保 GitHub Copilot 已啟用
3. 可以準備一個已完成的 PR 作為範例展示
4. 記得展示 GitHub 網頁上的 Issue 和 PR 頁面