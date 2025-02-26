import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { CommentsLayout } from './components/CommentsLayout';
import { CommentsList } from './components/CommentsList';
import { ErrorMessage } from './components/ErrorMessage';
import { MainButton } from './components/MainButton';
import { Textarea } from './components/Textarea';
import type { CommentType } from './components/actions';
import { addComment } from './components/requests';
import { uniqueId } from './components/utils';

export const Route = createFileRoute('/form-actions/before' as any)({
    component: BeforeComponent
});

function CommentForm() {
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [comments, setComments] = useState<CommentType[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccessMessage('');

        try {
            const newComment: CommentType = {
                id: uniqueId(),
                text: comment
            };

            await addComment(newComment);

            setComments((prevComments) => [...prevComments, newComment]);
            setComment('');
            setSuccessMessage('Comment added successfully!');
        } catch (err) {
            setError('Failed to submit comment');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <CommentsLayout>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
                <Textarea name="comment" label="Add a comment:" required value={comment} onChange={handleChange} />
                {error && <ErrorMessage error={error} />}
                {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
                <MainButton pending={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Comment'}</MainButton>
            </form>
            <CommentsList comments={comments} />
        </CommentsLayout>
    );
}

function BeforeComponent() {
    return (
        <Layout
            title="Before: Traditional Form Handling"
            description="Multiple useState hooks with manual loading states, error handling, and UI updates."
            showBackButton={true}
        >
            <CommentForm />
        </Layout>
    );
}
