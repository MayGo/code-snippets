import { createFileRoute } from '@tanstack/react-router';
import '../../../App.css';
import { BeforeAfterCard } from '../../../components/BeforeAfterCard';

export const Route = createFileRoute('/async-use-transition/tabs/')({
    component: App
});

function App() {
    return (
        <BeforeAfterCard
            title="Tabs Example"
            beforeLink="/async-use-transition/tabs/before"
            afterLink="/async-use-transition/tabs/after"
            beforeText="Before Example"
            afterText="After Example"
        />
    );
}
