import { createFileRoute } from '@tanstack/react-router';
import { useActionState, useEffect, useOptimistic, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Layout } from '../../components/Layout';
import { addTodo, getTodos } from './components/api';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { ErrorMessage } from './components/ErrorMessage';
import { Input } from './components/Input';
import { TodoLayout } from './components/TodoLayout';
import { TodoList } from './components/TodoList';
import type { FormState, TodoItem } from './components/types';
import { uniqueId } from './components/utils';

export const Route = createFileRoute('/optimistic-demo/after')({
    component: AfterComponent
});

function SubmitButton() {
    const { pending } = useFormStatus();
    return <Button pending={pending}>{pending ? 'Adding...' : 'Add Todo'}</Button>;
}

function Todos() {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const [optimisticTodos, addOptimisticTodo] = useOptimistic<TodoItem[], TodoItem>(todos, (state, newTodo) => [
        ...state,
        newTodo
    ]);

    const fetchTodos = async () => {
        const fetchedTodos = await getTodos();
        setTodos(fetchedTodos);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const optimisticAddTodo = async (prevState: FormState, formData: FormData) => {
        const text = formData.get('todo') as string;
        const optimisticTodo: TodoItem = { id: uniqueId(), text, completed: false, optimistic: true };

        addOptimisticTodo(optimisticTodo);

        const result = await addTodo(prevState, formData);

        if (result.success) {
            await fetchTodos();
        }

        return result;
    };

    const [formState, formAction] = useActionState(optimisticAddTodo, {
        success: false,
        error: null
    });

    return (
        <TodoLayout>
            <Card title="Add a New Todo">
                <form action={formAction} className="space-y-4">
                    <Input name="todo" placeholder="Enter a new todo" required />
                    <ErrorMessage error={formState.error} />
                    <SubmitButton />
                </form>
            </Card>
            <TodoList todos={optimisticTodos} />
        </TodoLayout>
    );
}

function AfterComponent() {
    return (
        <Layout
            title="After: useOptimistic Hook"
            description="This example demonstrates how to use React's useOptimistic hook for clean, declarative optimistic UI updates."
            showBackButton={true}
        >
            <Todos />
        </Layout>
    );
}
