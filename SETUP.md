# 場景 8 - GitHub Agent 自動化：快速開始指南

在這個場景中，你將體驗 100% Agent 模式 - 從 Issue 到 PR 的完整自動化流程！

## 🚀 三步驟快速開始

### 步驟 1：Fork Demo Repository
1. 開啟瀏覽器，前往：https://github.com/yulin0629/copilot-agent-demo-todo
2. 點擊右上角 **Fork** 按鈕
3. 選擇你的帳號，完成 Fork
4. 複製你的 Fork URL（例如：https://github.com/你的帳號/copilot-agent-demo-todo）

### 步驟 2：讓 Agent 幫你設置（你的第一個 Agent 體驗！）
在 VS Code 中開啟 Copilot Chat，選擇 **Agent 模式**，輸入：

```
請幫我更新 git remote 到 [貼上你的 Fork URL]
```

例如：
```
請幫我更新 git remote 到 https://github.com/alice/copilot-agent-demo-todo
```

💡 **觀察**：Agent 會自動執行正確的 git 指令！

### 步驟 3：創建你的第一個 Issue
1. 在瀏覽器中開啟你的 Fork
2. 前往 Issues 頁面
3. 創建新 Issue，例如：
   - 標題：添加深色模式
   - 內容：請為待辦事項應用添加深色模式切換功能
   - 標籤：enhancement

✅ **完成！** 現在你可以開始體驗 Agent 的威力了！

## 🎯 Agent 實戰演練

### Demo 1：單一 Issue 實作
告訴 Agent：
```
查看我的 GitHub repo 中的 open issues，選擇一個來實作
```

### Demo 2：完整自動化流程
告訴 Agent：
```
請完成以下工作：
1. 分析所有 open issues
2. 選擇最簡單的一個
3. 實作功能
4. 創建 PR with 詳細說明
```

### Demo 3：批次處理（進階）
```
處理所有標記為 "good first issue" 的問題，為每個創建獨立的 PR
```

## 📝 建議的練習 Issues

快速創建這些 Issues 來練習：

1. **功能**：添加深色模式切換
2. **Bug**：修復刪除任務後重新整理會還原的問題
3. **功能**：在瀏覽器標題顯示未完成任務數量
4. **功能**：添加任務到期日期
5. **功能**：匯出任務為 JSON 格式

## ⚡ 重要提醒

- **這是 100% Agent 模式練習** - 讓 Agent 完成所有工作！
- **不要手動修改程式碼** - 觀察 Agent 如何理解需求並實作
- **專注於下指令** - 練習如何給 Agent 清晰的指示
- **觀察 Agent 的決策** - 了解 AI 如何分析和解決問題

## ❓ 需要幫助？

遇到問題時，直接問 Agent：
- "請檢查我的 git remote 設定"
- "為什麼我無法 push 到 GitHub"
- "如何創建 GitHub Issue"

記住：Agent 可以幫你解決大部分技術問題！