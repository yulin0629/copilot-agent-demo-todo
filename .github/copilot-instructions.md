# 待辦事項應用 - 開發指引

## 專案概述
簡單的待辦事項應用，使用原生 JavaScript 開發，資料儲存在 LocalStorage。

## 編碼規範
- 使用 ES6+ 語法（const/let、箭頭函數、模板字串）
- 函數保持簡短，單一職責
- 加入適當的錯誤處理
- 避免使用 innerHTML，改用 textContent 或 createElement

## GitHub 操作指令
在 VS Code 終端機中使用以下指令：

### 查看 Issues
```bash
# 列出所有 open issues
gh issue list

# 查看特定 issue 詳情
gh issue view <issue-number>
```

### 創建 Pull Request
```bash
# 創建新分支
git checkout -b fix-issue-<number>

# 完成修改後
git add .
git commit -m "fix: 描述你的修改"
git push -u origin fix-issue-<number>

# 創建 PR
gh pr create --title "fix: 修復內容" --body "關聯 Issue #<number>"
```

## 處理 Issue 的流程
1. 使用 `gh issue list` 查看可處理的 issues
2. 使用 `gh issue view <number>` 詳細了解需求
3. 創建新分支進行開發
4. 實作解決方案並測試
5. 提交變更並使用 `gh pr create` 創建 PR

## Git Commit 規範
- feat: 新功能
- fix: 修復問題
- docs: 文件更新
- style: 程式碼格式調整
- refactor: 重構

## 注意事項
- 所有資料變更後都要呼叫 saveTodos()
- DOM 操作後要呼叫 render() 更新畫面
- 保持程式碼風格一致性
- PR 要關聯對應的 Issue 編號