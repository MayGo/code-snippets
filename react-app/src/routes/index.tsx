import { createFileRoute } from '@tanstack/react-router';
import '../App.css';

export const Route = createFileRoute('/')({
    component: App
});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <a className="App-link" href="/async-use-transition/tabs" target="_blank" rel="noopener noreferrer">
                    async-use-transition/tabs
                </a>
            </header>
        </div>
    );
}
