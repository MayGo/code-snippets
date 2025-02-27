import type { FormState, TodoItem } from './types';

// Demo data
let todos: TodoItem[] = [
    { id: '1', text: 'Learn React', completed: false },
    { id: '2', text: 'Learn useOptimistic', completed: false }
];

// Mock API to fetch todos
export async function getTodos(): Promise<TodoItem[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [...todos];
}

// Mock API to add a todo
export async function addTodo(prevState: FormState, formData: FormData): Promise<FormState> {
    const text = formData.get('todo') as string;

    // Validate input
    if (!text || text.trim().length < 2) {
        return {
            success: false,
            error: 'Todo must be at least 2 characters'
        };
    }

    try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Add the new todo
        const newTodo: TodoItem = {
            id: `todo-${Date.now()}`,
            text,
            completed: false
        };

        todos.push(newTodo);

        return {
            success: true,
            error: null
        };
    } catch (error) {
        return {
            success: false,
            error: 'Failed to add todo'
        };
    }
}
