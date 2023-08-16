interface Props {
    completed: boolean
    id: string
    title: string
    toggleTodo: (id: string, checked: boolean) => void
    deleteTodo: (id: string) => void
}
export function TodoItem({
    completed,
    id,
    title,
    toggleTodo,
    deleteTodo,
}: Props) {
    return (
        <li className="flex items-center justify-between w-1/2 p-3 my-1 rounded-md bg-rose-200">
            <div className="flex justify-start gap-2">
                <input
                    title="checkbox"
                    type="checkbox"
                    checked={completed}
                    onChange={(event) => toggleTodo(id, event.target.checked)}
                    className="w-4"
                />
                <label className="font-semibold text-gray-700">{title}</label>
            </div>
            <button
                onClick={() => deleteTodo(id)}
                className="w-[70px] p-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-xs dark:focus:ring-offset-gray-800"
            >
                Delete
            </button>
        </li>
    )
}
