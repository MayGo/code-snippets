import { BackButton } from './BackButton';

export interface ItemListProps {
    title: string;
    description?: string;
    items: {
        id: string;
        label: string;
        href: string;
    }[];
    showBackButton?: boolean;
}

export function ItemList({ title, description, items, showBackButton = true }: ItemListProps) {
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
                <div className="bg-white shadow overflow-hidden rounded-lg">
                    <ul className="divide-y divide-gray-200">
                        {items.map((item) => (
                            <li key={item.id} className="p-4 hover:bg-gray-50">
                                <a href={item.href} className="text-blue-600 hover:text-blue-800 font-medium">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
