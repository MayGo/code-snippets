// Define the CommentType type to avoid collision with DOM Comment
export interface CommentType {
    id: string;
    text: string;
    optimistic?: boolean;
}

// Define the form state type
export interface ResponseType {
    success: boolean;
    error: string | null;
}

// Mock data for comments
let comments: CommentType[] = [
    {
        id: '1',
        text: 'Comment 1'
    }
];

// Function to get all comments
export async function getComments(): Promise<CommentType[]> {
    // Mock API call with a delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [...comments]; // Return a copy to avoid reference issues
}

// Server action (would normally be server-side in Next.js)
export async function addComment(comment: CommentType): Promise<ResponseType> {
    try {
        // Mock API call with a delay to simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const newComment: CommentType = {
            id: `comment-${Date.now()}`,
            text: comment.text
        };

        // Add the comment to our mock database
        comments.push(newComment);

        // Return new state
        return {
            success: true, // Return all comments
            error: null
        };
    } catch (err) {
        return {
            success: false,
            error: 'Failed to submit comment'
        };
    }
}
