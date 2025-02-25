import { createFileRoute } from '@tanstack/react-router';
import '../App.css';

export const Route = createFileRoute('/')({
    component: App
});

function App() {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Navigation</h1>
                </div>
                <div className="bg-white shadow overflow-hidden rounded-lg">
                    <ul className="divide-y divide-gray-200">
                        <li className="p-4 hover:bg-gray-50">
                            <a
                                href="/async-use-transition/tabs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                async-use-transition
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
