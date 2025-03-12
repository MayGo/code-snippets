import { createFileRoute } from '@tanstack/react-router';
import { BeforeAfterCard } from '../../components/BeforeAfterCard';

export const Route = createFileRoute('/no-more-forwardref/')({
    component: NoMoreForwardRefDemo
});

function NoMoreForwardRefDemo() {
    return (
        <BeforeAfterCard
            title="No More ForwardRef Demo"
            description="This example demonstrates two different approaches to handling refs in React:"
            beforeLink="/no-more-forwardref/before"
            afterLink="/no-more-forwardref/after"
            beforeText="Before: Traditional forwardRef approach"
            afterText="After: Modern ref handling without forwardRef"
        />
    );
}
