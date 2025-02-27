import { useActionState, useEffect, useOptimistic, useState } from 'react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();
    return <Button pending={pending}>{pending ? 'Adding...' : 'Add Todo'}</Button>;
}

export function Todos() {
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

    const [formState, formAction, isPending] = useActionState(optimisticAddTodo, {
        success: false,
        error: null
    });

    return (
        <TodoLayout>
            <Card title="Add a New Todo">
                <form action={formAction} className="space-y-4">
                    <Input name="todo" placeholder="Enter a new todo" required disabled={isPending} />
                    <ErrorMessage error={formState.error} />
                    <SubmitButton />
                </form>
            </Card>
            <TodoList todos={optimisticTodos} />
        </TodoLayout>
    );
}
