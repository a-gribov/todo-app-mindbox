import { Todo } from '../types/todo'
import { v4 as uuid } from 'uuid'
import { useLocalStorage } from './useLocalStorage'

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])

  const addTodo = (text: string) =>
    setTodos((prev) => [...prev, { id: uuid(), text, completed: false }])

  const toggleTodo = (id: string) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )

  const deleteTodo = (id: string) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id))

  const clearCompleted = () =>
    setTodos((prev) => prev.filter((todo) => !todo.completed))

  return { todos, addTodo, toggleTodo, deleteTodo, clearCompleted, setTodos }
}
