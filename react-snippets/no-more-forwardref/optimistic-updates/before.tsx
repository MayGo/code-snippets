import React, { forwardRef, useRef, useState } from 'react';

// Mock API function
const apiUpdateTodo = async (id: number, completed: boolean): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Updated todo ${id} to ${completed ? 'completed' : 'incomplete'}`);
            resolve();
        }, 1000);
    });
};

interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
    onToggle: (id: number) => void;
}

interface TodoListProps {
    todos: Array<{
        id: number;
        text: string;
        completed: boolean;
    }>;
    onToggleTodo: (id: number) => void;
}

// TodoItem component with forwardRef to pass ref to the checkbox
const TodoItem = forwardRef<HTMLInputElement, TodoItemProps>(({ id, text, completed, onToggle }, ref) => {
    return (
        <li className="todo-item">
            <label>
                <input type="checkbox" ref={ref} checked={completed} onChange={() => onToggle(id)} />
                <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
            </label>
        </li>
    );
});

// TodoList component that manages todo items
const TodoList = forwardRef<HTMLUListElement, TodoListProps>(({ todos, onToggleTodo }, ref) => {
    // Create refs for each todo item
    const todoRefs = useRef<Map<number, HTMLInputElement>>(new Map());

    const registerTodoRef = (id: number, element: HTMLInputElement | null) => {
        if (element) {
            todoRefs.current.set(id, element);
        } else {
            todoRefs.current.delete(id);
        }
    };

    return (
        <ul ref={ref} className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={onToggleTodo}
                    ref={(el) => registerTodoRef(todo.id, el)}
                />
            ))}
        </ul>
    );
});

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build an app', completed: false }
    ]);
    const [isUpdating, setIsUpdating] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);

    async function toggleTodo(id: number) {
        setIsUpdating(true);

        // Find the todo and toggle its completed status
        const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));

        // Update the state
        setTodos(newTodos);

        try {
            // Call the API
            await apiUpdateTodo(id, newTodos.find((t) => t.id === id)!.completed);
        } catch (error) {
            // Revert on error
            setTodos(todos);
            console.error('Failed to update todo:', error);
        } finally {
            setIsUpdating(false);
        }
    }

    return (
        <div className="todo-app">
            <h2>My Todos {isUpdating && '(Saving...)'}</h2>
            <TodoList ref={listRef} todos={todos} onToggleTodo={toggleTodo} />
        </div>
    );
}

export default TodoApp;
