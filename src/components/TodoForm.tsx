import React, { useState } from 'react'

interface NewTodoFormProps {
    onSubmit: (newItem: string) => void
}

export function NewTodoForm({ onSubmit }: NewTodoFormProps): JSX.Element {
    const [newItem, setNewItem] = useState('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        if (newItem === '') return

        onSubmit(newItem)

        setNewItem('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center w-full gap-5">
                <input
                    value={newItem}
                    onChange={(event) => setNewItem(event.target.value)}
                    type="text"
                    id="item"
                    placeholder="New Task"
                    className="block w-full h-10 px-4 text-sm border-2 border-gray-200 rounded-md y-3 focus:border-blue-500 focus:outline-none"
                />
                <button className="w-[140px] h-9 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-xs">
                    Add Task
                </button>
            </div>
        </form>
    )
}
