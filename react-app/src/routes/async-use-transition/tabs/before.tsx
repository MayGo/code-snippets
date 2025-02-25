import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import '../../../App.css';

import { TabsBefore } from './-components/TabsBefore';

export const Route = createFileRoute('/async-use-transition/tabs/before')({
    component: App
});

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
            <div className="card">
                <TabsBefore />
            </div>
        </div>
    );
}
