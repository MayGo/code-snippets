import { memo, useState, useTransition } from 'react';
import { ExpensiveDomTree } from './ExpensiveDomTree';
import { Home } from './Home';
import { LoadingOverlay } from './LoadingOverlay';

export const TabsTemp = () => {
    const [tab, setTab] = useState('home');
    const [isPending, startTransition] = useTransition();

    console.log('Rendering after component isPending', isPending);

    const onTabChange = (tab) => {
        startTransition(async () => {
            setTab(tab);
        });
    };

    return (
        <>
            <button
                onClick={() => onTabChange('home')}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2"
            >
                Home
            </button>
            <button
                onClick={() => onTabChange('settings')}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Settings
            </button>
            <div className="mt-4 p-4 relative">
                {isPending && <LoadingOverlay />}
                {tab === 'home' && <Home />}
                {tab === 'settings' && <ExpensiveDomTree />}
            </div>
        </>
    );
};

export const TabsAfter = memo(TabsTemp);
