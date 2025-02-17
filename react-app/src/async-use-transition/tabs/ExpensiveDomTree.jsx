export const ExpensiveDomTree = () => {
    const createDomHeavyTree = (depth = 5) => {
        if (depth === 0) return null;

        return (
            <div
                style={{
                    padding: '2px',
                    margin: '1px',
                    border: '1px solid rgba(0,0,0,0.1)'
                }}
            >
                {/* Create 10 children per node */}
                {Array.from({ length: 11 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            marginLeft: '10px',
                            backgroundColor: `hsl(${depth * 50}, 50%, 50%)`,
                            borderRadius: `${depth}px`
                        }}
                    >
                        {createDomHeavyTree(depth - 1)}
                    </div>
                ))}
            </div>
        );
    };

    return <div>{createDomHeavyTree()}</div>;
};
