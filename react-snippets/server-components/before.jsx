import { useEffect, useState } from 'react';

export default function BlogPost({ postId }) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            const response = await fetch(`/api/posts/${postId}`);
            const data = await response.json();
            setPost(data);
        }
        fetchPost();
    }, [postId]);

    if (!post) return <PostSkeleton />;

    return <div>{post.content}</div>;
}
