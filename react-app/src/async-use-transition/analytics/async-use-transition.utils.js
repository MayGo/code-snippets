export const fakeData = [
    {
        id: 1,
        name: 'John Doe',
        age: 30
    }
];

export const processAnalytics = (data) => {
    console.log('processing data');
    const start = Date.now();
    const waitTime = 100;

    while (Date.now() - start < waitTime) {
        // Simulate heavy processing
    }

    const processed = data.map((item) => ({
        ...item,
        name: item.name + Date.now().valueOf()
    }));

    console.log('processed data', processed);
    return processed;
};

export const fetchData = () => {
    console.log('fetching data');

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('resolved data');
            resolve(fakeData);
        }, 1000);
    });
};
