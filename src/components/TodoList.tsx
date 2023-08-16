import { TodoItem } from './TodoItem'

interface Todo {
    id: string
    title: string
    completed: boolean
}

interface Props {
    todos: Todo[]
    toggleTodo: (id: string, completed: boolean) => void
    deleteTodo: (id: string) => void
}

export function TodoList({
    todos,
    toggleTodo,
    deleteTodo,
}: Props): JSX.Element {
    return (
        <ul className="w-full flex flex-col justify-center items-center">
            {todos.length === 0 && 'No Tasks'}
            {todos.map((todo) => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}
