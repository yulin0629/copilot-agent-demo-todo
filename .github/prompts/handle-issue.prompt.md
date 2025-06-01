# 處理 GitHub Issue

請完成以下任務：

## 1. 獲取 Issue 資訊
執行指令查看所有 issues：
```bash
gh issue list
```

選擇一個 issue 並查看詳情：
```bash
gh issue view <number>
```

## 2. 開始開發
創建新分支：
```bash
git checkout -b fix-issue-<number>
```

## 3. 實作解決方案
- 分析問題
- 修改相關檔案
- 測試功能
- 確保符合需求

## 4. 提交並創建 PR
```bash
git add .
git commit -m "fix: <描述>"
git push -u origin fix-issue-<number>
gh pr create --title "<標題>" --body "Fixes #<number>"
```

記得遵循專案的編碼規範！