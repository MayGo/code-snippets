import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/async-use-transition/analytics/')({
    component: App
});

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
        </div>
    );
}
