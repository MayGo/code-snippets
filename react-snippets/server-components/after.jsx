// After: Server-side data fetching with Server Components
// BlogPost.server.jsx
import db from './database';

export default async function BlogPost({ postId }) {
    const post = await db.posts.get(postId);
    return <div>{post.content}</div>;
}
