import { Checkbox, IconButton, ListItem, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Todo } from '../types/todo'

interface TodoItemProps {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => (
  <ListItem
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <Checkbox checked={todo.completed} onChange={onToggle} />
    <Typography
      sx={{
        flex: 1,
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? 'gray' : 'inherit',
      }}
    >
      {todo.text}
    </Typography>
    <IconButton onClick={onDelete}>
      <DeleteIcon />
    </IconButton>
  </ListItem>
)
