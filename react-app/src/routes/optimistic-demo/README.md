# React useOptimistic Demo

This minimal example demonstrates how to use React's `useOptimistic` hook to provide instant UI feedback while waiting for server operations to complete.

## Key Features

- **Optimistic Updates**: Immediately update the UI before server confirmation
- **Form Actions**: Modern React form handling with `useActionState`
- **Visual Feedback**: Clear indication of optimistic vs confirmed data
- **Error Handling**: Proper handling of server rejections

## How useOptimistic Works

The `useOptimistic` hook in React allows for creating a temporary, optimistic state that immediately reflects user actions before they're confirmed by the server.

```tsx
const [optimisticData, addOptimisticData] = useOptimistic<DataType[], NewDataType>(currentData, (state, newItem) => [
    ...state,
    newItem
]);
```

1. You provide your current state (`currentData`)
2. You provide a function that describes how to update that state (`(state, newItem) => [...state, newItem]`)
3. It returns the optimistic state and a function to trigger optimistic updates

## Implementation Details

The key parts of this implementation:

1. We create optimistic state with `useOptimistic`
2. Our form action handler:
    - Immediately adds an optimistic todo to the UI (with a visual indicator)
    - Sends the actual request to the server
    - Updates the real state once the server confirms
    - Handles any errors appropriately

## Learning Resources

- [React Documentation on useOptimistic](https://react.dev/reference/react/useOptimistic)
- [React Form Actions](https://react.dev/reference/react-dom/components/form#handling-form-submission-with-action)
- [useFormStatus Hook](https://react.dev/reference/react-dom/hooks/useFormStatus)
