import { useEffect, useState } from 'react'
import { NewTodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

interface Todo {
    id: string
    title: string
    completed: boolean
}
export default function App(): JSX.Element {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const localValue = localStorage.getItem('TASKS')
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem('TASKS', JSON.stringify(todos))
    }, [todos])

    function addTodo(title: string): void {
        setTodos((currentTodos: Todo[]) => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false },
            ]
        })
    }

    function toggleTodo(id: string, completed: boolean): void {
        setTodos((currentTodos: Todo[]) => {
            return currentTodos.map((todo: Todo) =>
                todo.id === id ? { ...todo, completed } : todo
            )
        })
    }

    function deleteTodo(id: string): void {
        setTodos((current: Todo[]) =>
            current.filter((todo: Todo) => todo.id !== id)
        )
    }

    return (
        <div className="min-h-screen flex flex-col items-center py-10 gap-5 bg-gray-300">
            <NewTodoForm onSubmit={addTodo} />
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}
