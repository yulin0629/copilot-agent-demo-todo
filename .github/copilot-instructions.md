# 待辦事項應用 - 開發指引

## 專案概述
簡單的待辦事項應用，使用原生 JavaScript 開發，資料儲存在 LocalStorage。

## 編碼規範
- 使用 ES6+ 語法（const/let、箭頭函數、模板字串）
- 函數保持簡短，單一職責
- 加入適當的錯誤處理
- 避免使用 innerHTML，改用 textContent 或 createElement

## 處理 Issue 的流程
1. 仔細閱讀 Issue 描述
2. 找出需要修改的檔案
3. 實作解決方案
4. 測試功能是否正常
5. 提交變更並創建 PR

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