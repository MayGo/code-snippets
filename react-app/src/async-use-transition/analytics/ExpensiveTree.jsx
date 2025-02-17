// eslint-disable-next-line react/prop-types
export function ExpensiveChart({ data = [], dimmed }) {
    // Simulate heavy rendering by doing expensive calculations
    const heavyCalculation = () => {
        const start = Date.now();
        const waitTime = 500; // Half second of blocking calculation
        while (Date.now() - start < waitTime) {
            // Simulate complex math operations
            Math.random() * Math.random();
        }
    };

    // Force heavy calculation on each render
    heavyCalculation();

    // Create a large number of elements to render
    const elements = [];
    for (let i = 0; i < 1000; i++) {
        elements.push(
            <div key={i} style={{ padding: '2px', margin: '1px', border: '1px solid #ccc' }}>
                {data.map((item) => (
                    <span key={item.id}>
                        {item.name} - {Math.random()}
                    </span>
                ))}
            </div>
        );
    }

    return <div style={{ opacity: dimmed ? 0.5 : 1 }}>{elements}</div>;
}
