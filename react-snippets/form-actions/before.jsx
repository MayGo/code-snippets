import { useState } from 'react';

export function CommentForm() {
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [comments, setComments] = useState([]);

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccessMessage('');

        try {
            // Mock API call
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: comment })
            });

            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }

            const result = await response.json();

            // Update UI with new comment
            setComments((prevComments) => [...prevComments, { id: result.id, text: comment }]);
            setComment('');
            setSuccessMessage('Comment added successfully!');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="comment-section">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="comment">Add a comment:</label>
                    <textarea id="comment" value={comment} onChange={handleChange} disabled={isSubmitting} required />
                </div>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                </button>
            </form>

            <div className="comments-list">
                <h3>Comments ({comments.length})</h3>
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        {comment.text}
                    </div>
                ))}
            </div>
        </div>
    );
}
