import { useCallback, useState } from 'react'
import { TextField } from '@mui/material'

interface TodoInputProps {
  onAdd: (text: string) => void
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [value, setValue] = useState('')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  )

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && value.trim()) {
        onAdd(value.trim())
        setValue('')
      }
    },
    [onAdd, value]
  )

  return (
    <TextField
      fullWidth
      placeholder="What needs to be done?"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      variant="standard"
    />
  )
}
