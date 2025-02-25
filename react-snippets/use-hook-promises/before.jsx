import { useEffect, useState } from 'react';

function BeforeComponent() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let active = true;

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                const result = await response.json();

                if (active) {
                    setData(result);
                    setIsLoading(false);
                }
            } catch (err) {
                if (active) {
                    setError(err);
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
        <div>
            <h2>Todo Item</h2>
            <p>
                <strong>Title:</strong> {data?.title}
            </p>
            <p>
                <strong>Completed:</strong> {data?.completed ? 'Yes' : 'No'}
            </p>
        </div>
    );
}

export default BeforeComponent;
