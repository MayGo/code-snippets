import { createFileRoute } from '@tanstack/react-router';
import { BeforeAfterCard } from '../../components/BeforeAfterCard';

// Using 'as any' to bypass type checking for demonstration purposes
export const Route = createFileRoute('/optimistic-demo/' as any)({
    component: OptimisticDemoIndex
});

function OptimisticDemoIndex() {
    return (
        <BeforeAfterCard
            title="React Optimistic Demo"
            description="This example demonstrates how to use the useOptimistic hook to update the UI optimistically."
            beforeLink="/optimistic-demo/before"
            afterLink="/optimistic-demo/after"
            beforeText="Before: Traditional useState for optimistic updates"
            afterText="After: useOptimistic for optimistic updates"
        />
    );
}
