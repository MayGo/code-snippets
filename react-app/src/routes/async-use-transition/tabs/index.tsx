import { createFileRoute } from '@tanstack/react-router';
import '../../../App.css';

export const Route = createFileRoute('/async-use-transition/tabs/')({
    component: App
});

function App() {
    return (
        <ul>
            <li>
                <a
                    className="App-link"
                    href="/async-use-transition/tabs/before"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    async-use-transition/tabs/before
                </a>
            </li>
            <li>
                <a
                    className="App-link"
                    href="/async-use-transition/tabs/after"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    async-use-transition/tabs/after
                </a>
            </li>
        </ul>
    );
}
