// 待辦事項應用 - 基礎版本
// 這個檔案故意保持簡單，讓 Agent 有空間添加新功能

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        // 從 LocalStorage 載入資料
        this.loadTodos();
        
        // 綁定事件
        this.bindEvents();
        
        // 初始渲染
        this.render();
    }

    bindEvents() {
        // 新增任務
        document.getElementById('addTodo').addEventListener('click', () => this.addTodo());
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // 過濾器
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });
    }

    addTodo() {
        const input = document.getElementById('todoInput');
        const text = input.value.trim();
        
        if (!text) return;

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.todos.push(todo);
        this.saveTodos();
        this.render();
        
        input.value = '';
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        // BUG: 忘記呼叫 saveTodos()，導致刪除後重新整理會還原
        // this.saveTodos();
        this.render();
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // 更新按鈕狀態
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.render();
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('completionRate').textContent = `${rate}%`;
    }

    render() {
        const todoList = document.getElementById('todoList');
        const filteredTodos = this.getFilteredTodos();
        
        if (filteredTodos.length === 0) {
            todoList.innerHTML = '<li class="empty-state">沒有任務</li>';
        } else {
            todoList.innerHTML = filteredTodos.map(todo => `
                <li class="todo-item ${todo.completed ? 'completed' : ''}">
                    <input type="checkbox" 
                           class="todo-checkbox" 
                           ${todo.completed ? 'checked' : ''} 
                           onchange="todoApp.toggleTodo(${todo.id})">
                    <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                    <button class="delete-btn" onclick="todoApp.deleteTodo(${todo.id})">刪除</button>
                </li>
            `).join('');
        }
        
        this.updateStats();
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadTodos() {
        const saved = localStorage.getItem('todos');
        if (saved) {
            try {
                this.todos = JSON.parse(saved);
            } catch (e) {
                console.error('載入任務失敗:', e);
                this.todos = [];
            }
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// 初始化應用
const todoApp = new TodoApp();