function PostCard({ post }) {

    return (

        <article className="post-card">

            <h3>{post.title}</h3>

            <p>{post.excerpt}</p>

            <p>{post.author}</p>
            
            <p>{post.date}</p>

            <p>{post.likes}</p>

        </article>
    );
}

export default PostCard;