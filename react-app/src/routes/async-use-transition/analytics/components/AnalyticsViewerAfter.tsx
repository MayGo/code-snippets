import { memo, useState, useTransition } from 'react';
import { ExpensiveChart } from './ExpensiveChart';
import { fetchData, processAnalytics } from './async-use-transition.utils';

interface AnalyticsData {
    id: number;
    name: string;
    age: number;
}

function AnalyticsViewerTemp() {
    const [report, setReport] = useState<AnalyticsData[] | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleAnalyze = (params: unknown) => {
        startTransition(async () => {
            const rawData = await fetchData(params); // 1.2s
            startTransition(() => {
                const processed = processAnalytics(rawData); // 3s
                setReport(processed); // Non-blocking update
            });
        });
    };

    console.log('Rendering after component isPending', isPending);

    return (
        <section>
            <button
                onClick={() => handleAnalyze({})}
                disabled={isPending}
                className={`px-4 py-2 rounded-md font-medium ${
                    isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
            >
                {isPending ? 'Generating...' : 'Run Report'}
            </button>
            {report && <ExpensiveChart data={report} dimmed={isPending} />}
        </section>
    );
}

export const AnalyticsViewerAfter = memo(AnalyticsViewerTemp);
