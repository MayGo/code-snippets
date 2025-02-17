import db from './database';

// Server Component `page.js`
export default async function BlogPost({ postId }) {
    const post = await db.posts.get(postId);
    return <div>{post.content}</div>;
}


// To show a loading state in NextJS, create a `loading.js` file in the same directory:
export default function Loading() {
    return <PostSkeleton />;
}