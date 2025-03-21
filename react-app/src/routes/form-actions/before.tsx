import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import { CommentsLayout } from './components/CommentsLayout';
import { CommentsList } from './components/CommentsList';
import { ErrorMessage } from './components/ErrorMessage';
import { MainButton } from './components/MainButton';
import { Textarea } from './components/Textarea';
import type { CommentType } from './components/actions';
import { addComment, getComments } from './components/requests';
import { uniqueId } from './components/utils';

export const Route = createFileRoute('/form-actions/before' as any)({
    component: BeforeComponent
});

interface Props {
    comments: CommentType[];
    refetchComments: () => void;
}

function CommentForm({ comments, refetchComments }: Props) {
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [optimisticComments, setOptimisticComments] = useState<CommentType[]>(comments);

    useEffect(() => {
        setOptimisticComments(comments);
    }, [comments]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const newComment: CommentType = { id: uniqueId(), text: comment, optimistic: true };

            setOptimisticComments((prevComments) => [...prevComments, newComment]);

            await addComment(newComment);

            setComment('');
            refetchComments();
        } catch (err) {
            setError('Failed to submit comment');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <CommentsLayout>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
                <Textarea
                    name="comment"
                    label="Add a comment:"
                    required
                    value={comment}
                    onChange={handleChange}
                    disabled={isSubmitting}
                />
                {error && <ErrorMessage error={error} />}
                <MainButton pending={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Comment'}</MainButton>
            </form>
            <CommentsList comments={optimisticComments} />
        </CommentsLayout>
    );
}

function BeforeComponent() {
    const [comments, setComments] = useState<CommentType[]>([]);

    const refetchComments = async () => {
        const fetchedComments = await getComments();
        setComments(fetchedComments);
    };

    useEffect(() => {
        refetchComments();
    }, []);

    return (
        <Layout
            title="Before: Traditional Form Handling"
            description="Multiple useState hooks with manual loading states, error handling, and UI updates."
            showBackButton={true}
        >
            <CommentForm comments={comments} refetchComments={refetchComments} />
        </Layout>
    );
}
