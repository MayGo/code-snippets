import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { CommentItem } from './components/CommentItem';

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
                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-gray-700 font-semibold mb-2">
                            Add a comment:
                        </label>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={3}
                        />
                    </div>

                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-4 py-2 rounded-md text-white font-medium ${
                            isSubmitting ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                    </button>
                </form>

                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Comments ({comments.length})</h3>

                    {comments.length === 0 ? (
                        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                    ) : (
                        <div className="space-y-2">
                            {comments.map((comment) => (
                                <CommentItem key={comment.id} text={comment.text} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
