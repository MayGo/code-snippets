import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import { addTodo, getTodos } from './components/api';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { ErrorMessage } from './components/ErrorMessage';
import { Input } from './components/Input';
import { TodoLayout } from './components/TODOLayout';
import { TodoList } from './components/TodoList';
import type { TodoItem } from './components/types';
import { uniqueId } from './components/utils';

export const Route = createFileRoute('/optimistic-demo/before')({
    component: BeforeComponent
});

function Todos() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [optimisticTodos, setOptimisticTodos] = useState<TodoItem[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [todoText, setTodoText] = useState('');
    const [error, setError] = useState<string | null>(null);

    const fetchTodos = async () => {
        const fetchedTodos = await getTodos();
        setTodos(fetchedTodos);
        setOptimisticTodos(fetchedTodos);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    useEffect(() => {
        setOptimisticTodos(todos);
    }, [todos]);

    const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);
        setError(null);

        try {
            const newTodo: TodoItem = { id: uniqueId(), text: todoText, completed: false, optimistic: true };

            setOptimisticTodos((prev) => [...prev, newTodo]);

            const result = await addTodo({ success: false, error: null }, new FormData(e.target as HTMLFormElement));

            if (result.success) {
                await fetchTodos();
                setTodoText('');
            } else {
                setError(result.error || 'Failed to add todo');
                setOptimisticTodos(todos);
            }
        } catch (err) {
            setError('An unexpected error occurred');
            setOptimisticTodos(todos);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <TodoLayout>
            <Card title="Add a New Todo">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        name="todo"
                        placeholder="Enter a new todo"
                        required
                        disabled={isSubmitting}
                        value={todoText}
                        onChange={handleTodoChange}
                    />
                    <ErrorMessage error={error} />

                    <Button pending={isSubmitting}>{isSubmitting ? 'Adding...' : 'Add Todo'}</Button>
                </form>
            </Card>

            <TodoList todos={optimisticTodos} />
        </TodoLayout>
    );
}

function BeforeComponent() {
    return (
        <Layout
            title="Before: Traditional Optimistic Updates"
            description=" This example shows the manual way of managing optimistic updates using React state."
            showBackButton={true}
        >
            <Todos />
        </Layout>
    );
}
