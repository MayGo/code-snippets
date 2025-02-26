import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { CommentsList } from './components/CommentsList';
import { MainButton } from './components/MainButton';
import { Textarea } from './components/Textarea';

// Define the Comment type
interface Comment {
    id: string;
    text: string;
}

// Using 'as any' to bypass type checking for demonstration purposes
export const Route = createFileRoute('/form-actions/before' as any)({
    component: BeforeComponent
});

function BeforeComponent() {
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [comments, setComments] = useState<Comment[]>([]);

    console.log('BeforeComponent render....');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccessMessage('');

        try {
            // Mock API call with a small delay to simulate network latency
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Mock response
            const newComment = {
                id: `comment-${Date.now()}`,
                text: comment
            };

            // Update UI with new comment
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
        <Layout
            title="Before: Traditional Form Handling"
            description="Multiple useState hooks with manual loading states, error handling, and UI updates."
            showBackButton={true}
        >
            <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <Textarea name="comment" label="Add a comment:" required value={comment} onChange={handleChange} />

                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

                    <MainButton pending={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Comment'}</MainButton>
                </form>

                <CommentsList comments={comments} />
            </div>
        </Layout>
    );
}
