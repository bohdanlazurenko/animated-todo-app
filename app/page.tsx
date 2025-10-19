"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TodoItem } from '@/components/todo-item'
import { TodoManager, type Todo } from '@/lib/todo-manager'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const todoManager = TodoManager.getInstance()
    setTodos(todoManager.getTodos())
  }, [])

  const addTodo = () => {
    if (inputValue.trim()) {
      const todoManager = TodoManager.getInstance()
      const newTodo = todoManager.addTodo(inputValue.trim())
      setTodos(todoManager.getTodos())
      setInputValue('')
    }
  }

  const toggleTodo = (id: string) => {
    const todoManager = TodoManager.getInstance()
    todoManager.toggleTodo(id)
    setTodos(todoManager.getTodos())
  }

  const deleteTodo = (id: string) => {
    const todoManager = TodoManager.getInstance()
    todoManager.deleteTodo(id)
    setTodos(todoManager.getTodos())
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-6"
      >
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={addTodo} className="px-6">
            Add Todo
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="space-y-2"
      >
        <AnimatePresence>
          {todos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 text-gray-500"
            >
              <p className="text-lg">No todos yet!</p>
              <p className="text-sm mt-2">Add your first todo above to get started.</p>
            </motion.div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </AnimatePresence>
      </motion.div>

      {todos.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center text-sm text-gray-600"
        >
          {todos.filter((t) => !t.completed).length} of {todos.length} tasks remaining
        </motion.div>
      )}
    </div>
  )
}