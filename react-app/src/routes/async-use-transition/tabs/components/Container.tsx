// eslint-disable-next-line react/prop-types
export const Container = ({ children }: { children: React.ReactNode }) => {
    return <div style={{ position: 'relative', padding: '16px' }}>{children}</div>;
};
