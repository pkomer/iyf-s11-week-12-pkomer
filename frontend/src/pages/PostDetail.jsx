import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        fetch(`https://community-hub-api-iko4.onrender.com/api/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [postId]);
    
    if (!post) return <p>Loading...</p>;
    
    return (
        <article>
            <Link to="/posts">&larr; Back to Posts</Link>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    );
}

export default PostDetail;