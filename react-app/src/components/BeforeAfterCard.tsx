import { ItemList } from './ItemList';

interface BeforeAfterCardProps {
    title: string;
    description?: string;
    beforeLink: string;
    afterLink: string;
    beforeText?: string;
    afterText?: string;
}

export function BeforeAfterCard({
    title,
    description,
    beforeLink,
    afterLink,
    beforeText = 'Before: Traditional Approach',
    afterText = 'After: Modern Approach'
}: BeforeAfterCardProps) {
    return (
        <ItemList
            title={title}
            description={description}
            items={[
                {
                    id: 'before',
                    label: beforeText,
                    href: beforeLink
                },
                {
                    id: 'after',
                    label: afterText,
                    href: afterLink
                }
            ]}
        />
    );
}
