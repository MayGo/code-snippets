import { useEffect, useState } from 'react';

export function TodoContent() {
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

    if (isLoading) return <Loader />;
    if (error) return <ErrorMessage error={error} />;

    return <TodoDisplay data={data} />;
}
