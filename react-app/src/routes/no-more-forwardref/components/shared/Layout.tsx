import type { ReactNode } from 'react';

type LayoutProps = {
    title: string;
    children: ReactNode;
};

export function Layout({ title, children }: LayoutProps) {
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>

            {children}
        </div>
    );
}
