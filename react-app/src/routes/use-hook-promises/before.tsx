import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';

// Define the Todo type to fix type errors
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const Route = createFileRoute('/use-hook-promises/before')({
    component: BeforeComponent
});

function BeforeComponent() {
    const [data, setData] = useState<Todo | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

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
            <h2 className="text-2xl font-bold mb-4">Todo Item (Before)</h2>
            <p className="mb-2">
                <strong>Title:</strong> {data?.title}
            </p>
            <p className="mb-4">
                <strong>Completed:</strong> {data?.completed ? 'Yes' : 'No'}
            </p>
        </Layout>
    );
}
