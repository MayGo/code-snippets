import { Suspense, use } from 'react';

// Create a promise for fetching data
// In a real application, you'd use a more sophisticated cache strategy
const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());

// Component that uses the use() hook with the promise
function TodoDetail() {
    // use() hook unwraps the promise value directly in the render function
    const data = use(todoPromise);

    return (
        <div>
            <h2>Todo Item</h2>
            <p>
                <strong>Title:</strong> {data.title}
            </p>
            <p>
                <strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}
            </p>
        </div>
    );
}

// Main component with Suspense boundary
function AfterComponent() {
    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <Suspense fallback={<p>Loading...</p>}>
                <TodoDetail />
            </Suspense>
        </ErrorBoundary>
    );
}

export default AfterComponent;
