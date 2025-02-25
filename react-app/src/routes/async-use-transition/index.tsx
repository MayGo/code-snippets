import { createFileRoute } from '@tanstack/react-router';
import { ItemList } from '../../components/ItemList';

export const Route = createFileRoute('/async-use-transition/')({
    component: Page
});

function Page() {
    return (
        <ItemList
            title="Async useTransition Examples"
            showBackButton={true}
            items={[
                {
                    id: 'tabs',
                    label: 'Example with Tabs',
                    href: '/async-use-transition/tabs'
                },
                {
                    id: 'analytics',
                    label: 'Example with Analytics',
                    href: '/async-use-transition/analytics'
                }
            ]}
        />
    );
}
