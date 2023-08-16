export default function Button() {
    return (
        <div>
            <button
                type="button"
                className="w-[100px] h-11 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
            >
                Add Task
            </button>
        </div>
    )
}
