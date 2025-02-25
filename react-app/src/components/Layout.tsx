import type { ReactNode } from 'react';
import { BackButton } from './BackButton';

export interface LayoutProps {
    title: string;
    description?: string;
    showBackButton?: boolean;
    children: ReactNode;
}

export function Layout({ title, description, showBackButton = true, children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {showBackButton && (
                        <div className="flex justify-start mb-4">
                            <BackButton />
                        </div>
                    )}
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
                    {description && <p className="mb-8">{description}</p>}
                </div>
                {children}
            </div>
        </div>
    );
}
