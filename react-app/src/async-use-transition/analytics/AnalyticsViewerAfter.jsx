import { memo, useState, useTransition } from 'react';
import { ExpensiveChart } from './ExpensiveChart';
import { fetchData, processAnalytics } from './async-use-transition.utils';

function AnalyticsViewerTemp() {
    const [report, setReport] = useState(null);
    const [isPending, startTransition] = useTransition();

    const handleAnalyze = (params) => {
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
            <button onClick={handleAnalyze} disabled={isPending}>
                {isPending ? 'Generating...' : 'Run Report'}
            </button>
            {report && <ExpensiveChart data={report} dimmed={isPending} />}
        </section>
    );
}

export const AnalyticsViewerAfter = memo(AnalyticsViewerTemp);
