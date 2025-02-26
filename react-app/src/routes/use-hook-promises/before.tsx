import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import { TodoItem } from './components/TodoItem';
import type { Todo } from './components/todo.utils';

export const Route = createFileRoute('/use-hook-promises/before')({
    component: BeforeComponent
});

function BeforeComponent() {
    const [data, setData] = useState<Todo>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error>();

    console.log('BeforeComponent render....');

    useEffect(() => {
        let active = true;

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                const result = await response.json();

                if (active) {
                    setData(result as Todo);
                    setIsLoading(false);
                }
            } catch (err) {
                if (active) {
                    setError(err instanceof Error ? err : new Error('An error occurred'));
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        // Cleanup function to prevent race conditions
        return () => {
            active = false;
        };
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Layout
            title="Before useHook"
            description="UI blocked by async waterfalls. Manual race condition prevention. "
            showBackButton={true}
        >
            <TodoItem data={data} />
        </Layout>
    );
}
