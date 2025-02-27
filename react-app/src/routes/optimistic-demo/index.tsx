import { createFileRoute } from '@tanstack/react-router';
import OptimisticDemo from './optimistic';

export const Route = createFileRoute('/optimistic-demo/')({
    component: OptimisticDemo
});
