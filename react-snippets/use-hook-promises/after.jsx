import { Suspense, use } from 'react';

const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());

function TodoContent() {
    const data = use(todoPromise);
    return <TodoDisplay data={data} />;
}

export function TodoContainer() {
    return (
        <ErrorBoundary fallback={<ErrorMessage error={'Something went wrong'} />}>
            <Suspense fallback={<Loader />}>
                <TodoContent />
            </Suspense>
        </ErrorBoundary>
    );
}
