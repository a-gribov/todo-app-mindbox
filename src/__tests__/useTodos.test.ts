/// <reference types="vitest" />
import { renderHook, act } from '@testing-library/react'
import { useTodos } from '../hooks/useTodos'

beforeEach(() => {
  localStorage.clear()
})

describe('useTodos hook', () => {
  it('should add a todo', () => {
    const { result } = renderHook(() => useTodos())

    act(() => {
      result.current.addTodo('Test Task')
    })

    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].text).toBe('Test Task')
  })

  it('should toggle a todo', () => {
    const { result } = renderHook(() => useTodos())

    act(() => {
      result.current.addTodo('Test Task')
    })

    const id = result.current.todos[0].id

    act(() => {
      result.current.toggleTodo(id)
    })

    expect(result.current.todos[0].completed).toBe(true)
  })

  it('should delete a todo', () => {
    const { result } = renderHook(() => useTodos())

    act(() => {
      result.current.addTodo('Delete Me')
    })

    const id = result.current.todos[0].id

    act(() => {
      result.current.deleteTodo(id)
    })

    expect(result.current.todos).toHaveLength(0)
  })

  it('should clear completed todos', () => {
    const { result } = renderHook(() => useTodos())

    act(() => {
      result.current.addTodo('Keep Me')
    })

    act(() => {
      result.current.addTodo('Remove Me')
    })

    const id = result.current.todos[1]?.id
    expect(id).toBeDefined()

    act(() => {
      result.current.toggleTodo(id!)
    })

    act(() => {
      result.current.clearCompleted()
    })

    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].text).toBe('Keep Me')
  })
})
