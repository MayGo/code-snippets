import { memo, useState } from 'react';
import { ExpensiveDomTree } from './ExpensiveDomTree';
import { Home } from './Home';

export const TabsTemp = () => {
    const [tab, setTab] = useState('home');

    const onTabClick = (tab) => {
        setTab(tab);
    };

    return (
        <>
            <button onClick={() => onTabClick('home')}>Home</button>
            <button onClick={() => onTabClick('settings')}>Settings</button>

            {tab === 'home' && <Home />}
            {tab === 'settings' && <ExpensiveDomTree />}
        </>
    );
};

export const TabsBefore = memo(TabsTemp);
