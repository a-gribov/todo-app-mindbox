/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TodoList } from '../components/TodoList'
import { Todo } from '../types/todo'
import '@testing-library/jest-dom'

describe('TodoList integration', () => {
  const sampleTodos: Todo[] = [
    { id: '1', text: 'Task 1', completed: false },
    { id: '2', text: 'Task 2', completed: true },
  ]

  it('renders all todos with correct text and completed state', () => {
    render(
      <TodoList todos={sampleTodos} onToggle={() => {}} onDelete={() => {}} />
    )

    expect(screen.getByText('Task 1')).toBeInTheDocument()
    expect(screen.getByText('Task 2')).toBeInTheDocument()
    expect(screen.getAllByRole('checkbox')).toHaveLength(2)
  })

  it('calls onToggle when a checkbox is clicked', () => {
    const onToggle = vi.fn()
    render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onDelete={() => {}} />
    )

    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[0])

    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledWith('1')
  })

  it('calls onDelete when delete button is clicked', () => {
    const onDelete = vi.fn()
    render(
      <TodoList todos={sampleTodos} onToggle={() => {}} onDelete={onDelete} />
    )

    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])

    expect(onDelete).toHaveBeenCalledTimes(1)
    expect(onDelete).toHaveBeenCalledWith('1')
  })
})
