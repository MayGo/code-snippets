import { createFileRoute } from '@tanstack/react-router';
import { Suspense, useState } from 'react';
// Using only available hooks from react-dom
import { useFormState, useFormStatus } from 'react-dom';
import { Layout } from '../../components/Layout';
import type { CommentType } from './components/actions';
import { addComment } from './components/actions';
import { CommentsList } from './components/CommentsList';
import { MainButton } from './components/MainButton';
import { Textarea } from './components/Textarea';

// Adding 'as any' to handle type error, but in a real app this would be properly
// typed in the router configuration
export const Route = createFileRoute('/form-actions/after' as any)({
    component: AfterComponent
});

function SubmitButton() {
    const { pending } = useFormStatus();

    return <MainButton pending={pending}>{pending ? 'Submitting...' : 'Submit Comment'}</MainButton>;
}

function CommentForm() {
    // Initialize form state and action
    const [formState, formAction] = useFormState(addComment, {
        comments: [],
        error: null
    });

    // Since useOptimistic might not be available yet, implement our own
    // optimistic UI mechanism using useState
    const [pendingComment, setPendingComment] = useState<CommentType | null>(null);

    // Derive combined comments list with any pending optimistic comment
    const optimisticComments = [...formState.comments];
    if (pendingComment) {
        optimisticComments.push(pendingComment);
    }

    console.log('CommentForm render....');

    // Handle optimistic update when submitting the form
    const handleOptimisticUpdate = (formData: FormData) => {
        const comment = formData.get('comment') as string;
        // Only add optimistic update if comment is valid
        if (comment && comment.length >= 3) {
            setPendingComment({
                id: `optimistic-${Date.now()}`,
                text: comment,
                optimistic: true
            });

            // Clear pending comment after the form action completes
            setTimeout(() => {
                setPendingComment(null);
            }, 1500); // Slightly longer than our mock API delay
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <form
                action={formAction}
                onSubmit={(e) => {
                    const form = e.currentTarget;
                    handleOptimisticUpdate(new FormData(form));
                }}
                className="bg-white shadow-md rounded-lg p-6 mb-6"
            >
                <Textarea name="comment" label="Add a comment:" required />

                {formState.error && <p className="text-red-500 mb-4">{formState.error}</p>}
                <SubmitButton />
            </form>

            <CommentsList comments={optimisticComments} />
        </div>
    );
}

// Main component with Suspense boundary
function AfterComponent() {
    return (
        <Layout
            title="After: Modern Form Actions"
            description="Using form actions, useFormStatus, useFormState, and optimistic UI for clean, reactive form handling."
            showBackButton={true}
        >
            <Suspense fallback={<div className="p-4 text-center">Loading form...</div>}>
                <CommentForm />
            </Suspense>
        </Layout>
    );
}
