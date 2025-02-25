import { createFileRoute } from '@tanstack/react-router';
import { BeforeAfterCard } from '../../../components/BeforeAfterCard';

export const Route = createFileRoute('/async-use-transition/analytics/')({
    component: App
});

function App() {
    return (
        <BeforeAfterCard
            title="Analytics Example"
            beforeLink="/async-use-transition/analytics/before"
            afterLink="/async-use-transition/analytics/after"
            beforeText="Before Example"
            afterText="After Example"
        />
    );
}
