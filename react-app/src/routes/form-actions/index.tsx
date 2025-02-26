import { createFileRoute } from '@tanstack/react-router';
import { BeforeAfterCard } from '../../components/BeforeAfterCard';

// Using 'as any' to bypass type checking for demonstration purposes
export const Route = createFileRoute('/form-actions/' as any)({
    component: FormActionsIndex
});

function FormActionsIndex() {
    return (
        <BeforeAfterCard
            title="React Form Actions Examples"
            description="These examples demonstrate two different approaches to form handling in React:"
            beforeLink="/form-actions/before"
            afterLink="/form-actions/after"
            beforeText="Before: Traditional useState Form Management"
            afterText="After: Modern Form Actions with useFormState and useOptimistic"
        />
    );
}
