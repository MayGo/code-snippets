import { createFileRoute } from '@tanstack/react-router';
import { Suspense, use } from 'react';
import { BackButton } from '../../components/BackButton';

// Define the Todo type to fix type errors
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const Route = createFileRoute('/use-hook-promises/after')({
    component: AfterComponent
});

// Create a promise for fetching data
// In a real application, you'd use a more sophisticated cache strategy
const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => data as Todo);

// Component that uses the use() hook with the promise
function TodoDetail() {
    // use() hook unwraps the promise value directly in the render function
    const data = use(todoPromise);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Todo Item (After)</h2>
            <p className="mb-2">
                <strong>Title:</strong> {data.title}
            </p>
            <p className="mb-4">
                <strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}
            </p>
        </div>
    );
}

// Main component with Suspense boundary
function AfterComponent() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <Suspense fallback={<div>Loading...</div>}>
                <TodoDetail />
            </Suspense>
            <div className="mt-6">
                <BackButton />
            </div>
        </div>
    );
}
