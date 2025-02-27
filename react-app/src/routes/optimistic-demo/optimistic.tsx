import { useActionState, useEffect, useOptimistic, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { addTodo, getTodos } from './components/api';
import { Button } from './components/Button';
import { ErrorMessage } from './components/ErrorMessage';
import { Input } from './components/Input';
import { TodoList } from './components/TodoList';
import type { FormState, TodoItem } from './components/types';
import { uniqueId } from './components/utils';

function SubmitButton() {
    const { pending } = useFormStatus();
    return <Button pending={pending}>{pending ? 'Adding...' : 'Add Todo'}</Button>;
}

export default function OptimisticDemo() {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    // Set up optimistic state
    const [optimisticTodos, addOptimisticTodo] = useOptimistic<TodoItem[], TodoItem>(todos, (state, newTodo) => [
        ...state,
        newTodo
    ]);

    // Fetch todos on component mount
    useEffect(() => {
        const fetchTodos = async () => {
            const fetchedTodos = await getTodos();
            setTodos(fetchedTodos);
        };
        fetchTodos();
    }, []);

    // Define optimistic action handler
    const optimisticAddTodo = async (prevState: FormState, formData: FormData) => {
        const text = formData.get('todo') as string;
        const optimisticTodo: TodoItem = {
            id: uniqueId(),
            text,
            completed: false,
            optimistic: true
        };

        // Update UI optimistically
        addOptimisticTodo(optimisticTodo);

        // Process the actual request
        const result = await addTodo(prevState, formData);

        // If successful, refresh todos from server
        if (result.success) {
            const updatedTodos = await getTodos();
            setTodos(updatedTodos);
        }

        return result;
    };

    // Set up form action state
    const [formState, formAction] = useActionState(optimisticAddTodo, {
        success: false,
        error: null
    });

    return (
        <div className="max-w-md mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">useOptimistic Demo</h1>
                <p className="text-gray-600">
                    This demo shows how to use React's useOptimistic hook for instant UI feedback while waiting for
                    server confirmation.
                </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Add a New Todo</h2>
                <form action={formAction} className="space-y-4">
                    <div>
                        <Input name="todo" placeholder="Enter a new todo" required />
                        <ErrorMessage error={formState.error} />
                    </div>
                    <SubmitButton />
                </form>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Todo List</h2>
                <TodoList todos={optimisticTodos} />
            </div>
        </div>
    );
}
