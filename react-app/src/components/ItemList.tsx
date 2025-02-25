import { Layout } from './Layout';

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
        <Layout title={title} description={description} showBackButton={showBackButton}>
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
        </Layout>
    );
}
