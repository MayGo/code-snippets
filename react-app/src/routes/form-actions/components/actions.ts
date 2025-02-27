// Define the CommentType type to avoid collision with DOM Comment
export interface CommentType {
    id: string;
    text: string;
    optimistic?: boolean;
}

let comments: CommentType[] = [
    {
        id: '1',
        text: 'Comment 1'
    }
];

export async function getComments(): Promise<CommentType[]> {
    return comments;
}

// Define the form state type
export interface FormState {
    success: boolean;
    error: string | null;
}

// Server action (would normally be server-side in Next.js)
export async function postComment(prevState: FormState, formData: FormData): Promise<FormState> {
    // Validate form
    const comment = formData.get('comment') as string;
    if (!comment || comment.length < 3) {
        return {
            error: 'Comment must be at least 3 characters long',
            success: false
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
        comments.push(newComment);
        // Return new state
        return {
            success: true,
            error: null
        };
    } catch (err) {
        return {
            success: false,
            error: 'Failed to submit comment'
        };
    }
}
