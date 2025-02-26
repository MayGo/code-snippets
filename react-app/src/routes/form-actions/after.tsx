import { createFileRoute } from '@tanstack/react-router';
import { Suspense, useState } from 'react';
// Using only available hooks from react-dom
import { useFormState, useFormStatus } from 'react-dom';
import { Layout } from '../../components/Layout';
import { CommentItem } from './components/CommentItem';

// Define the Comment type
interface Comment {
    id: string;
    text: string;
    optimistic?: boolean;
}

// Define the form state type
interface FormState {
    comments: Comment[];
    error: string | null;
}

// Adding 'as any' to handle type error, but in a real app this would be properly
// typed in the router configuration
export const Route = createFileRoute('/form-actions/after' as any)({
    component: AfterComponent
});

// Server action (would normally be server-side in Next.js)
async function addComment(prevState: FormState, formData: FormData): Promise<FormState> {
    // Validate form
    const comment = formData.get('comment') as string;
    if (!comment || comment.length < 3) {
        return {
            error: 'Comment must be at least 3 characters long',
            comments: prevState.comments
        };
    }

    try {
        // Mock API call with a delay to simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock successful response
        const newComment = {
            id: `comment-${Date.now()}`,
            text: comment
        };

        // Return new state
        return {
            error: null,
            comments: [...prevState.comments, newComment]
        };
    } catch (err) {
        return {
            error: 'Failed to submit comment',
            comments: prevState.comments
        };
    }
}

// Submit button component with loading state
function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`px-4 py-2 rounded-md text-white font-medium ${
                pending ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
            {pending ? 'Submitting...' : 'Submit Comment'}
        </button>
    );
}

// Comment form component
function CommentForm() {
    // Initialize form state and action
    const [formState, formAction] = useFormState(addComment, {
        comments: [],
        error: null
    });

    // Since useOptimistic might not be available yet, implement our own
    // optimistic UI mechanism using useState
    const [pendingComment, setPendingComment] = useState<Comment | null>(null);

    // Derive combined comments list with any pending optimistic comment
    const optimisticComments = pendingComment ? [...formState.comments, pendingComment] : formState.comments;

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
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-gray-700 font-semibold mb-2">
                        Add a comment:
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                    />
                </div>

                {formState.error && <p className="text-red-500 mb-4">{formState.error}</p>}
                <SubmitButton />
            </form>

            <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Comments ({optimisticComments.length})</h3>

                {optimisticComments.length === 0 ? (
                    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                ) : (
                    <div className="space-y-2">
                        {optimisticComments.map((comment: Comment) => (
                            <CommentItem key={comment.id} text={comment.text} isOptimistic={comment.optimistic} />
                        ))}
                    </div>
                )}
            </div>
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
