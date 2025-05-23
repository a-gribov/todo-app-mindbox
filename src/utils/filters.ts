import { Todo, Filter } from '../types/todo'

export const filterTodos = (todos: Todo[], filter: Filter): Todo[] => {
  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.completed)
    case 'completed':
      return todos.filter((todo) => todo.completed)
    default:
      return todos
  }
}
