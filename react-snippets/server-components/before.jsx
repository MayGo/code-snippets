// Before: Client-side data fetching
import { useEffect, useState } from 'react';

function BlogPost({ postId }) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            const response = await fetch(`/api/posts/${postId}`);
            const data = await response.json();
            setPost(data);
        }
        fetchPost();
    }, [postId]);

    if (!post) return <p>Loading...</p>;
    return <div>{post.content}</div>;
}
