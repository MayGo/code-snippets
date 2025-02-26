import { CommentItem } from './CommentItem';

// Make this component generic enough to work with both Comment types
interface CommentsListProps<T extends { id: string; text: string; optimistic?: boolean }> {
    comments: T[];
}

export function CommentsList<T extends { id: string; text: string; optimistic?: boolean }>({
    comments
}: CommentsListProps<T>) {
    return (
        <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Comments ({comments.length})</h3>

            {comments.length === 0 ? (
                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            ) : (
                <div className="space-y-2">
                    {comments.map((comment) => (
                        <CommentItem key={comment.id} text={comment.text} isOptimistic={comment.optimistic} />
                    ))}
                </div>
            )}
        </div>
    );
}
