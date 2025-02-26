// Define the CommentType type to avoid collision with DOM Comment
export interface CommentType {
    id: string;
    text: string;
    optimistic?: boolean;
}

// Define the form state type
export interface FormState {
    comments: CommentType[];
    error: string | null;
}

// Server action (would normally be server-side in Next.js)
export async function addComment(prevState: FormState, formData: FormData): Promise<FormState> {
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
        const newComment: CommentType = {
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
