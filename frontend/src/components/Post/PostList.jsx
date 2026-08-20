import { useState, useEffect }from "react";
import { postsAPI } from "../../services/api";

import PostCard from "./PostCard";

    function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                setError(null);
                
                const data = await postsAPI.getAll();
                setPosts(data);  
                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchPosts();
    }, []);
    
    if (loading) return <div className="loading">Loading posts...</div>;
    if (error) return <div className="error">Error: {error}</div>;

        return(

        <section className="post-list">

            {posts.map((post) => (

             <PostCard

               key={post._id}

               post={post}

             />

            ))}

            </section>
    );
 }
 export default PostList;

             


      