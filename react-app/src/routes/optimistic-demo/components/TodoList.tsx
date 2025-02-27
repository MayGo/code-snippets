import type { TodoItem } from './types';

interface TodoListProps {
    todos: TodoItem[];
}

export function TodoList({ todos }: TodoListProps) {
    if (todos.length === 0) {
        return (
            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Todo List</h3>
                <p className="text-gray-500 italic">No todos yet. Add one above!</p>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Todo List</h3>
            <ul className="mt-4 space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`p-3 border rounded-md ${
                            todo.optimistic ? 'border-blue-300 bg-blue-50 animate-pulse' : 'border-gray-200'
                        }`}
                    >
                        <div className="flex items-center">
                            <span className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.text}</span>
                            {todo.optimistic && <span className="ml-2 text-xs text-blue-500">(saving...)</span>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
