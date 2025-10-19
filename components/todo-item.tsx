"use client"

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { type Todo } from '@/lib/todo-manager'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-white rounded-lg shadow p-4 flex items-center gap-3 group hover:shadow-md transition-shadow"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 hover:border-green-500'
        }`}
      >
        {todo.completed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          >
            <Check className="w-4 h-4 text-white" />
          </motion.div>
        )}
      </motion.button>

      <motion.span
        className={`flex-1 text-gray-800 transition-all ${
          todo.completed ? 'line-through opacity-60' : ''
        }`}
        animate={{
          color: todo.completed ? '#9CA3AF' : '#1F2937',
        }}
      >
        {todo.text}
      </motion.span>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="text-xs text-gray-500"
      >
        {new Date(todo.createdAt).toLocaleDateString()}
      </motion.div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="w-4 h-4 text-red-500" />
      </Button>
    </motion.div>
  )
}