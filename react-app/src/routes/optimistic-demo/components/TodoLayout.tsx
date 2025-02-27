interface TodoLayoutProps {
    children: React.ReactNode;
}

export function TodoLayout({ children }: TodoLayoutProps) {
    return <div className="max-w-md mx-auto">{children}</div>;
}
