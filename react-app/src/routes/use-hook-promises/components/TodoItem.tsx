export function TodoItem({ title, completed }: { title: string; completed: boolean }) {
    console.log('TodoItem render....');
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-2xl font-bold mb-4">Todo Item</h2>
            <div className="space-y-2">
                <p className="flex items-center">
                    <span className="font-semibold mr-2">Title:</span>
                    <span>{title}</span>
                </p>
                <p className="flex items-center">
                    <span className="font-semibold mr-2">Completed:</span>
                    <span
                        className={`px-2 py-1 rounded text-sm ${
                            completed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}
                    >
                        {completed ? 'Yes' : 'No'}
                    </span>
                </p>
            </div>
        </div>
    );
}
