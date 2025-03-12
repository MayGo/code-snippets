import React, { useState } from 'react';

// Import the examples
import AsyncAfter from './async-button/after';
import AsyncBefore from './async-button/before';
import BasicAfter from './basic-example/after';
import BasicBefore from './basic-example/before';
import OptimisticAfter from './optimistic-updates/after';
import OptimisticBefore from './optimistic-updates/before';

// Simple tab component for navigation
function Tabs({ tabs, activeTab, onChange }) {
    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => onChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

function App() {
    const [activeTab, setActiveTab] = useState('basic-before');

    const tabs = [
        { id: 'basic-before', label: 'Basic (Before)' },
        { id: 'basic-after', label: 'Basic (After)' },
        { id: 'async-before', label: 'Async (Before)' },
        { id: 'async-after', label: 'Async (After)' },
        { id: 'optimistic-before', label: 'Optimistic (Before)' },
        { id: 'optimistic-after', label: 'Optimistic (After)' }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'basic-before':
                return <BasicBefore />;
            case 'basic-after':
                return <BasicAfter />;
            case 'async-before':
                return <AsyncBefore />;
            case 'async-after':
                return <AsyncAfter />;
            case 'optimistic-before':
                return <OptimisticBefore />;
            case 'optimistic-after':
                return <OptimisticAfter />;
            default:
                return <div>Select an example</div>;
        }
    };

    return (
        <div className="app-container">
            <h1>No more forwardRef: Demo Examples</h1>
            <p className="app-description">
                These examples demonstrate modern React patterns that can help you avoid using forwardRef. Compare the
                "before" examples using forwardRef with the "after" examples using modern patterns.
            </p>

            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

            <div className="content-container">{renderContent()}</div>
        </div>
    );
}

export default App;
