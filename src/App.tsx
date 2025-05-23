import { Container, Paper, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { Filter } from './types/todo'
import { filterTodos } from './utils/filters'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { Footer } from './components/Footer'
import { useTodos } from './hooks/useTodos'

export const App = () => {
  const [filter, setFilter] = useState<Filter>('all')
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos()

  const filteredTodos = useMemo(
    () => filterTodos(todos, filter),
    [todos, filter]
  )

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" gutterBottom>
        todos
      </Typography>
      <Paper elevation={3} style={{ padding: 16 }}>
        <TodoInput onAdd={addTodo} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        <Footer
          itemsLeft={filteredTodos.filter((t) => !t.completed).length}
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
        />
      </Paper>
    </Container>
  )
}
