import { memo, useState } from 'react';
import { ExpensiveDomTree } from './ExpensiveDomTree';
import { Home } from './Home';

type TabType = 'home' | 'settings';

export const TabsTemp = () => {
    const [tab, setTab] = useState<TabType>('home');

    const onTabClick = (newTab: TabType) => {
        setTab(newTab);
    };

    return (
        <>
            <button
                onClick={() => onTabClick('home')}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2"
            >
                Home
            </button>
            <button
                onClick={() => onTabClick('settings')}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Settings
            </button>

            <div className="mt-4 p-4">
                {tab === 'home' && <Home />}
                {tab === 'settings' && <ExpensiveDomTree />}
            </div>
        </>
    );
};

export const TabsBefore = memo(TabsTemp);
