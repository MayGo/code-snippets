import { useActionState, useOptimistic } from 'react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();
    return <MainButton pending={pending}>{pending ? 'Submitting...' : 'Submit Comment'}</MainButton>;
}

export function CommentForm({ comments, refetchComments }: Props) {
    const [optimisticComments, addOptimisticComment] = useOptimistic<CommentType[], CommentType>(
        comments,
        (state, newComment) => [...state, newComment]
    );

    const optimisticAddComment = async (prevState: FormState, formData: FormData) => {
        const comment = formData.get('comment') as string;
        const optimisticComment: CommentType = { id: uniqueId(), text: comment, optimistic: true };

        addOptimisticComment(optimisticComment);

        const result = await postComment(prevState, formData);

        if (result.success) {
            refetchComments();
        }

        return result;
    };

    const [formState, formAction, isPending] = useActionState(optimisticAddComment, {
        success: false,
        error: null
    });

    return (
        <CommentsLayout>
            <form action={formAction}>
                <Textarea name="comment" label="Add a comment:" required disabled={isPending} />
                {formState.error && <ErrorMessage error={formState.error} />}
                <SubmitButton />
            </form>
            <CommentsList comments={optimisticComments} />
        </CommentsLayout>
    );
}
