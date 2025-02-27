import { useEffect, useState } from 'react';

export function CommentForm({ comments, refetchComments }: Props) {
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
            <form onSubmit={handleSubmit}>
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
