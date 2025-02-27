import { createFileRoute } from '@tanstack/react-router';
import '../App.css';
import { ItemList } from '../components/ItemList';

export const Route = createFileRoute('/')({
    component: App
});

function App() {
    return (
        <ItemList
            title="Navigation"
            items={[
                {
                    id: 'async-use-transition',
                    label: 'async-use-transition',
                    href: '/async-use-transition'
                },
                {
                    id: 'use-hook-promises',
                    label: 'use-hook-promises',
                    href: '/use-hook-promises/'
                },
                {
                    id: 'form-actions',
                    label: 'form-actions',
                    href: '/form-actions/'
                },
                {
                    id: 'optimistic-demo',
                    label: 'optimistic-demo',
                    href: '/optimistic-demo/'
                }
            ]}
            showBackButton={false}
        />
    );
}
