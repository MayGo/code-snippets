// Define the CommentType type to avoid collision with DOM Comment
export interface CommentType {
    id: string;
    text: string;
    optimistic?: boolean;
}

// Define the form state type
export interface ResponseType {
    comments: CommentType[];
    error: string | null;
}

// Server action (would normally be server-side in Next.js)
export async function addComment(comment: CommentType): Promise<ResponseType> {
    try {
        // Mock API call with a delay to simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock successful response
        const newComment: CommentType = {
            id: `comment-${Date.now()}`,
            text: comment.text
        };

        // Return new state
        return {
            comments: [newComment],
            error: null
        };
    } catch (err) {
        return {
            comments: [],
            error: 'Failed to submit comment'
        };
    }
}
