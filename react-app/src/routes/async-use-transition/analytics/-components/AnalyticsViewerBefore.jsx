import { memo, useState } from 'react';
import { ExpensiveChart } from './ExpensiveChart';
import { fetchData, processAnalytics } from './async-use-transition.utils';

function AnalyticsViewerTemp() {
    const [report, setReport] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const handleAnalyze = async (params) => {
        setIsPending(true); // UI frozen because of heavy rerender of ExpensiveChart
        const rawData = await fetchData(params); // Non-blocking (1s)
        const processed = processAnalytics(rawData); // Blocking (3s)
        setReport(processed); // UI frozen for 1.5s total
        setIsPending(false); // multiple re-renders
    };

    console.log('isPending', isPending);
    console.log('report', report);

    return (
        <section>
            <button onClick={handleAnalyze} disabled={isPending}>
                {isPending ? 'Generating...' : 'Run Report'}
            </button>
            {report && <ExpensiveChart data={report} dimmed={isPending} />}
        </section>
    );
}

export const AnalyticsViewerBefore = memo(AnalyticsViewerTemp);
