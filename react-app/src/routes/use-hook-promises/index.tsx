import { createFileRoute } from '@tanstack/react-router';
import { BeforeAfterCard } from '../../components/BeforeAfterCard';

export const Route = createFileRoute('/use-hook-promises/')({
    component: UseHookPromisesIndex
});

function UseHookPromisesIndex() {
    return (
        <BeforeAfterCard
            title="React use() Hook Examples"
            description="These examples demonstrate two different approaches to data fetching in React:"
            beforeLink="/use-hook-promises/before"
            afterLink="/use-hook-promises/after"
            beforeText="Before: Traditional useEffect Data Fetching"
            afterText="After: Modern use() Hook with Suspense"
        />
    );
}
