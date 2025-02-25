import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/async-use-transition/')({
    component: Page
});

function Page() {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Async useTransition Examples</h1>
                </div>
                <div className="bg-white shadow overflow-hidden rounded-lg">
                    <ul className="divide-y divide-gray-200">
                        <li className="p-4 hover:bg-gray-50">
                            <Link
                                to="/async-use-transition/tabs"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Example with Tabs
                            </Link>
                        </li>
                        <li className="p-4 hover:bg-gray-50">
                            <Link
                                to="/async-use-transition/analytics"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Example with Analytics
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
