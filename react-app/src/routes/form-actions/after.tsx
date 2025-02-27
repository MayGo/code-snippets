import { createFileRoute } from '@tanstack/react-router';
import { useActionState, useEffect, useOptimistic, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Layout } from '../../components/Layout';
import { getComments, postComment, type CommentType, type FormState } from './components/actions';
import { CommentsLayout } from './components/CommentsLayout';
import { CommentsList } from './components/CommentsList';
import { ErrorMessage } from './components/ErrorMessage';
import { MainButton } from './components/MainButton';
import { Textarea } from './components/Textarea';
import { uniqueId } from './components/utils';

export const Route = createFileRoute('/form-actions/after')({
    component: AfterComponent
});

function SubmitButton() {
    const { pending } = useFormStatus();
    return <MainButton pending={pending}>{pending ? 'Submitting...' : 'Submit Comment'}</MainButton>;
}

interface Props {
    comments: CommentType[];
    refetchComments: () => void;
}

function CommentForm({ comments, refetchComments }: Props) {
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
            <form action={formAction} className="bg-white shadow-md rounded-lg p-6 mb-6">
                <Textarea name="comment" label="Add a comment:" required disabled={isPending} />
                {formState.error && <ErrorMessage error={formState.error} />}
                <SubmitButton />
            </form>
            <CommentsList comments={optimisticComments} />
        </CommentsLayout>
    );
}

function AfterComponent() {
    const [comments, setComments] = useState<CommentType[]>([]);

    const refetchComments = async () => {
        setComments(await getComments());
    };

    useEffect(() => {
        refetchComments();
    }, []);

    return (
        <Layout
            title="After: Modern Form Actions"
            description="Using form actions, useFormStatus, useFormState, and optimistic UI for clean, reactive form handling."
            showBackButton={true}
        >
            <CommentForm comments={comments} refetchComments={refetchComments} />
        </Layout>
    );
}
