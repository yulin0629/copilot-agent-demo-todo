---
applyTo: '**'
---

# Pull Request 指引

## PR 創建標準

### 標題格式
- `feat: 新增[功能名稱]`
- `fix: 修復[問題描述]`
- `docs: 更新[文件名稱]`
- `refactor: 重構[模組名稱]`

### PR 內容模板
```markdown
##  解決的問題
Fixes #[issue-number]

[簡述解決了什麼問題或新增了什麼功能]

## 🔧 實作內容
- [列出主要的修改點]
- [說明技術決策]
- [提及任何特別的考量]

##  測試步驟
1. 開啟 `index.html`
2. [具體的測試步驟]
3. [預期結果]

## 📸 截圖
[如果有 UI 變更，附上前後對比截圖]

## 🤔 需要特別注意
[任何需要 reviewer 特別注意的地方]
```

### 使用 GitHub CLI
```bash
# 創建 PR
gh pr create --title "feat: 新增優先級功能" --body "Fixes #1"

# 加上標籤
gh pr edit [PR-number] --add-label "enhancement"
```