import { createFileRoute } from '@tanstack/react-router';
import { useOptimistic } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Layout } from '../../components/Layout';
import type { CommentType } from './components/actions';
import { addComment } from './components/actions';
import { CommentsLayout } from './components/CommentsLayout';
import { CommentsList } from './components/CommentsList';
import { ErrorMessage } from './components/ErrorMessage';
import { MainButton } from './components/MainButton';
import { Textarea } from './components/Textarea';
import { uniqueId } from './components/utils';

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
    const [optimisticComments, addOptimisticComment] = useOptimistic<CommentType[], CommentType>(
        [],
        (state, newComment) => [...state, newComment]
    );

    const optimisticAddComment = async (prevState: any, formData: FormData) => {
        const comment = formData.get('comment') as string;

        const optimisticComment: CommentType = {
            id: uniqueId(),
            text: comment,
            optimistic: true
        };

        addOptimisticComment(optimisticComment);

        return addComment(prevState, formData);
    };

    const [formState, formAction] = useFormState(optimisticAddComment, {
        comments: [],
        error: null
    });

    const allComments = [...formState.comments, ...optimisticComments.filter((c) => c.optimistic)];

    return (
        <CommentsLayout>
            <form action={formAction} className="bg-white shadow-md rounded-lg p-6 mb-6">
                <Textarea name="comment" label="Add a comment:" required />
                {formState.error && <ErrorMessage error={formState.error} />}
                <SubmitButton />
            </form>
            <CommentsList comments={allComments} />
        </CommentsLayout>
    );
}

// Main component
function AfterComponent() {
    return (
        <Layout
            title="After: Modern Form Actions"
            description="Using form actions, useFormStatus, useFormState, and optimistic UI for clean, reactive form handling."
            showBackButton={true}
        >
            <CommentForm />
        </Layout>
    );
}
