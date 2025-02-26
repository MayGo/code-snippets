interface AnalyticsData {
    id: number;
    name: string;
    age: number;
}

export const fakeData: AnalyticsData[] = [
    {
        id: 1,
        name: 'John Doe',
        age: 30
    }
];

export const processAnalytics = (data: AnalyticsData[]): AnalyticsData[] => {
    console.log('processing data');
    const start = Date.now();
    const waitTime = 100;

    while (Date.now() - start < waitTime) {
        // Simulate heavy processing
    }

    const processed = data.map((item: AnalyticsData) => ({
        ...item,
        name: item.name + Date.now().valueOf()
    }));

    console.log('processed data', processed);
    return processed;
};

export const fetchData = (params?: unknown): Promise<AnalyticsData[]> => {
    console.log('fetching data');

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('resolved data');
            resolve(fakeData);
        }, 1000);
    });
};
