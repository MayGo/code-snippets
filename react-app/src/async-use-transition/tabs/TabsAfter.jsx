import { memo, useState, useTransition } from 'react';
import { Container } from './Container';
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
            <button onClick={() => onTabChange('home')}>Home</button>
            <button onClick={() => onTabChange('settings')}>Settings</button>{' '}
            <Container>
                {isPending && <LoadingOverlay />}
                {tab === 'home' && <Home />}
                {tab === 'settings' && <ExpensiveDomTree />}
            </Container>
        </>
    );
};

export const TabsAfter = memo(TabsTemp);
