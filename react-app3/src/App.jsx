import { useState } from 'react';
import './App.css';
import { TabsBefore } from './async-use-transition/tabs/TabsBefore';
//import { AnalyticsViewer } from './async-use-transition/before';
// import { AnalyticsViewerAfter } from './async-use-transition/analytics/AnalyticsViewerAfter';

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

export default App;
