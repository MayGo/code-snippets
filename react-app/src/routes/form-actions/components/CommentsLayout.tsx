interface CommentsLayoutProps {
    children: React.ReactNode;
}

export function CommentsLayout({ children }: CommentsLayoutProps) {
    return <div className="max-w-2xl mx-auto">{children}</div>;
}
