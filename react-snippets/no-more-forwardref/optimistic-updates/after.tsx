import React, { useState, useTransition } from 'react';

// Mock API function
const apiUpdateTodo = async (id: number, completed: boolean): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 90% success rate for demo purposes
            if (Math.random() > 0.1) {
                console.log(`Updated todo ${id} to ${completed ? 'completed' : 'incomplete'}`);
                resolve();
            } else {
                console.error(`Failed to update todo ${id}`);
                reject(new Error('Network error'));
            }
        }, 1000);
    });
};

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// TodoItem component without ref
function TodoItem({ todo, onToggle }: { todo: Todo; onToggle: (id: number) => void }) {
    return (
        <li className="todo-item">
            <label>
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            </label>
        </li>
    );
}

// TodoList component without ref
function TodoList({ todos, onToggleTodo }: { todos: Todo[]; onToggleTodo: (id: number) => void }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} />
            ))}
        </ul>
    );
}

// Custom hook for todo management with optimistic updates
function useTodos(initialTodos: Todo[] = []) {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);

    function toggleTodo(id: number) {
        // Clear any previous error
        setError(null);

        // Optimistically update UI
        const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));

        // Update state immediately
        setTodos(newTodos);

        // Then perform the actual API call without blocking UI
        startTransition(async () => {
            try {
                await apiUpdateTodo(id, newTodos.find((t) => t.id === id)!.completed);
                // State is already updated!
            } catch (err) {
                // Revert on error
                setTodos(todos);
                setError(`Failed to update todo: ${err instanceof Error ? err.message : 'Unknown error'}`);
            }
        });
    }

    // Add more methods as needed (addTodo, removeTodo, etc.)

    return {
        todos,
        isPending,
        error,
        toggleTodo
    };
}

function TodoApp() {
    // Use the custom hook for todo management
    const { todos, isPending, error, toggleTodo } = useTodos([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build an app', completed: false },
        { id: 3, text: 'Master hooks', completed: false }
    ]);

    return (
        <div className="todo-app">
            <h2>My Todos {isPending && '(Saving...)'}</h2>

            {error && <div className="error-message">{error}</div>}

            <TodoList todos={todos} onToggleTodo={toggleTodo} />

            <div className="todo-info">
                <p>Completed: {todos.filter((t) => t.completed).length}</p>
                <p>Remaining: {todos.filter((t) => !t.completed).length}</p>
            </div>
        </div>
    );
}

export default TodoApp;
