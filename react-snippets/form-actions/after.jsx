import { Suspense } from 'react';
import { useFormState, useFormStatus, useOptimistic } from 'react-dom';

// Server action (would be defined in a separate file in Next.js)
async function addComment(prevState, formData) {
    // Validate form
    const comment = formData.get('comment');
    if (!comment || comment.length < 3) {
        return {
            error: 'Comment must be at least 3 characters long',
            comments: prevState.comments
        };
    }

    try {
        // Mock API call (in real app, this would be a direct DB operation)
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: comment })
        });

        if (!response.ok) throw new Error('Failed to submit');
        const result = await response.json();

        // Return new state
        return {
            error: null,
            comments: [...prevState.comments, { id: result.id, text: comment }]
        };
    } catch (err) {
        return { error: err.message, comments: prevState.comments };
    }
}

// Submit button with loading state
function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit Comment'}
        </button>
    );
}

// Comment form component
function CommentForm() {
    const [formState, formAction] = useFormState(addComment, {
        comments: [],
        error: null
    });

    const [optimisticComments, addOptimisticComment] = useOptimistic(formState.comments, (state, newComment) => [
        ...state,
        newComment
    ]);

    const handleOptimisticUpdate = (formData) => {
        const comment = formData.get('comment');
        // Only add optimistic update if comment is valid
        if (comment && comment.length >= 3) {
            addOptimisticComment({ id: 'temp-id', text: comment, optimistic: true });
        }
    };

    return (
        <div className="comment-section">
            <form action={formAction} onSubmit={(e) => handleOptimisticUpdate(new FormData(e.currentTarget))}>
                <div className="form-group">
                    <label htmlFor="comment">Add a comment:</label>
                    <textarea id="comment" name="comment" required />
                </div>

                {formState.error && <p className="error-message">{formState.error}</p>}
                <SubmitButton />
            </form>

            <div className="comments-list">
                <h3>Comments ({optimisticComments.length})</h3>
                {optimisticComments.map((comment) => (
                    <div key={comment.id} className={`comment ${comment.optimistic ? 'optimistic' : ''}`}>
                        {comment.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export function CommentContainer() {
    return (
        <Suspense fallback={<div>Loading comments...</div>}>
            <CommentForm />
        </Suspense>
    );
}
