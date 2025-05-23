import { Button, Typography, Box } from '@mui/material'
import { Filter } from '../types/todo'

interface FooterProps {
  itemsLeft: number
  filter: Filter
  onFilterChange: (filter: Filter) => void
  onClearCompleted: () => void
}

export const Footer = ({
  itemsLeft,
  filter,
  onFilterChange,
  onClearCompleted,
}: FooterProps) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    px={2}
    py={1}
    borderTop="1px solid #e0e0e0"
    bgcolor="#fafafa"
  >
    <Typography color="text.secondary">{itemsLeft} items left</Typography>

    <Box display="flex" gap={1}>
      {(['all', 'active', 'completed'] as Filter[]).map((f) => (
        <Button
          key={f}
          variant={filter === f ? 'outlined' : 'text'}
          onClick={() => onFilterChange(f)}
          style={{ padding: '6px 8px' }}
          sx={{
            color: filter === f ? 'primary.main' : 'text.secondary',
          }}
        >
          {f[0].toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </Box>

    <Button
      onClick={onClearCompleted}
      sx={{
        textTransform: 'none',
        fontWeight: 500,
        color: 'error.main',
        '&:hover': {
          backgroundColor: 'rgba(244, 67, 54, 0.08)',
        },
      }}
    >
      Clear completed
    </Button>
  </Box>
)
