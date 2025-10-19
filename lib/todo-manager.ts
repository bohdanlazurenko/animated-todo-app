export type Todo = {
  id: string
  text: string
  completed: boolean
  createdAt: string
}

class TodoManager {
  private static instance: TodoManager
  private todos: Todo[] = []
  private readonly STORAGE_KEY = 'animated-todos'

  private constructor() {
    if (typeof window !== 'undefined') {
      this.loadFromStorage()
    }
  }

  static getInstance(): TodoManager {
    if (!TodoManager.instance) {
      TodoManager.instance = new TodoManager()
    }
    return TodoManager.instance
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      if (stored) {
        this.todos = JSON.parse(stored)
      }
    } catch (error) {
      console.error('Failed to load todos from storage:', error)
      this.todos = []
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos))
    } catch (error) {
      console.error('Failed to save todos to storage:', error)
    }
  }

  addTodo(text: string): Todo {
    const newTodo: Todo = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    this.todos.unshift(newTodo)
    this.saveToStorage()
    return newTodo
  }

  toggleTodo(id: string): void {
    const todo = this.todos.find((t) => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
      this.saveToStorage()
    }
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter((t) => t.id !== id)
    this.saveToStorage()
  }

  getTodos(): Todo[] {
    return [...this.todos]
  }

  getCompletedCount(): number {
    return this.todos.filter((t) => t.completed).length
  }

  getActiveCount(): number {
    return this.todos.filter((t) => !t.completed).length
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((t) => !t.completed)
    this.saveToStorage()
  }
}

export { TodoManager }